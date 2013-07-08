/*
Copyright (c) 2013 Ritchie Thai

See the file license.txt for copying permission.
*/

adventure.getSceneFunctions = function (adventureProvider) {
	var worldState = adventureProvider.worldState;

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
		}
	};

	sceneFunctions['playLittleDitty'] = function () {
		var littleDitty = new buzz.sound( "audio/music/mellow-introduction", {
			formats: [ "wav" ]
		});
		littleDitty.fadeIn().play();
	};

	var addInterviewCassandraOptionIfDoneAskingWhatWasIf = function (currentConversation) {
		if (worldState['hasAskedCassandraWhatWasUp'] &&
				worldState['hasAskedCassandraAboutBurningADude']) {
			currentConversation.options = [{
				"description": "Continue",
				"next": "interviewCassandra"
			}];
		}
	};

	sceneFunctions['askCassandraWhatWasUp'] = function (currentConversation) {
		worldState['hasAskedCassandraWhatWasUp'] = true;
		addInterviewCassandraOptionIfDoneAskingWhatWasIf(currentConversation);
		return currentConversation;
	};

	sceneFunctions['askCassandraAboutBurningADude'] = function (currentConversation) {
		worldState['hasAskedCassandraAboutBurningADude'] = true;
		addInterviewCassandraOptionIfDoneAskingWhatWasIf(currentConversation);
		return currentConversation;
	};

	return sceneFunctions;
};
