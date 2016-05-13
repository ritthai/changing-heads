/*
Copyright (c) 2013 Ritchie Thai

See the file license.txt for copying permission.
*/

adventure.getSceneManager = function (util) {

    var each = util.each;

    var nullObjectHotspot = {description: '', shape: {type: ''}, onArrive: function () {}};

    var currentScene,
        backgroundDirectory,
        uiManager,
        conversationManager,
        sceneFunctions,
        scenes;

    var configure = function (configuration) {
        backgroundDirectory    = configuration.backgroundDirectory;
        uiManager = configuration.uiManager;
        conversationManager = configuration.conversationManager;
        sceneFunctions = configuration.sceneFunctions;
        scenes = configuration.scenes;
    };

    var putPlayerAt = function (x, y)  {
        uiManager.putPlayerAt({x: x, y: y});
    };

    var putPlayerAtPoint = function (point) {
        putPlayerAt(point.x, point.y);
    };

    var facePlayerLeft = function () {
        uiManager.facePlayerLeft();
    };

    var facePlayerRight = function () {
        uiManager.facePlayerRight();
    };

    var movePlayer = function (destination, callback) {
        uiManager.movePlayer(destination, callback)
    };

    var pointIsInShape = function (point, shape) {
        var topLeftCorner = shape.topLeftCorner;
        var bottomRightCorner = shape.bottomRightCorner;
        var result =
            shape.type === "rectangle" &&
            point.x >= topLeftCorner.x &&
            point.x <= bottomRightCorner.x &&
            point.y >= topLeftCorner.y &&
            point.y <= bottomRightCorner.y;
        return result;
    };

    var getHotspotAt = function (point) {
        return getHotspotAtForScene(point, currentScene);
    };

    var getHotspotAtForScene = function (point, scene) {
        var hotspots = scene.hotspots;
        for (var i = 0; i < hotspots.length; i += 1) {
            var hotspot = hotspots[i];
            if (!hotspot.hidden && pointIsInShape(point, hotspot.shape)) {
                return hotspot;
            }
        }
        return nullObjectHotspot;
    };

    var isInConversation = function () {
        return conversationManager.isInConversation();
    };

    var hideSceneImageByIdForScene = function (id, scene) {
        each(scene.images, function (image) {
            if (image.id === id) {
                image.hidden = true;
            }
        });
        uiManager.hideSceneImageById(id);
    };

    var flipSceneImageById = function (scene, id) {
        each(scene.images, function (image) {
            if (image.id === id) {
                image.isFlipped = true;
            }
        });
        uiManager.flipSceneImageById(id);
    };

    var hideHotspotById = function (scene, id) {
        each(scene.hotspots, function(hotspot) {
            if (hotspot.id === id) {
                hotspot.hidden = true;
            }
        });
    };

    var loadSceneByName = function (name) {
        loadScene(scenes[name]);
    };

    var loadScene = function (scene) {
        var prepared = prepareLoadedScene(scene);
        uiManager.drawScene(prepared, backgroundDirectory);
        currentScene = prepared;
    };

    var prepareLoadedScene = function (scene) {
        return thread(scene, [
            evaluateShowConditionsForScene,
            performSceneActions]
        );
    };

    var thread = function (value, functions) {
        var x = value;
        each(functions, function (f) {
            x = f(x);
        });
        return x;
    };

    var evaluateShowConditionsForScene = function (scene) {
        var scope = {};
        var controller = sceneFunctions[scene.controller];
        if (controller) { controller(scope); }
        return evaluateShowCondition(scene, scope);
    };

    var evaluateShowCondition = function (scene, scope) {
        var newScene = util.clone(scene);
        newScene.images = evaluateShowConditionOnElements(scene.images, scope);
        newScene.hotspots = evaluateShowConditionOnElements(scene.hotspots, scope);
        return newScene;
    };

    var evaluateShowConditionOnElements = function (elements, scope) {
        var newElements = util.clone(elements);
        each(newElements, function (element) {
            if (element.hasOwnProperty('showCondition') && !scope[element.showCondition]) {
                element.hidden = true;
            }
        });
        return newElements;
    };

    var performSceneActions = function (scene) {
        var onEnterResult = callOnEnterForScene(scene);
        var newScene = onEnterResult.scene;
        if (!onEnterResult.shouldPreventDefault) {
            performPreventableSceneActions(newScene);
        }
        return newScene;
    };

    var callOnEnterForScene = function (scene) {
        if (!scene.onEnter) { return false; }
        var onEnter = sceneFunctions[scene.onEnter];
        var newScene = util.clone(scene);
        var result = onEnter(newScene);
        return {
            shouldPreventDefault: result !== false,
            scene: newScene
        };
    };

    var performPreventableSceneActions = function (scene) {
        var position = scene.playerPositionOnEnter;
        if (position) {
            putPlayerAtPoint(position);
        }
        var conversation = scene.conversationToStartOnEnter;
        if (conversation) {
            conversationManager.startConversation(conversation);
        }
    };

    var hitHotspot = function (coordinates) {
        var hotspot = getHotspotAtForScene(coordinates, currentScene);
        if (hotspot.onHit) {
            var onHitResult = sceneFunctions[hotspot.onHit]();
            var shouldPreventDefault = onHitResult === false;
            if (shouldPreventDefault) { return; }
        }
        if (isInConversation()) return;
        onHitHotspotWhereOnHitAllowsDefault(coordinates, hotspot);
    };

    var onHitHotspotWhereOnHitAllowsDefault = function (clickedPoint, hotspot) {
        if (hotspot.positionToMovePlayerTo) {
            movePlayerToHotspot(hotspot);
        }
        if (hotspot.conversationToStart) {
            conversationManager.startConversation(hotspot.conversationToStart);
        }
        if (shouldMoveToClickedPoint(hotspot)) {
            movePlayer(clickedPoint, function () { onArrive(clickedPoint); });
        } else if (hotspot.shouldStandStill) {
            // TODO: A bit hacky. 50 seconds to debounce
            // Android's use of both click and touch events
            setTimeout(function () { onArrive(clickedPoint); }, 50);
        }
    };

    var shouldMoveToClickedPoint = function (hotspot) {
        return !(hotspot.shouldPreventDefault || hotspot.isSolid || hotspot.shouldStandStill ||
            hotspot.positionToMovePlayerTo || hotspot.conversationToStart);
    };

    var movePlayerToHotspot = function (hotspot) {
        movePlayer(hotspot.positionToMovePlayerTo, function () {
            uiManager.makePlayerFaceRightWayForMove(hotspot.shape.bottomRightCorner);
        });
    };

    var onArrive = function (event) {
        var hotspot = getHotspotAtForScene(event, currentScene);
        if (hotspot.onArrive) { hotspot.onArrive() };
        if (hotspot.destinationScene) {
            loadScene(scenes[hotspot.destinationScene]);
        }
        if (hotspot.destinationPosition) {
            putPlayerAt(
                hotspot.destinationPosition.x, hotspot.destinationPosition.y);
        }
    };

    var sceneManagerToReturn = {
        getHotspotAt: getHotspotAt,
        putPlayerAt: putPlayerAt,
        movePlayer: movePlayer,
        facePlayerLeft: facePlayerLeft,
        facePlayerRight: facePlayerRight,
        loadScene: loadScene,
        loadSceneByName: loadSceneByName,
        hideSceneImageByIdForScene: hideSceneImageByIdForScene,
        flipSceneImageById: flipSceneImageById,
        hideHotspotById: hideHotspotById,
        isInConversation: isInConversation,
        hitHotspot: hitHotspot,
        configure: configure
    };

    return sceneManagerToReturn;
};
