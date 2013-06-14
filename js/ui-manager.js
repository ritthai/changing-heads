/*
Copyright (c) 2013 Ritchie Thai

See the file license.txt for copying permission.
*/

adventure.getUIManager = function (adventureProvider, isInConversationHandler, scenes, sceneFunctions) {
	var buildModeManager;

	var isInConversation = isInConversationHandler;

	var firstCoordinateIsRecorded;
	var firstCoordinate;

	var pageToSceneCoordinates = function (coordinates) {
		var screen = $("#screen"),
			offset = screen.offset(),
			result = {x: coordinates.x - offset.left, y: coordinates.y - offset.top};
		return result;
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

	var mouseIsOnScreen = function () {
		return sceneCoordinatesAreOnScreen(adventureProvider.mousePosition);
	};

	var showActionDescription = function () {
		var actionDescription = adventureProvider.getHotspotAt(adventureProvider.mousePosition).description,
			actionDescriptionElement = $("#action-description"),
			actionDescriptionBox = $("#action-description-box");
		if (!mouseIsOnScreen() || isInConversation() || !actionDescription) {
			actionDescriptionBox.hide();
			$('#screen').removeClass('is-clickable');
		} else {
			actionDescriptionElement.html(actionDescription);
			actionDescriptionBox.show();
			$('#screen').addClass('is-clickable');
		}
	};

	var onMouseMove = function (event) {
		adventureProvider.mousePosition = pageToSceneCoordinates({x: event.pageX, y: event.pageY});
		showActionDescription();
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

	var onClickWhereActionIsNotPrevented = function (coordinates, hotspot) {
		var shouldPreventDefault = false;
		if (hotspot.positionToMovePlayerTo) {
			adventureProvider.movePlayer(hotspot.positionToMovePlayerTo);
			shouldPreventDefault = true;
		}
		if (hotspot.conversationToStart) {
			adventureProvider.startConversation(hotspot.conversationToStart);
			shouldPreventDefault = true;
		}
		if (!(shouldPreventDefault || hotspot.shouldPreventDefault || hotspot.isSolid)) {
			adventureProvider.movePlayer(coordinates, function () { onArrive(coordinates); });
		}
	};

	var eventIsOnScreen = function (event) {
		var sceneCoordinates = pageToSceneCoordinates({ x: event.pageX, y: event.pageY });
		return sceneCoordinatesAreOnScreen(sceneCoordinates);
	};

	var onClick = function (event) {
		var coordinates = pageToSceneCoordinates({x: event.pageX, y: event.pageY});
		var hotspot = adventureProvider.getHotspotAt(coordinates);
		onMouseMove(event);
		if (!eventIsOnScreen(event)) { return; }
		if (buildModeManager.isInBuildMode) {
			buildModeManager.onClickWhenInBuildMode(coordinates);
			return;
		}
		if (isInConversation()) return;
		if (hotspot.onHit) { sceneFunctions[hotspot.onHit](); }
		if (isInConversation()) return;
		onClickWhereActionIsNotPrevented(coordinates, hotspot);
	};

	var getTouchEventFromTouchesEvent = function (event) {
		var touches = event.changedTouches || event.targetTouches;
		var touch = touches[0];
		return touch;
	};

	var onTouchEnd = function (event) {
		var touchEvent =  getTouchEventFromTouchesEvent(event);
		onClick(touchEvent);
	};

	var onTouchMove = function (event) {
		var touchEvent =  getTouchEventFromTouchesEvent(event);
		event.preventDefault();
		onMouseMove(touch);
	};
	
	var bindHandlers = function () {
		$(document).click(onClick);
		$(document).mousemove(onMouseMove);
		document.addEventListener('touchend', onTouchEnd, false);
		document.addEventListener('touchmove', onTouchMove, false);
	};

	var init = function () {
		buildModeManager = adventure.getBuildModeManager();
	};

	init();

	return {
		bindHandlers: bindHandlers,
		showActionDescription: showActionDescription
	};
};
