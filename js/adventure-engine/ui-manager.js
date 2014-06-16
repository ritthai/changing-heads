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
		adventureProvider.hitHotspot(coordinates);            
    };

    var onMouseMove = function (coordinates) {
        mousePosition = coordinates;
		showActionDescription();
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
