/*
Copyright (c) 2013 Ritchie Thai

See the file license.txt for copying permission.
*/

(function () {
	init = function () {
		var scenes = currentAdventure.makeScenes();
		var configuration = {
				startSceneName: 'teaShop',
				backgroundDirectory: 'img/backgrounds/',
				scenes: scenes
			};

		adventure.configure(configuration);
		adventure.start();
	};
	
	$(init);
}());
