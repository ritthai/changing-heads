/*
Copyright (c) 2013 Ritchie Thai

See the file license.txt for copying permission.
*/

adventure.getUIManager = function (adventureProvider, isInConversationHandler, scenes, sceneFunctions,
        userInputManager,
        graphicsManager,
        buildModeManager) {

	var isInConversation = isInConversationHandler;

	var mousePosition;

	var init = function () {
		mousePosition = {x: -1, y: -1};
	};

	var bindHandlers = function () {
        userInputManager.bindHandlers(onClick, onMouseMove);
	};

    var onClick = function (coordinates) {
        onMouseMove(coordinates);
		if (buildModeManager.isInBuildMode) {
			buildModeManager.onClickWhenInBuildMode(coordinates);
			return;
		}
		if (isInConversation()) return;
		hitHotspot(coordinates);            
    };

    var onMouseMove = function (coordinates) {
        mousePosition = coordinates;
		showActionDescription();
    };

	var hitHotspot = function (coordinates) {
		// TODO: The this logic should go in scene manager
		var hotspot = adventureProvider.getHotspotAt(coordinates);
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
			adventureProvider.startConversation(hotspot.conversationToStart);
		}
		if (shouldMoveToClickedPoint(hotspot)) {
			adventureProvider.movePlayer(clickedPoint, function () { onArrive(clickedPoint); });
		}
	};

    var shouldMoveToClickedPoint = function (hotspot) {
        return !(hotspot.shouldPreventDefault || hotspot.isSolid ||
            hotspot.positionToMovePlayerTo || hotspot.conversationToStart);
    };

    var movePlayerToHotspot = function (hotspot) {
		adventureProvider.movePlayer(hotspot.positionToMovePlayerTo, function () {
			makePlayerFaceRightWayForMove(hotspot.shape.bottomRightCorner);
		});
    };

	var onArrive = function (event) {
		var hotspot = adventureProvider.getHotspotAt(event);
		if (hotspot.onArrive) { hotspot.onArrive() };
		if (hotspot.destinationScene) {
			adventureProvider.loadScene(scenes[hotspot.destinationScene]);
		}
		if (hotspot.destinationPosition) {
			adventureProvider.putPlayerAt(
				hotspot.destinationPosition.x, hotspot.destinationPosition.y);
		}
	};

	var drawScene = function (scene, backgroundDirectory) {
		graphicsManager.removeScene();
		graphicsManager.setBackgroundImageOfScene(backgroundDirectory + scene.background);
		graphicsManager.addSceneImages(scene.images);
		showActionDescription();
	};

	var showActionDescription = function () {
		var actionDescription = isInConversation() ?
            '' : adventureProvider.getHotspotAt(mousePosition).description;
		graphicsManager.showActionDescription(actionDescription);
	};

	init();

	return {
		bindHandlers: bindHandlers,
		drawScene: drawScene,
		movePlayer: graphicsManager.movePlayer,
		putPlayerAt: graphicsManager.putPlayerAt,
		facePlayerLeft: graphicsManager.facePlayerLeft,
		facePlayerRight: graphicsManager.facePlayerRight,
		hideSceneImageById: graphicsManager.hideSceneImageById,
		flipSceneImageById: graphicsManager.flipSceneImageById
	};
};
