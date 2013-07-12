/*
Copyright (c) 2013 Ritchie Thai

See the file license.txt for copying permission.
*/

adventure.getUIManager = function (adventureProvider, isInConversationHandler, scenes, sceneFunctions) {
	var buildModeManager;

	var isInConversation = isInConversationHandler;

	var mousePosition;

	var firstCoordinateIsRecorded;
	var firstCoordinate;

	var sceneToPageCoordinates = function (coordinates) {
		var screen = $("#screen"),
			offset = screen.offset(),
			resultX = coordinates.x + offset.left,
			resultY = coordinates.y + offset.top;
		return {x: resultX, y: resultY};
	};

	var putPlayerAt = function (destination) {
		var player = $("#player");
		var destinationOnPage = sceneToPageCoordinates(destination);
		var playerTopLeftPoint = playerGroundToTopLeftPoint(player, destinationOnPage);
		player.offset({
				left: playerTopLeftPoint.x,
				top: playerTopLeftPoint.y
		});
	};

	var playerGroundToTopLeftPoint = function (player, groundPoint) {
		var topLeftPoint = {
			x: groundPoint.x - player.width() / 2,
			y: groundPoint.y - player.height()
		};
		return topLeftPoint;
	};

	var animatePlayerMove = function (player, destination, callback) {
		var playerTopLeftPoint = playerGroundToTopLeftPoint(player, destination);
		player.animate({
				left: playerTopLeftPoint.x,
				top: playerTopLeftPoint.y
			}, callback);
	};

	var makePlayerFaceRightWayForMove = function (player, destination) {
		if (destination.x < player.position().left + player.width()/2) {
			player.addClass('is-flipped-horizontally');
		} else {
			player.removeClass('is-flipped-horizontally');
		}
	};

	var movePlayer = function (destination, callback) {
		var player = $("#player");
		makePlayerFaceRightWayForMove(player, destination);
		animatePlayerMove(player, destination, callback);
	};

	var setBackgroundImageOfJqueryElement = function ($element, url) {
		$element.css('background-image', 'url(' + url + ')');
	};

	var addSceneImage = function (image) {
		var id = 'scene-image_' + image.id;
		var x = image.shape.topLeftCorner.x;
		var y = image.shape.topLeftCorner.y;
		var width = image.shape.bottomRightCorner.x - x;
		var height = image.shape.bottomRightCorner.y - y;

		$('#scene').append('<div id="' + id + '" class="scene-entity scene-entity_image"></div>');
		var $sceneImage = $('#' + id);
		$sceneImage.css('background-image', 'url(' + image.url + ')').
			css('left', x + 'px').
			css('top', y + 'px');
		$sceneImage.width(width).
			height(height);
	};

	var addSceneImages = function (images) {
		var i, image;
		if (!images) { return; }
		for (i = 0; i < images.length; i++) {
			image = images[i];
			if (!image.hidden) {
				addSceneImage(images[i]);
			}
		}
	};

	var setBackgroundImageOfScene = function (url) {
		var $scene = $('#scene');
		setBackgroundImageOfJqueryElement($scene, url);
	};

	var removeScene = function () {
		$('#scene .scene-entity').remove();
	};

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
		return sceneCoordinatesAreOnScreen(mousePosition);
	};

	var showActionDescription = function () {
		var actionDescription = adventureProvider.getHotspotAt(mousePosition).description,
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
		mousePosition = pageToSceneCoordinates({x: event.pageX, y: event.pageY});
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

	var onHitHotspotWhereOnHitAllowsDefault = function (clickedPoint, hotspot) {
		var shouldPreventMoveToClickedPoint = hotspot.shouldPreventDefault || hotspot.isSolid;
		if (hotspot.positionToMovePlayerTo) {
			adventureProvider.movePlayer(hotspot.positionToMovePlayerTo);
			shouldPreventMoveToClickedPoint = true;
		}
		if (hotspot.conversationToStart) {
			adventureProvider.startConversation(hotspot.conversationToStart);
			shouldPreventMoveToClickedPoint = true;
		}
		if (!(shouldPreventMoveToClickedPoint)) {
			adventureProvider.movePlayer(clickedPoint, function () { onArrive(clickedPoint); });
		}
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

	var eventIsOnScreen = function (event) {
		var sceneCoordinates = pageToSceneCoordinates({ x: event.pageX, y: event.pageY });
		return sceneCoordinatesAreOnScreen(sceneCoordinates);
	};

	var onClick = function (event) {
		onMouseMove(event);
		if (!eventIsOnScreen(event)) { return; }
		var coordinates = pageToSceneCoordinates({x: event.pageX, y: event.pageY});
		if (buildModeManager.isInBuildMode) {
			buildModeManager.onClickWhenInBuildMode(coordinates);
			return;
		}
		if (isInConversation()) return;
		hitHotspot(coordinates);
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

	var drawScene = function (scene, backgroundDirectory) {
		removeScene();
		setBackgroundImageOfScene(backgroundDirectory + scene.background);
		addSceneImages(scene.images);
		showActionDescription();
	};

	var init = function () {
		mousePosition = {x: -1, y: -1};
		buildModeManager = adventure.getBuildModeManager();
	};

	init();

	return {
		bindHandlers: bindHandlers,
		drawScene: drawScene,
		movePlayer: movePlayer,
		putPlayerAt: putPlayerAt
	};
};
