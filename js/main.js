/*
Copyright (c) 2013 Ritchie Thai

See the file license.txt for copying permission.
*/

(function () {
	var START_SCENE_NAME = "teaShop",
		BACKGROUND_DIR = "img/backgrounds/";

	init = function () {
		adventure.BACKGROUND_DIR = 'img/backgrounds/';
		adventure.startSceneName = 'teaShop';
		adventure.initScenes();
		adventure.start();
	};
	
	$(init);
}());
