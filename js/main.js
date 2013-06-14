/*
Copyright (c) 2013 Ritchie Thai

See the file license.txt for copying permission.
*/

(function () {
	var START_SCENE_NAME = "teaShop",
		BACKGROUND_DIR = "img/backgrounds/";

	adventure.startBuildMode = function () {
		adventure.isInBuildMode = true;
	};

	adventure.stopBuildMode = function () {
		adventure.isInBuildMode = false;
	};

	var exists = function (x) {
		return typeof x !== "undefined" && x !== null;
	};
	
	var isEmpty = function (string) {
		return string.length === 0;
	};
	
	// ------------------------------------------------------------------------------------


	var pageToSceneCoordinates = function (coordinates) {
		var screen = $("#screen"),
			offset = screen.offset(),
			result = {x: coordinates.x - offset.left, y: coordinates.y - offset.top};
		return result;
	};

	var onMouseMove = function (event) {
		adventure.mousePosition = pageToSceneCoordinates({x: event.pageX, y: event.pageY});
		adventure.showActionDescription();
	};

	var onArrive = function (event) {
		var hotspot = adventure.getHotspotAt(event);
		if (hotspot.onArrive) { hotspot.onArrive() };
		if (hotspot.destinationScene) { adventure.loadScene(adventure.scenes[hotspot.destinationScene]); }
		if (hotspot.destinationPosition) { adventure.putPlayerAt(hotspot.destinationPosition.x, hotspot.destinationPosition.y); }
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
		if (exists(hotspot.onHit)) adventure.sceneFunctions[hotspot.onHit]();
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
		if (exists(hotspot.shouldPreventDefault) && hotspot.shouldPreventDefault || shouldPreventDefault) return;
		if (hotspot.isSolid) { return; }
		adventure.movePlayer(coordinates, function () { onArrive(coordinates); });
	};
	
	var bindHandlers = function () {
		$(document).click(onClick);
		$(document).mousemove(onMouseMove);
		document.addEventListener("touchend",
			function (event) {
				var touches = event.changedTouches || event.targetTouches;
				var touch = touches[0];
				onClick(touch);
			},
			false);
		document.addEventListener("touchmove",
			function (event) {
				event.preventDefault();
				var touches = event.changedTouches || event.targetTouches;
				var touch = touches[touches.length - 1];
				var stringToShow = '';
				var sceneCoordinates = pageToSceneCoordinates({x: touch.pageX, y: touch.pageY});
				onMouseMove(touch);
			},
			false);
	};

	
	var init = function () {
		adventure.BACKGROUND_DIR = BACKGROUND_DIR;
		adventure.mousePosition = {x: -1, y: -1};
		adventure.initScenes();
		adventure.initScenes();
		adventure.currentScene = adventure.scenes[START_SCENE_NAME];
		adventure.loadScene(adventure.currentScene);
		bindHandlers();
	};
	
	$(init);
}());
