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

	var pointIsInShape = function (point, shape) {
		var result = shape.type === "rectangle"
			&& shape.topLeftCorner.x <= point.x && shape.topLeftCorner.y <= point.y
			&& shape.bottomRightCorner.x >= point.x && shape.bottomRightCorner.y >= point.y;
		return result;
	};

	var getHotspotAt = function (point) {
		var i, hotspot, isInHotspot, shape, nullObject,
			hotspots = currentScene.hotspots;
		for (i = 0; i < hotspots.length; i += 1) {
			hotspot = hotspots[i];
			shape = hotspot.shape;
			isInHotspot = pointIsInShape(point, shape);
			if (isInHotspot) { return hotspot; }
		}
		nullObject = {description: '', shape: {type: ''}, onArrive: function () {}};
		return nullObject;
	},

	isInConversation = function () {
		return conversationManager.isInConversation();
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

	var hideSceneImageById = function (id) {
		$('#scene-image_' + id).hide();
	};

	var addSceneImages = function () {
		var i, image;
		var images = currentScene.images;
		if (!images) { return; }
		for (i = 0; i < images.length; i++) {
			addSceneImage(images[i]);
		}
	};

	var setBackgroundImageOfScene = function (url) {
		var $scene = $('#scene');
		util.setBackgroundImageOfJqueryElement($scene, url);
	};

	var performSceneActions = function () {
		var scene = currentScene;
		if (scene.onEnter) {
			var onEnterResult = sceneFunctions[scene.onEnter](scene);
			var shouldPreventDefault = onEnterResult == false;
			if (shouldPreventDefault) { return; }
		}
		if (scene.playerPositionOnEnter) {
			putPlayerAt(scene.playerPositionOnEnter.x, scene.playerPositionOnEnter.y);
		}
		if (scene.conversationToStartOnEnter) {
			conversationManager.startConversation(scene.conversationToStartOnEnter);
		}
	};

	var clone = function (objectToClone) {
		return $.extend(true, {}, objectToClone);
	};

	var unloadScene = function () {
		$('#scene .scene-entity').remove();
	};

	var loadScene = function (scene) {
		unloadScene();
		currentScene = clone(scene);
// TODO: performSceneActions should be done here, but
// right now images are beind hidden by jQuery after they are rendered
// so scene actions need to be done later at the moment.
//		performSceneActions();
		setBackgroundImageOfScene(backgroundDirectory + currentScene.background);
		addSceneImages();
		performSceneActions();
		uiManager.showActionDescription();
	};

	var startAssumingConfigurationDone = function () {
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
