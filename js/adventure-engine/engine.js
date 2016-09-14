/*
Copyright (c) 2013 Ritchie Thai

See the file license.txt for copying permission.
*/

var adventure = {};

adventure.getEngine = function () {
    var backgroundDirectory,
        startSceneName,
        sceneManager,
        uiManager,
        soundManager,
        sounds;

    var start = function () {
        configure();
        initializeModules();
        soundManager.addSounds(sounds);
        sceneManager.loadSceneByName(startSceneName);
        uiManager.bindHandlers();
    };

    var configure = function () {
        var configuration = adventure.getConfiguration();
        startSceneName = configuration.startSceneName;
        backgroundDirectory = configuration.backgroundDirectory;
    };

    var initializeModules = function () {
        var util = adventure.getUtil();

        sceneManager = adventure.getSceneManager(util);

        var conversations = adventure.getConversations();

        soundManager = adventure.makeSoundManager();

        var providerForSceneFunctions = {
            loadScene: sceneManager.loadSceneByName,
            putPlayerAt: sceneManager.putPlayerAt,
            movePlayer: sceneManager.movePlayer,
            facePlayerLeft: sceneManager.facePlayerLeft,
            facePlayerRight: sceneManager.facePlayerRight,
            hideSceneImageById: sceneManager.hideSceneImageById,
            hideSceneImageByIdForScene: sceneManager.hideSceneImageByIdForScene,
            hideHotspotById: sceneManager.hideHotspotById,
            flipSceneImageById: sceneManager.flipSceneImageById,
            startConversation: function () {}
        };
        var sceneFunctions = adventure.getSceneFunctions(providerForSceneFunctions, soundManager);

        var conversationDisplayer = adventure.getConversationDisplayer();

        sounds = adventure.getSounds();

        var conversationManager = adventure.getConversationManager(
            conversations, sceneFunctions, util, conversationDisplayer, soundManager);

        providerForSceneFunctions.startConversation = conversationManager.startConversation;

        var scenes = adventure.getScenes();

        var userInputManager = adventure.getUserInputManager();
        var graphicsManager = adventure.getGraphicsManager();
        var buildModeManager = adventure.getBuildModeManager();

        uiManager = adventure.getUIManager(
                sceneManager.hitHotspot,
                sceneManager.getHotspotAt,
                sceneManager.getHotspotAtForScene,
                sceneManager.isInConversation,
                userInputManager.bindHandlers,
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
