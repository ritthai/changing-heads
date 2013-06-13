/*
Copyright (c) 2013 Ritchie Thai

See the file license.txt for copying permission.
*/

var adventure = (function () {
	var sceneToPageCoordinates = function (coordinates) {
		var screen = $("#screen"),
			offset = screen.offset(),
			resultX = coordinates.x + offset.left,
			resultY = coordinates.y + offset.top;
		return {x: resultX, y: resultY};
	},
	
	putPlayerAt = function (x, y)  {
		var coordinates = sceneToPageCoordinates({x: x, y: y}),
			player = $("#player");
		$("#player").offset({left:coordinates.x - player.width()/2, top:coordinates.y - player.height()});
	},

	movePlayer = function (coordinates, callback) {
		var player = $("#player");
		if (coordinates.x < player.position().left + player.width()/2) {
			player.addClass('is-flipped-horizontally');
		} else {
			player.removeClass('is-flipped-horizontally');
		}
		player.animate({left:coordinates.x - player.width()/2, top:coordinates.y - player.height()}, callback);
	};

	getHotspotAt = function (point) {
		var i, hotspot, inHotspot, shape,
			hotspots = adventure.currentScene.hotspots;
		for (i = 0; i < hotspots.length; i += 1) {
			hotspot = hotspots[i];
			shape = hotspot.shape;
			inHotspot = shape.type === "rectangle"
				&& shape.topLeftCorner.x <= point.x && shape.topLeftCorner.y <= point.y
				&& shape.bottomRightCorner.x >= point.x && shape.bottomRightCorner.y >= point.y;
			if (inHotspot) return hotspot;
		}
		return {description: "", shape: {type: ""}, onArrive: function () {}};
	};

	mouseIsOnScreen = function () {
		var screen = $("#screen"),
			isOnScreen = adventure.mousePosition.x >= 0 && adventure.mousePosition.y >= 0
				&& adventure.mousePosition.x <= screen.width() && adventure.mousePosition.y <= screen.height();
		return isOnScreen;
	};
	
	showActionDescription = function () {
		var actionDescription = getHotspotAt(adventure.mousePosition).description,
			actionDescriptionElement = $("#action-description"),
			actionDescriptionBox = $("#action-description-box");
		if (!mouseIsOnScreen() || adventure.isInConversation || !actionDescription) {
			actionDescriptionBox.hide();
		} else {
			actionDescriptionElement.html(actionDescription);
			actionDescriptionBox.show();
		}
	};

	loadScene = function (scene) {
		adventure.currentScene = scene;
		$('#scene').css("background-image", "url(" + adventure.BACKGROUND_DIR + adventure.currentScene.background + ")");
		if (scene.onEnter) {
			var shouldPreventDefault = adventure.sceneFunctions[scene.onEnter]() == false;
			if (shouldPreventDefault) { return; }
		}
		if (scene.playerPositionOnEnter) {
			adventure.putPlayerAt(scene.playerPositionOnEnter.x, scene.playerPositionOnEnter.y);
		}
		if (scene.conversationToStartOnEnter) {
			adventure.startConversation(scene.conversationToStartOnEnter);
		}
		adventure.showActionDescription();
	};

	return {
		putPlayerAt: putPlayerAt,
		movePlayer: movePlayer,
		getHotspotAt: getHotspotAt,
		showActionDescription: showActionDescription,
		loadScene: loadScene
	};
}());
