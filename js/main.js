/*
Copyright (c) 2013 Ritchie Thai

See the file license.txt for copying permission.
*/

(function () {
	var START_SCENE_NAME = 'teaShop';
	var BACKGROUND_DIRECTORY = 'img/backgrounds/';

	adventure.getConfiguration = function () {
		var configuration = {
				startSceneName: START_SCENE_NAME,
				backgroundDirectory: BACKGROUND_DIRECTORY
			};
		return configuration;
	};

	var init = function () {
		var adventureEngine = adventure.getEngine().start();
	};
	
	$(init);
}());
