/*
Copyright (c) 2013 Ritchie Thai

See the file license.txt for copying permission.
*/

adventure.getSceneFunctions = function (adventureProvider) {
	var worldState = {};

	// TODO: This is hacky, and for debugging
	window.worldState = worldState;

	var cassandraIntroMusic = new buzz.sound( "audio/music/cassandras-intro", {
		formats: [ "ogg", "wav" ]
	});

	var startMusic = new buzz.sound( "audio/music/starting-the-brew", {
		formats: [ "ogg", "wav" ]
	});

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

	var addHearSuggestionFromSimonOptionIfDoneCatchingUp = function () {
		if (worldState['hasTalkedAboutAnimation'] && worldState['hasTalkedAboutJournalismSchool']) {
			var options = [
				{
					"description": "Continue",
					"next": "hearSimonSuggestSeeingTheHeads"
				}
			];
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
			if (worldState['hasWaitedForSimonAtChangingHeads'] && !worldState['hasSeenApologyOfCassandra']
					|| 	worldState['hasSeemSimonAtHeadsAfterFixingHim']) {
				adventureProvider.hideSceneImageById('simon');
				adventureProvider.hideHotspotById('talkToSimon');
			}
		},

		'onHittingSimon': function () {
			if (worldState['hasSeenApologyOfCassandra']) {
				worldState['isPlanningToSeeChangingHeadsAgain'] = true;
				adventureProvider.startConversation('debriefWithSimon');
				return false;
			}
			if (worldState['hasDecidedToGoToChangingHeads']) {
				adventureProvider.startConversation('tellSimonToMeetAtHeads');
			}
		},

		'playLittleDitty': function () {
			startMusic.play();
		},

		'onEnteringCaveOfCassandra': function () {
			if (!worldState['hasEnteredCaveOfCassandra']) {
				worldState['hasEnteredCaveOfCassandra'] = true;
				cassandraIntroMusic.play();
			}
		},

		'onTalkingToSimonAboutAnimation': function () {
			worldState['hasTalkedAboutAnimation'] = true;
			return addHearSuggestionFromSimonOptionIfDoneCatchingUp();
		},

		'talkToSimonInTeaShopAboutJournalismSchool': function () {
			worldState['hasTalkedAboutJournalismSchool'] = true;
			return addHearSuggestionFromSimonOptionIfDoneCatchingUp();
		},

		'hearSimonSuggestSeeingTheHeads': function () {
			worldState['hasDecidedToGoToChangingHeads'] = true;
		},

		'enterChangingHeads': function () {
			if (worldState['isPlanningToSeeChangingHeadsAgain']) {
				worldState['hasSeemSimonAtHeadsAfterFixingHim'] = true;
			}
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
			if (worldState['isPlanningToSeeChangingHeadsAgain']) {
				adventureProvider.startConversation('askSimonAboutWritersBlock');
				return false;
			}
			if (worldState['hasFoundSimon']) {
				adventureProvider.startConversation('reassureHeadOfSimon');
			}
			worldState['hasFoundSimon'] = true;
		},

		'onHittingTheChangingHeads': function () {
			adventureProvider.facePlayerLeft();
			if (worldState['isPlanningToSeeChangingHeadsAgain']) {
				adventureProvider.startConversation('debriefWithChangingHeads');
				return false;
			}
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
			adventureProvider.movePlayer({x: 300, y: 400}, adventureProvider.facePlayerRight);
			if (worldState['hasSomethingThatHurts']) {
				worldState['isPlanningToSaveMalcom'] = true;
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
			if (worldState['hasStartedInterviewingCassandra']) {
				adventureProvider.startConversation('interviewCassandraAboutThings');
				return false;
			};
		},

		'askCassandraWhatWasUp': function () {
			worldState['hasAskedCassandraWhatWasUp'] = true;
			return addInterviewCassandraOptionIfDoneAskingWhatWasIf();
		},

		'askCassandraAboutBurningADude': function () {
			worldState['hasAskedCassandraAboutBurningADude'] = true;
			return addInterviewCassandraOptionIfDoneAskingWhatWasIf();
		},

		'interviewCassandra': function () {
			worldState['hasStartedInterviewingCassandra'] = true;
		},

		'askCassandraAboutHeads': function () {
			worldState['hasFish'] = true;
		},

		'onHittingSalamander': function () {
			adventureProvider.movePlayer({x: 194, y: 500}, adventureProvider.facePlayerRight);
			if (worldState['hasTreatedSalamander']) {
				adventureProvider.loadScene('beach');
				return false;
			}
			if (worldState['hasGivenCassandraSalamanderTea']) {
				worldState['hasTreatedSalamander'] = true;
				adventureProvider.startConversation('treatSalamander');
				return false;
			}
			if (worldState['hasFish']) {
				worldState['hasFish'] = false;
				worldState['hasFedSalamander'] = true;
				adventureProvider.startConversation('feedSalamander');
				return false;
			}
			adventureProvider.startConversation('examineSalamander');
			return false;
		},

		'flyIntoTheSkies': function () {
			adventureProvider.loadScene('sky');
		},

		'landAtBeachParty': function () {
			adventureProvider.loadScene('beach');
		},

		'onHittingTeaShopOwner': function () {
			if (worldState['isPlanningToAskTomForSpecialTea']) {
				adventureProvider.movePlayer({x: 323, y: 326}, adventureProvider.facePlayerRight);
				worldState['isPlanningToGoToDoctor'] = true;
				adventureProvider.startConversation('askTomForSpecialTea');
				return false;
			}
		},

		'goToMedicineMan': function () {
			adventureProvider.loadScene('pharmacy');
		},

		'onGettingSpecialSalamanderTea': function () {
			if (worldState['isPlanningToGoToDoctor'] && !worldState['hasSalamanderTea']) {
				worldState['hasSalamanderTea'] = true;
				return false;
			}
		},

		'onHittingMedicineMan': function () {
			if (worldState['isPlanningToSaveMalcom']) {
				worldState['hasSeenApologyOfCassandra'] = true;
				adventureProvider.startConversation('seeApologyOfCassandra');
				return false;				
			}
			if (worldState['isLookingForSomethingThatHurts']) {
				worldState['hasSomethingThatHurts'] = true;
				adventureProvider.startConversation('askForSomethingThatHurts');
				return false;
			}
			adventureProvider.startConversation('tellMalcomYouAreJustBrowsing');
		},

		'giveCassandraSalamanderTea': function () {
			worldState['hasGivenCassandraSalamanderTea'] = true;
		},

		'talkToThiefHead': function () {
			worldState['isLookingForSomethingThatHurts'] = true;
		}
	};

	return sceneFunctions;
};
