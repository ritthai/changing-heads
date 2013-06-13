/*
Copyright (c) 2013 Ritchie Thai

See the file license.txt for copying permission.
*/

(function () {
	adventure.sceneFunctions = {
		'enterTeaShopAndSeeSimon': function () {
			if (adventure.worldState['hasSeenSimonInTeaShop']) { return; }
			adventure.worldState['hasSeenSimonInTeaShop'] = true;
			adventure.putPlayerAt(135, 374);
			adventure.startConversation('wonderWhereSimonIsAtTeaShop');
			return false;
		},
		'enterChangingHeads': function () {
			if (adventure.worldState['hasWaitedForSimonAtChangingHeads']) { return; }
			adventure.worldState['hasWaitedForSimonAtChangingHeads'] = true;
			adventure.putPlayerAt(135, 374);
			adventure.startConversation('introduceTheChangingHeads');
			return false;
		},
		'onHittingNormalSizedHead': function () {
			adventure.worldState['hasFoundSimon'] = true;
		},
		'onHittingTheChangingHeads': function () {
			if (!adventure.worldState['hasFoundSimon']) { return; }
			adventure.startConversation('talkToTheChangingHeads');
			return false;
		}
	};
}());
