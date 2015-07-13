/*
Copyright (c) 2013 Ritchie Thai

See the file license.txt for copying permission.
*/

adventure.getUserInputManager = function () {

    var debounceTime = 310;

    var isDebouncing = false;
    var debounceTimer;

    var onClickAtCoordinates, onMouseMoveAtCoordinates;

    var bindHandlers = function (_onClickAtCoordinates, _onMouseMoveAtCoordinates) {
        onClickAtCoordinates = _onClickAtCoordinates
        onMouseMoveAtCoordinates = _onMouseMoveAtCoordinates;
        $(document).click(onClick);
        $(document).mousemove(onMouseMove);
        document.addEventListener('touchend', onTouchEnd, false);
        document.addEventListener('touchmove', onTouchMove, false);
    };

    var onTouchEnd = function (event) {
        var touchEvent =  getTouchEventFromTouchesEvent(event);
        onClick(touchEvent);
    };

    var onTouchMove = function (event) {
        var touchEvent =  getTouchEventFromTouchesEvent(event);
        onMouseMove(touch);
    };

    var onClick = function (event) {
        if (isDebouncing) { return; }
        debounce();
        callUsingSceneCoordinatesIfEventIsOnScreen(event, onClickAtCoordinates);
    };

    var debounce = function () {
        isDebouncing = true;
        if (debounceTimer) { clearTimeout(debounceTimer); }
        debounceTimer = setTimeout(function () { isDebouncing = false; }, debounceTime);
    };

    var onMouseMove = function (event) {
        callUsingSceneCoordinatesIfEventIsOnScreen(event, onMouseMoveAtCoordinates);
    };

    var callUsingSceneCoordinatesIfEventIsOnScreen = function (event, callback) {
        if (!eventIsOnScreen(event)) { return; }
        var coordinates = pageToSceneCoordinates({x: event.pageX, y: event.pageY});
        callback(coordinates);
    };

    var getTouchEventFromTouchesEvent = function (event) {
        var touches = event.changedTouches || event.targetTouches;
        var touch = touches[0];
        return touch;
    };

    var eventIsOnScreen = function (event) {
        var sceneCoordinates = pageToSceneCoordinates({ x: event.pageX, y: event.pageY });
        return sceneCoordinatesAreOnScreen(sceneCoordinates);
    };

    var sceneCoordinatesAreOnScreen = function (sceneCoordinates) {
        var screen = $("#screen"),
            isOnScreen =
                sceneCoordinates.x >= 0 &&
                sceneCoordinates.y >= 0 &&
                sceneCoordinates.x <= screen.width() &&
                sceneCoordinates.y <= screen.height();
        return isOnScreen;
    };

    var pageToSceneCoordinates = function (coordinates) {
        var screen = $("#screen"),
            offset = screen.offset(),
            result = {x: coordinates.x - offset.left, y: coordinates.y - offset.top};
        return result;
    };

    return {
        bindHandlers: bindHandlers
    };
};
