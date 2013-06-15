/*
Copyright (c) 2013 Ritchie Thai

See the file license.txt for copying permission.
*/

adventure.getSceneFunctions = function (adventureProvider) {
	var worldState = adventureProvider.worldState;

	var sceneFunctions = {
		'enterTeaShopAndSeeSimon': function () {
			if (!adventureProvider.worldState['hasSeenSimonInTeaShop']) {
				adventureProvider.worldState['hasSeenSimonInTeaShop'] = true;
				adventureProvider.putPlayerAt(135, 374);
				adventureProvider.startConversation('wonderWhereSimonIsAtTeaShop');
				return false;
			}
			if (adventureProvider.worldState['hasWaitedForSimonAtChangingHeads']) {
				adventureProvider.hideSceneImageById('simon');
			}
		},
		'onTalkingToSimonAboutAnimation': function () {
			adventureProvider.worldState['hasDecidedToGoToChangingHeads'] = true;
		},
		'enterChangingHeads': function () {
			if (!worldState['hasDecidedToGoToChangingHeads']) {
				adventureProvider.hideSceneImageById('simon-head');
			}
			if (worldState['hasDecidedToGoToChangingHeads'] &&
					!worldState['hasWaitedForSimonAtChangingHeads']) {
				worldState['hasWaitedForSimonAtChangingHeads'] = true;
				adventureProvider.startConversation('introduceTheChangingHeads');
				return false;
			}
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
