/*
Copyright (c) 2013 Ritchie Thai

See the file license.txt for copying permission.
*/

var startBuilding = function () {
	adventure.isInBuildMode = true;
};

var stopBuilding = function () {
	adventure.isInBuildMode = false;
};

var currentAdventure = {};

var adventure = (function () {
	var backgroundDirectory,
		startSceneName,
		scenes,
		worldState,
		mousePosition,
		currentScene,
		uiManager

	sceneToPageCoordinates = function (coordinates) {
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
	},

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
	},

	mouseIsOnScreen = function () {
		var screen = $("#screen"),
			isOnScreen = adventure.mousePosition.x >= 0 && adventure.mousePosition.y >= 0
				&& adventure.mousePosition.x <= screen.width() && adventure.mousePosition.y <= screen.height();
		return isOnScreen;
	},
	
	showActionDescription = function () {
		var actionDescription = getHotspotAt(adventure.mousePosition).description,
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
	},

	loadScene = function (scene) {
		adventure.currentScene = scene;
		$('#scene').css("background-image", "url(" + backgroundDirectory + adventure.currentScene.background + ")");
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
	},

	start = function () {
		adventure.worldState = {};
		mousePosition = {x: -1, y: -1};
		currentScene = scenes[startSceneName];
		loadScene(currentScene);
		uiManager = adventure.getUIManager();
		uiManager.bindHandlers();
	},

	configure = function (configuration) {
		if (configuration.backgroundDirectory) {
			backgroundDirectory = configuration.backgroundDirectory;
		}
		if (configuration.startSceneName) {
			startSceneName = configuration.startSceneName;
		}
		if (configuration.scenes) {
			scenes = configuration.scenes;
		}

		adventure.scenes = scenes;
	};

	var adventureToReturn = {
		configure: configure,
		start: start,
		startBuilding: startBuilding,
		stopBuilding: stopBuilding,
		putPlayerAt: putPlayerAt,
		movePlayer: movePlayer,
		getHotspotAt: getHotspotAt,
		showActionDescription: showActionDescription,
		loadScene: loadScene,

		scenes: scenes,
		worldState: {},
		mousePosition: mousePosition,
		currentScene: currentScene
	};

	return adventureToReturn;
}());
