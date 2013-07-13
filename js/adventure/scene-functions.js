/*
Copyright (c) 2013 Ritchie Thai

See the file license.txt for copying permission.
*/

adventure.getSceneFunctions = function (adventureProvider) {
	var worldState = {};

	var addInterviewCassandraOptionIfDoneAskingWhatWasIf = function (currentConversation) {
		if (worldState['hasAskedCassandraWhatWasUp'] &&
				worldState['hasAskedCassandraAboutBurningADude']) {
			currentConversation.options = [{
				"description": "Continue",
				"next": "interviewCassandra"
			}];
		}
	};

	var sceneFunctions = {

		'enterTeaShopAndSeeSimon': function () {
			if (!worldState['hasSeenSimonInTeaShop']) {
				worldState['hasSeenSimonInTeaShop'] = true;
				adventureProvider.putPlayerAt(135, 374);
				adventureProvider.startConversation('startMenu');
				return false;
			}
			if (worldState['hasWaitedForSimonAtChangingHeads']) {
				adventureProvider.hideSceneImageById('simon');
				adventureProvider.hideHotspotById('talkToSimon');
			}
		},

		'playLittleDitty': function () {
			var littleDitty = new buzz.sound( "audio/music/mellow-introduction", {
				formats: [ "wav" ]
			});
			littleDitty.fadeIn().play();
		},

		'onTalkingToSimonAboutAnimation': function () {
			worldState['hasDecidedToGoToChangingHeads'] = true;
		},

		'enterChangingHeads': function () {
			if (!worldState['hasDecidedToGoToChangingHeads']) {
				adventureProvider.hideSceneImageById('simon-head');
				adventureProvider.hideHotspotById('examineNormalSizedHead');
			}
			if (worldState['hasDecidedToGoToChangingHeads'] &&
					!worldState['hasWaitedForSimonAtChangingHeads']) {
				worldState['hasWaitedForSimonAtChangingHeads'] = true;
				adventureProvider.startConversation('introduceTheChangingHeads');
				return false;
			}
		},

		'onHittingNormalSizedHead': function () {
			worldState['hasFoundSimon'] = true;
		},

		'onHittingTheChangingHeads': function () {
			if (!worldState['hasFoundSimon']) { return; }
			adventureProvider.startConversation('talkToTheChangingHeads');
			worldState['hasDecidedToSeeCassandra'] = true;
			return false;
		},

		'onHittingCaveOfCassandra': function () {
			if (!worldState['hasDecidedToSeeCassandra']) {
				adventureProvider.startConversation('mentionFearOfCassandra');
				return false;
			}
		},

		'talkToCassandra': function () {
			if (worldState['hasSalamanderTea']) {
				adventureProvider.startConversation('giveCassandraSalamanderTea');
				return false;
			}
			if (worldState['hasFedSalamander']) {
				worldState['isPlanningToAskTomForSpecialTea'] = true;
				adventureProvider.startConversation('askCassandraForAnotherFish');
				return false;
			}
		},

		'askCassandraWhatWasUp': function (currentConversation) {
			worldState['hasAskedCassandraWhatWasUp'] = true;
			addInterviewCassandraOptionIfDoneAskingWhatWasIf(currentConversation);
			return currentConversation;
		},

		'askCassandraAboutBurningADude': function (currentConversation) {
			worldState['hasAskedCassandraAboutBurningADude'] = true;
			addInterviewCassandraOptionIfDoneAskingWhatWasIf(currentConversation);
			return currentConversation;
		},

		'interviewCassandraAboutThings': function () {
			worldState['hasFish'] = true;
		},

		'onHittingSalamander': function () {
			if (worldState['hasTreatedSalamander']) {
				adventureProvider.loadScene('sky');
				return false;
			}
			if (worldState['hasGivenCassandraSalamanderTea']) {
				worldState['hasTreatedSalamander'] = true;
				adventureProvider.startConversation('treatSalamander');
				return false;
			}
			if (worldState['hasFish']) {
				worldState['hasFedSalamander'] = true;
				adventureProvider.startConversation('feedSalamander');
				return false;
			}
			adventureProvider.startConversation('examineSalamander');
			return false;
		},

		'onHittingTeaShopOwner': function () {
			if (worldState['isPlanningToGoToDoctor']) {
				adventureProvider.loadScene('pharmacy');
				return false;
			}
			if (worldState['isPlanningToAskTomForSpecialTea']) {
				worldState['isPlanningToGoToDoctor'] = true; // TODO: This is temporary.
				adventureProvider.startConversation('askTomForSpecialTea');
				return false;
			}
		},

		'talkToMedicineMan': function () {
			worldState['hasSalamanderTea'] = true;
		},

		'giveCassandraSalamanderTea': function () {
			worldState['hasGivenCassandraSalamanderTea'] = true;
		},

		'enterSky': function () {
			adventureProvider.startConversation('talkAboutPastOfCassandra');
		}
	};

	return sceneFunctions;
};
