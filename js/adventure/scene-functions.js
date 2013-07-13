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

		'examineSalamander': function (conversation) {
			if (worldState['hasTreatedSalamander']) {
				conversation.dialog = ["", ""];
				adventureProvider.loadScene('sky');
				return conversation;
			}
			if (worldState['hasGivenCassandraSalamanderTea']) {
				worldState['hasTreatedSalamander'] = true;
				conversation.dialog = [
						"Cassandra",
						" Cone, darling, how are you feeling? Kylie, would you mind applying some to her tail?",
						"Kylie",
						" Yes, ma’am!",
						"",
						"Kylie rubs the ointment over Cone the sky salamander’s long slick tail. It feels smooth and wet, and a bit like rubber, occasionally pulsating with a playful twitch.",
						"Cassandra",
						" There we are. She should be ready to fly now.",
						"Kylie",
						" Already?",
						"Cassandra",
						" Haha. It’s a very effective remedy. She’ll need some time to fully recover, but there’s some sunblock mixed in, and she is no longer in pain.",
						"Kylie",
						" That’s fantastic! So how do I actually ride this thing?",
						"Cassandra",
						" Ah, good point. I’ll join you! A ride through the clouds is always refreshing.",
						"Kylie",
						" Alright, let’s go!"
					];
				return conversation;
			}
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
