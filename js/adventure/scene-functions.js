/*
Copyright (c) 2013 Ritchie Thai

See the file license.txt for copying permission.
*/

adventure.getSceneFunctions = function (adventureProvider) {
	var worldState = {};

	var addInterviewCassandraOptionIfDoneAskingWhatWasIf = function () {
		if (worldState['hasAskedCassandraWhatWasUp'] &&
				worldState['hasAskedCassandraAboutBurningADude']) {
			var options = [{
				"description": "Continue",
				"next": "interviewCassandra"
			}];
			return options;
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
			if (worldState['isLookingForSomethingThatHurts']) {
				adventureProvider.startConversation('fixSimon');
				return false;
			}
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

		'askCassandraWhatWasUp': function () {
			worldState['hasAskedCassandraWhatWasUp'] = true;
			return addInterviewCassandraOptionIfDoneAskingWhatWasIf();
		},

		'askCassandraAboutBurningADude': function () {
			worldState['hasAskedCassandraAboutBurningADude'] = true;
			return addInterviewCassandraOptionIfDoneAskingWhatWasIf();
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

		'onHittingMedicineMan': function () {
			conversationToStart: "talkToMedicineMan"
			if (worldState['isLookingForSomethingThatHurts']) {
				worldState['hasSomethingThatHurts'] = true;
				adventureProvider.startConversation('askForSomethingThatHurts');
				return false;
			}
			if (!worldState['hasSalamanderTea']) {
				worldState['hasSalamanderTea'] = true;
				adventureProvider.startConversation('talkToMedicineMan');
				return false;
			}
		},

		'giveCassandraSalamanderTea': function () {
			worldState['hasGivenCassandraSalamanderTea'] = true;
		},

		'enterSky': function () {
			adventureProvider.startConversation('talkAboutPastOfCassandra');
		},

		'talkToThiefHead': function () {
			worldState['isLookingForSomethingThatHurts'] = true;
		}
	};

	return sceneFunctions;
};
