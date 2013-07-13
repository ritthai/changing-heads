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

		'playLittleDitty': function () {
			var littleDitty = new buzz.sound( "audio/music/mellow-introduction", {
				formats: [ "wav" ]
			});
			littleDitty.fadeIn().play();
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

		'examineSalamander': function (conversation) {
			if (worldState['hasFish']) {
				worldState['hasFedSalamander'] = true;
				conversation.dialog = [
					"Kylie",
					" Here, girl. Chow time.",
					"",
					"Cone voraciously gobbles down the fish in one gulp.",
					"Kylie",
					" Woah, Cone, that’s a real appetite you got there. I’m coming on board now, alright?",
					"",
					"Cone turbulently tosses Kylie off as she tries to get on.",
					"Kylie",
					" Hey, what gives?!? Ugh, maybe Cassandra will give me another fish."
				];
				return conversation;
			}
		}
	};

	return sceneFunctions;
};
