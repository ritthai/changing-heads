/*
Copyright (c) 2013 Ritchie Thai

See the file license.txt for copying permission.
*/

currentAdventure.getSceneFunctions = function (adventureProvider) {
	var sceneFunctions = {
		'enterTeaShopAndSeeSimon': function () {
			if (adventureProvider.worldState['hasSeenSimonInTeaShop']) { return; }
			adventureProvider.worldState['hasSeenSimonInTeaShop'] = true;
			adventureProvider.putPlayerAt(135, 374);
			adventureProvider.startConversation('wonderWhereSimonIsAtTeaShop');
			return false;
		},
		'enterChangingHeads': function () {
			if (adventureProvider.worldState['hasWaitedForSimonAtChangingHeads']) { return; }
			adventureProvider.worldState['hasWaitedForSimonAtChangingHeads'] = true;
			adventureProvider.putPlayerAt(135, 374);
			adventureProvider.startConversation('introduceTheChangingHeads');
			return false;
		},
		'onHittingNormalSizedHead': function () {
			adventureProvider.worldState['hasFoundSimon'] = true;
		},
		'onHittingTheChangingHeads': function () {
			if (!adventureProvider.worldState['hasFoundSimon']) { return; }
			adventureProvider.startConversation('talkToTheChangingHeads');
			return false;
		}
	};
	return sceneFunctions;
};
