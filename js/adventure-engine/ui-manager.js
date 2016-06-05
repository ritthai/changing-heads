/*
Copyright (c) 2013 Ritchie Thai

See the file license.txt for copying permission.
*/

adventure.getUIManager = function (adventureProvider, isInConversationHandler, sceneFunctions,
        userInputManager,
        graphicsManager,
        buildModeManager) {

    var isInConversation = isInConversationHandler;

    var isMoving;
    var mousePosition;

    var init = function () {
        mousePosition = {x: -1, y: -1};
        isMoving = false;
    };

    var bindHandlers = function () {
        userInputManager.bindHandlers(onClick, onMouseMove);
    };

    var onClick = function (coordinates, state) {
        onMouseMove(coordinates);
        if (buildModeManager.isInBuildMode) {
            buildModeManager.onClickWhenInBuildMode(coordinates);
            return;
        }
        if (isInConversation()) { return; }
        if (isMoving) {
            return;
        }
        return adventureProvider.hitHotspot(coordinates, state);
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

    var movePlayer = function (destination, callback) {
        isMoving = true;
        graphicsManager.movePlayer(destination, function () {
            isMoving = false;
            callback();
        })
    };

    init();

    return {
        bindHandlers: bindHandlers,
        drawScene: drawScene,
        movePlayer: movePlayer,
        putPlayerAt: graphicsManager.putPlayerAt,
        facePlayerLeft: graphicsManager.facePlayerLeft,
        facePlayerRight: graphicsManager.facePlayerRight,
        hideSceneImageById: graphicsManager.hideSceneImageById,
        flipSceneImageById: graphicsManager.flipSceneImageById,
        makePlayerFaceRightWayForMove: graphicsManager.makePlayerFaceRightWayForMove
    };
};
