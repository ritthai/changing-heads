/*
Copyright (c) 2013 Ritchie Thai

See the file license.txt for copying permission.
*/

var currentAdventure = {};

var adventure = {};

adventure.getEngine = function () {
	var 	backgroundDirectory,
		startSceneName,
		scenes,
		worldState,
		mousePosition,
		currentScene,
		uiManager,
		conversationManager,
		sceneFunctions,
		conversations;

	var
	
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
			hotspots = currentScene.hotspots;
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

	isInConversation = function () {
		return conversationManager.isInConversation();
	},

	loadScene = function (scene) {
		currentScene = scene;
		$('#scene').css("background-image", "url(" + backgroundDirectory + currentScene.background + ")");
		if (scene.onEnter) {
			var shouldPreventDefault = sceneFunctions[scene.onEnter]() == false;
			if (shouldPreventDefault) { return; }
		}
		if (scene.playerPositionOnEnter) {
			putPlayerAt(scene.playerPositionOnEnter.x, scene.playerPositionOnEnter.y);
		}
		if (scene.conversationToStartOnEnter) {
			conversationManager.startConversation(scene.conversationToStartOnEnter);
		}
		uiManager.showActionDescription();
	},

	startAssumingConfigurationDone = function () {
		var adventureProviderForUIManager = {
			getHotspotAt: getHotspotAt,
			putPlayerAt: putPlayerAt,
			movePlayer: movePlayer,
			loadScene: loadScene,
			startConversation: function () {}
		};

		var adventureProviderForSceneFunctions = {
			putPlayerAt: putPlayerAt,
			movePlayer: movePlayer,
			loadScene: loadScene,
			startConversation: function () {},

			worldState: {}
		};

		scenes = adventure.getScenes();
		conversations = adventure.getConversations();
		sceneFunctions = adventure.getSceneFunctions(
			adventureProviderForSceneFunctions);

		currentScene = scenes[startSceneName];

		conversationManager = adventure.getConversationManager(conversations);
		adventureProviderForUIManager.startConversation = conversationManager.startConversation;
		adventureProviderForSceneFunctions.startConversation = conversationManager.startConversation;

		loadScene(currentScene);

		uiManager = adventure.getUIManager(adventureProviderForUIManager,
				isInConversation, scenes, sceneFunctions);
		uiManager.bindHandlers();
	},

	configure = function (configuration) {
		backgroundDirectory = configuration.backgroundDirectory;
		startSceneName = configuration.startSceneName;
	};

	var start = function () {
		var configuration = adventure.getConfiguration();
		configure(configuration);
		startAssumingConfigurationDone();
	};

	adventureEngineToReturn = {
		start: start
	};

	return adventureEngineToReturn;
};
