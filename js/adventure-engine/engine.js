/*
Copyright (c) 2013 Ritchie Thai

See the file license.txt for copying permission.
*/

var adventure = {};

adventure.getEngine = function () {
	var 	backgroundDirectory,
		startSceneName,
        sceneManager,
        uiManager;

	var start = function () {
		configure();
		initializeModules();
		sceneManager.loadSceneByName(startSceneName);
		uiManager.bindHandlers();
	};

	var configure = function () {
		var configuration = adventure.getConfiguration();
		startSceneName = configuration.startSceneName;
		backgroundDirectory = configuration.backgroundDirectory;
	};

	var initializeModules = function () {
		sceneManager = adventure.getSceneManager();

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

        var util = adventure.util;

		var conversationManager = adventure.getConversationManager(conversations, sceneFunctions, util);

		providerForSceneFunctions.startConversation = conversationManager.startConversation;

		var providerForUIManager = {
			loadScene: sceneManager.loadScene,
			putPlayerAt: sceneManager.putPlayerAt,
			movePlayer: sceneManager.movePlayer,
			getHotspotAt: sceneManager.getHotspotAt,
			startConversation: conversationManager.startConversation,
            hitHotspot: sceneManager.hitHotspot
		};

		var scenes = adventure.getScenes();

        var userInputManager = adventure.getUserInputManager();
        var graphicsManager = adventure.getGraphicsManager();
        var buildModeManager = adventure.getBuildModeManager();

		uiManager = adventure.getUIManager(
				providerForUIManager,
				sceneManager.isInConversation,
				sceneFunctions,
                userInputManager,
                graphicsManager,
                buildModeManager
            );

		sceneManager.configure({
			backgroundDirectory: backgroundDirectory,
			uiManager: uiManager,
			conversationManager: conversationManager,
			sceneFunctions: sceneFunctions,
			scenes: scenes
		});
	};

	return { start: start };
};
