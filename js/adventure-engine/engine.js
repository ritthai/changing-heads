/*
Copyright (c) 2013 Ritchie Thai

See the file license.txt for copying permission.
*/

var currentAdventure = {};

var adventure = {};

adventure.getEngine = function () {
	var util = adventure.util;

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

	var startAssumingConfigurationDone = function () {
		var sceneManager = adventure.getSceneManager();
		
		var getHotspotAt = sceneManager.getHotspotAt,
			putPlayerAt = sceneManager.putPlayerAt,
			movePlayer = sceneManager.movePlayer,
			loadScene = sceneManager.loadScene,
			hideSceneImageById = sceneManager.hideSceneImageById,
			hideHotspotById = sceneManager.hideHotspotById,
			isInConversation = sceneManager.isInConversation;

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
			hideSceneImageById: hideSceneImageById,
			hideHotspotById: hideHotspotById,
			startConversation: function () {},

			worldState: {}
		};

		scenes = adventure.getScenes();
		conversations = adventure.getConversations();
		sceneFunctions = adventure.getSceneFunctions(
			adventureProviderForSceneFunctions);

		currentScene = scenes[startSceneName];

		conversationManager = adventure.getConversationManager(conversations, sceneFunctions);
		adventureProviderForUIManager.startConversation = conversationManager.startConversation;
		adventureProviderForSceneFunctions.startConversation = conversationManager.startConversation;

		uiManager = adventure.getUIManager(adventureProviderForUIManager,
				isInConversation, scenes, sceneFunctions);
		uiManager.bindHandlers();

		sceneManager.configure({
			currentScene: currentScene,
			backgroundDirectory: backgroundDirectory,
			uiManager: uiManager,
			conversationManager: conversationManager,
			sceneFunctions: sceneFunctions
		});

		loadScene(currentScene);
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
