/*
Copyright (c) 2013 Ritchie Thai

See the file license.txt for copying permission.
*/

adventure.getUIManager = function () {
	var pageToSceneCoordinates = function (coordinates) {
		var screen = $("#screen"),
			offset = screen.offset(),
			result = {x: coordinates.x - offset.left, y: coordinates.y - offset.top};
		return result;
	};

	var mouseIsOnScreen = function () {
		var screen = $("#screen"),
			isOnScreen = adventure.mousePosition.x >= 0 && adventure.mousePosition.y >= 0
				&& adventure.mousePosition.x <= screen.width() && adventure.mousePosition.y <= screen.height();
		return isOnScreen;
	};

	var showActionDescription = function () {
		var actionDescription = adventure.getHotspotAt(adventure.mousePosition).description,
			actionDescriptionElement = $("#action-description"),
			actionDescriptionBox = $("#action-description-box");
		if (!mouseIsOnScreen() || adventure.isInConversation || !actionDescription) {
			actionDescriptionBox.hide();
			$('#screen').removeClass('is-clickable');
		} else {
			actionDescriptionElement.html(actionDescription);
			actionDescriptionBox.show();
			$('#screen').addClass('is-clickable');
		}
	};

	var onMouseMove = function (event) {
		adventure.mousePosition = pageToSceneCoordinates({x: event.pageX, y: event.pageY});
		showActionDescription();
	};

	var onArrive = function (event) {
		var hotspot = adventure.getHotspotAt(event);
		if (hotspot.onArrive) { hotspot.onArrive() };
		if (hotspot.destinationScene) {
			adventure.loadScene(adventure.scenes[hotspot.destinationScene]);
		}
		if (hotspot.destinationPosition) {
			adventure.putPlayerAt(
				hotspot.destinationPosition.x, hotspot.destinationPosition.y);
		}
	};
	
	var eventIsOnScreen = function (event) {
		var	screen = $("#screen"),
			offset = screen.offset(),
			width = screen.width(),
			height = screen.height(),
			x = event.pageX - offset.left,
			y = event.pageY - offset.top,
			isOnScreen = (event.pageX > offset.left && event.pageY > offset.top
				&& event.pageX < offset.left + width && event.pageY < offset.top + height);
		return isOnScreen;
	};

	var onClick = function (event) {
		onMouseMove(event);
		var coordinates = pageToSceneCoordinates({x: event.pageX, y: event.pageY}),
			hotspot = adventure.getHotspotAt(coordinates);
		if (!eventIsOnScreen(event)) return;
		if (adventure.isInBuildMode) {
			if (adventure.firstCoordinateIsRecorded) {
				var firstCoordinate = adventure.firstCoordinate;
				var secondCoordinate = coordinates;
				var x1 = firstCoordinate.x;
				var y1 = firstCoordinate.y;
				var x2 = secondCoordinate.x;
				var y2 = secondCoordinate.y;

				var output = ', {' + '\n' +
				'	description: "Examine",' + '\n' +
				'	shape: { type: "rectangle", topLeftCorner: {x: ' + x1 + ', y: ' + y1 + '}, ' +
					'bottomRightCorner: {x: ' + x2 + ', y: ' + y2 + '} }' + '\n' +
				'}' + '\n';

				console.log(output);

				adventure.firstCoordinateIsRecorded = false;
			} else {
				adventure.firstCoordinate = coordinates;
				adventure.firstCoordinateIsRecorded = true;
			}
			return;
		}
		if (adventure.isInConversation) return;
		if (hotspot.onHit) adventure.sceneFunctions[hotspot.onHit]();
		if (adventure.isInConversation) return;
		var shouldPreventDefault = false;
		if (hotspot.positionToMovePlayerTo) {
			adventure.movePlayer(hotspot.positionToMovePlayerTo);
			shouldPreventDefault = true;
		}
		if (hotspot.conversationToStart) {
			adventure.startConversation(hotspot.conversationToStart);
			shouldPreventDefault = true;
		}
		if (hotspot.shouldPreventDefault
				&& hotspot.shouldPreventDefault || shouldPreventDefault) {
			return;
		}
		if (hotspot.isSolid) { return; }
		adventure.movePlayer(coordinates, function () { onArrive(coordinates); });
	};

	var onTouchEnd = function (event) {
		var touches = event.changedTouches || event.targetTouches;
		var touch = touches[0];
		onClick(touch);
	};

	var onTouchMove = function (event) {
		event.preventDefault();
		var touches = event.changedTouches || event.targetTouches;
		var touch = touches[touches.length - 1];
		var stringToShow = '';
		var sceneCoordinates = pageToSceneCoordinates({x: touch.pageX, y: touch.pageY});
		onMouseMove(touch);
	};
	
	var bindHandlers = function () {
		$(document).click(onClick);
		$(document).mousemove(onMouseMove);
		document.addEventListener('touchend', onTouchEnd, false);
		document.addEventListener('touchmove', onTouchMove, false);
	};

	return {
		bindHandlers: bindHandlers,
		showActionDescription: showActionDescription
	};
};
