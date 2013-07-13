/*
Copyright (c) 2013 Ritchie Thai

See the file license.txt for copying permission.
*/

var currentAdventure = {};

var adventure = {};

adventure.getEngine = function () {
	var 	backgroundDirectory,
		startSceneName;

	var startAssumingConfigurationDone = function () {
		var sceneManager = adventure.getSceneManager();

		var conversations = adventure.getConversations();

		var providerForSceneFunctions = {
			loadScene: sceneManager.loadSceneByName,
			putPlayerAt: sceneManager.putPlayerAt,
			movePlayer: sceneManager.movePlayer,
			hideSceneImageById: sceneManager.hideSceneImageById,
			hideHotspotById: sceneManager.hideHotspotById,
			startConversation: function () {}
		};
		var sceneFunctions = adventure.getSceneFunctions(providerForSceneFunctions);

		var conversationManager = adventure.getConversationManager(conversations, sceneFunctions);

		providerForSceneFunctions.startConversation = conversationManager.startConversation;

		var providerForUIManager = {
			loadScene: sceneManager.loadScene,
			putPlayerAt: sceneManager.putPlayerAt,
			movePlayer: sceneManager.movePlayer,
			getHotspotAt: sceneManager.getHotspotAt,
			startConversation: conversationManager.startConversation
		};

		var scenes = adventure.getScenes();

		// TODO: UI Manager and Scene Functions shouldn't really need the scenes.
		// loadScene should be modified to also work with just a scene name

		var uiManager = adventure.getUIManager(
				providerForUIManager,
				sceneManager.isInConversation,
				scenes,
				sceneFunctions);


		var currentScene = scenes[startSceneName];

		// TODO: Scene Manager doesn't have scenes, but UI Manager and Scene Functions do.
		// Clearly the logic was divided up incorrectly here.
		sceneManager.configure({
			currentScene: currentScene,
			backgroundDirectory: backgroundDirectory,
			uiManager: uiManager,
			conversationManager: conversationManager,
			sceneFunctions: sceneFunctions,
			scenes: scenes
		});

		sceneManager.loadScene(currentScene);
		uiManager.bindHandlers();
	};

	var configure = function () {
		var configuration = adventure.getConfiguration();
		startSceneName = configuration.startSceneName;
		backgroundDirectory = configuration.backgroundDirectory;
	};

	var start = function () {
		configure();
		startAssumingConfigurationDone();
	};

	adventureEngineToReturn = {
		start: start
	};

	return adventureEngineToReturn;
};
