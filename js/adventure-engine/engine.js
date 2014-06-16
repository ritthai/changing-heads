/*
Copyright (c) 2013 Ritchie Thai

See the file license.txt for copying permission.
*/

var adventure = {};

adventure.getEngine = function () {
	var 	backgroundDirectory,
		startSceneName;

	var start = function () {
		configure();
		startAssumingConfigurationDone();
	};

	var configure = function () {
		var configuration = adventure.getConfiguration();
		startSceneName = configuration.startSceneName;
		backgroundDirectory = configuration.backgroundDirectory;
	};

	var startAssumingConfigurationDone = function () {
		var sceneManager = adventure.getSceneManager();

		var conversations = adventure.getConversations();

		var providerForSceneFunctions = {
			loadScene: sceneManager.loadSceneByName,
			putPlayerAt: sceneManager.putPlayerAt,
			movePlayer: sceneManager.movePlayer,
			facePlayerLeft: sceneManager.facePlayerLeft,
			facePlayerRight: sceneManager.facePlayerRight,
			hideSceneImageById: sceneManager.hideSceneImageById,
			hideHotspotById: sceneManager.hideHotspotById,
			flipSceneImageById: sceneManager.flipSceneImageById,
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

        var userInputManager = adventure.getUserInputManager();
        var buildModeManager = adventure.getBuildModeManager();
        var graphicsManager = adventure.getGraphicsManager();

		var uiManager = adventure.getUIManager(
				providerForUIManager,
				sceneManager.isInConversation,
				scenes,
				sceneFunctions,
                userInputManager,
                graphicsManager,
                buildModeManager
            );


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

	return { start: start };
};
