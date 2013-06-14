/*
Copyright (c) 2013 Ritchie Thai

See the file license.txt for copying permission.
*/

(function () {
	init = function () {
		var scenes = currentAdventure.getScenes();
		var conversations = currentAdventure.getConversations();
		var configuration = {
				startSceneName: 'teaShop',
				backgroundDirectory: 'img/backgrounds/',
				scenes: scenes,
				conversations: conversations,
				sceneFunctions: adventure.sceneFunctions
			};

		adventure.configure(configuration);
		adventure.start();
	};
	
	$(init);
}());
