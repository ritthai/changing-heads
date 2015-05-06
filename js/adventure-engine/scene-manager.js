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
		backgroundDirectory	= configuration.backgroundDirectory;
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
		var hotspots = currentScene.hotspots;
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

	var hideSceneImageById = function (id) {
		each(currentScene.images, function (image) {
			if (image.id === id) {
				image.hidden = true;
			}
		});
		uiManager.hideSceneImageById(id);
	};

	var flipSceneImageById = function (id) {
		each(currentScene.images, function (image) {
			if (image.id === id) {
				image.isFlipped = true;
			}
		});
		uiManager.flipSceneImageById(id);
	};

	var hideHotspotById = function (id) {
		each(currentScene.hotspots, function(hotspot) {
			if (hotspot.id === id) {
				hotspot.hidden = true;
			}
		});
	};

	var performPreventableSceneActions = function () {
		var position = currentScene.playerPositionOnEnter;
		if (position) {
			putPlayerAtPoint(position);
		}
		var conversation = currentScene.conversationToStartOnEnter;
		if (conversation) {
			conversationManager.startConversation(conversation);
		}
	};

	var performSceneActions = function () {
		if (currentScene.onEnter) {
			var sceneFunction = sceneFunctions[currentScene.onEnter];
			var onEnterResult = sceneFunction(currentScene);
			shouldPreventDefault = onEnterResult !== false;
			if (shouldPreventDefault) { return; }
		}
		performPreventableSceneActions();
	};

	var loadScene = function (scene) {
		currentScene = util.clone(scene);
		var scope = {};
		var controller = sceneFunctions[currentScene.controller];
		if (controller) { controller(scope); }
		evaluateShowCondition(scope);
		performSceneActions();
		uiManager.drawScene(currentScene, backgroundDirectory);
	};

	var evaluateShowCondition = function (scope) {
		evaluateShowConditionOnElements(currentScene.images, scope);
		evaluateShowConditionOnElements(currentScene.hotspots, scope);
	};

	var evaluateShowConditionOnElements = function (elements, scope) {
		each(elements, function (element) {
			if (element.hasOwnProperty('showCondition') && !scope[element.showCondition]) {
				element.hidden = true;
			}
		});
	};

	var loadSceneByName = function (name) {
		loadScene(scenes[name]);
	};

	var hitHotspot = function (coordinates) {
		var hotspot = getHotspotAt(coordinates);
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
			onArrive(clickedPoint);
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
		var hotspot = getHotspotAt(event);
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
		hideSceneImageById: hideSceneImageById,
		flipSceneImageById: flipSceneImageById,
		hideHotspotById: hideHotspotById,
		isInConversation: isInConversation,
		hitHotspot: hitHotspot,
		configure: configure
	};

	return sceneManagerToReturn;
};
