/*
Copyright (c) 2013 Ritchie Thai

See the file license.txt for copying permission.
*/

adventure.getUIManager = function (
    hitHotspot,
    getHotspotAt,
    getHotspotAtForScene,
    isInConversation,
    bindUserInputHandlers,
    graphicsManager,
    buildModeManager
) {
    var isMoving;
    var mousePosition;

    var init = function () {
        mousePosition = {x: -1, y: -1};
        isMoving = false;
    };

    var bindHandlers = function () {
        bindUserInputHandlers(onClick, onMouseMove);
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
        return hitHotspot(coordinates, state);
    };

    var onMouseMove = function (coordinates) {
        mousePosition = coordinates;
        showActionDescription(getHotspotAt(mousePosition).description);
    };

    var drawScene = function (scene, backgroundDirectory) {
        graphicsManager.removeScene();
        graphicsManager.setBackgroundImageOfScene(backgroundDirectory + scene.background);
        graphicsManager.addSceneImages(scene.images);
        showActionDescription(getHotspotAtForScene(mousePosition, scene).description);
    };

    var showActionDescription = function (description) {
        var actionDescription = isInConversation() ? '' : description;
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
