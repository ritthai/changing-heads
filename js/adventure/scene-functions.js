/*
Copyright (c) 2013 Ritchie Thai

See the file license.txt for copying permission.
*/

adventure.getSceneFunctions = function (adventureProvider, soundManager) {
    var worldState = {};

    // TODO: This is hacky, and for debugging
    window.worldState = worldState;

    var addInterviewCassandraOptionIfDoneAskingWhatWasUp = function () {
        if (worldState['hasAskedCassandraWhatWasUp'] &&
                worldState['hasAskedCassandraAboutBurningADude']) {
            var options = [{
                "description": "Continue",
                "next": "interviewCassandra"
            }];
            return { options: options };
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
            return { overrideOptions: options };
        }
    };

    var disableDefault = function () {
        return { shouldPreventDefault: true };
    };

    var sceneFunctions = {

        'enterTeaShopAndSeeSimon': function () {
            if (!worldState['hasSeenSimonInTeaShop']) {
                worldState['hasSeenSimonInTeaShop'] = true;
                adventureProvider.putPlayerAt(135, 374);
                adventureProvider.startConversation('startMenu');
                return disableDefault();
            }
        },

        'onHittingSimon': function () {
            adventureProvider.movePlayer({x: 473, y: 436}, adventureProvider.facePlayerRight);
            if (worldState['hasSeenApologyOfCassandra']) {
                worldState['isPlanningToSeeChangingHeadsAgain'] = true;
                adventureProvider.startConversation('debriefWithSimon');
                return disableDefault();
            }
            if (worldState['hasDecidedToGoToChangingHeads']) {
                adventureProvider.startConversation('tellSimonToMeetAtHeads');
            }
        },

        'playLittleDitty': function () {
            soundManager.playSound('startMusic');
        },

        'playChangingHeadsHum': function () {
            soundManager.playSound('giantHeadsHum');
        },

        'playCassandraHum': function () {
            if (!worldState['hasPlayedCassandraPond']) {
                worldState['hasPlayedCassandraPond'] = true;
                soundManager.playSound('cassandraHum');
            }
        },

        'enterHub': function () {
            adventureProvider.putPlayerAt(-1000, 0);
            if (!worldState['hasPlayedMap']) {
                worldState['hasPlayedMap'] = true;
                soundManager.playSound('map');
            }
        },

        'onEnteringCaveOfCassandra': function () {
            if (!worldState['hasEnteredCaveOfCassandra']) {
                worldState['hasEnteredCaveOfCassandra'] = true;
                soundManager.playSound('cassandraIntroMusic');
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

        'enterChangingHeads': function (scene) {
            if (worldState['isPlanningToSeeChangingHeadsAgain']) {
                worldState['hasSeenSimonAtHeadsAfterFixingHim'] = true;
            } else {
                adventureProvider.hideSceneImageByIdForScene('simon', scene);
                adventureProvider.hideHotspotById(scene, 'talkToSimon');
            }
            if (!worldState['hasDecidedToGoToChangingHeads'] || worldState['hasSomethingThatHurts']) {
                adventureProvider.hideSceneImageByIdForScene('simon-head', scene);
                adventureProvider.hideHotspotById(scene, 'examineNormalSizedHead');
            }
            if (worldState['hasDecidedToGoToChangingHeads'] &&
                    !worldState['hasWaitedForSimonAtChangingHeads']) {
                worldState['hasWaitedForSimonAtChangingHeads'] = true;
                adventureProvider.startConversation('introduceTheChangingHeads');
                soundManager.playSound('giantHeadsHum');
                return disableDefault();
            }
        },

        'onHittingNormalSizedHead': function () {
            adventureProvider.movePlayer({x: 471, y: 455}, adventureProvider.facePlayerRight);
            if (worldState['isPlanningToSeeChangingHeadsAgain']) {
                adventureProvider.startConversation('askSimonAboutWritersBlock');
                return disableDefault();
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
                return disableDefault();
            }
            if (!worldState['hasFoundSimon']) { return; }
            adventureProvider.startConversation('talkToTheChangingHeads');
            worldState['hasDecidedToSeeCassandra'] = true;
            return disableDefault();
        },

        'onHittingCaveOfCassandra': function () {
            if (!worldState['hasDecidedToSeeCassandra']) {
                adventureProvider.startConversation('mentionFearOfCassandra');
                return disableDefault();
            }
        },

        'talkToCassandra': function () {
            adventureProvider.movePlayer({x: 300, y: 400}, adventureProvider.facePlayerRight);
            if (worldState['hasSomethingThatHurts']) {
                worldState['isPlanningToSaveMalcom'] = true;
                adventureProvider.startConversation('fixSimon');
                return disableDefault();
            }
            if (worldState['isLookingForSomethingThatHurts']) {
                adventureProvider.startConversation('askCassandraHowSimonIs');
                return disableDefault();
            }
            if (worldState['hasSalamanderTea']) {
                adventureProvider.startConversation('giveCassandraSalamanderTea');
                return disableDefault();
            }
            if (worldState['hasFedSalamander']) {
                worldState['isPlanningToAskTomForSpecialTea'] = true;
                adventureProvider.startConversation('askCassandraForAnotherFish');
                return disableDefault();
            }
            if (worldState['hasStartedInterviewingCassandra']) {
                adventureProvider.startConversation('interviewCassandraAboutThings');
                return disableDefault();
            }
        },

        'tellCassandraAnExcuse': function () {
            worldState['hasToldCassandraAnExcuse'] = true;
        },

        'giveCassandraTheGiftTea': function () {
            worldState['hasGivenCassandraTheGiftTea'] = true;
        },

        'askCassandraWhatWasUp': function () {
            worldState['hasAskedCassandraWhatWasUp'] = true;
            return addInterviewCassandraOptionIfDoneAskingWhatWasUp();
        },

        'askCassandraAboutBurningADude': function () {
            worldState['hasAskedCassandraAboutBurningADude'] = true;
            return addInterviewCassandraOptionIfDoneAskingWhatWasUp();
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
                return disableDefault();
            }
            if (worldState['hasGivenCassandraSalamanderTea']) {
                worldState['hasTreatedSalamander'] = true;
                adventureProvider.startConversation('treatSalamander');
                return disableDefault();
            }
            if (worldState['hasFedSalamander']) {
                adventureProvider.startConversation('examineSalamanderAfterFeeding');
                return disableDefault();
            }
            if (worldState['hasFish']) {
                worldState['hasFish'] = false;
                worldState['hasFedSalamander'] = true;
                adventureProvider.startConversation('feedSalamander');
                soundManager.playSound('salamander');
                return disableDefault();
            }
            adventureProvider.startConversation('examineSalamander');
            return disableDefault();
        },

        'flyIntoTheSkies': function () {
            adventureProvider.loadScene('sky');
            soundManager.playSound('sky');
        },

        'landAtBeachParty': function () {
            adventureProvider.loadScene('beach');
            soundManager.playSound('beach');
        },

        'onHittingTeaShopOwner': function () {
            if (worldState['isPlanningToSeeMedicineMan']) {
                adventureProvider.movePlayer({x: 323, y: 326}, adventureProvider.facePlayerRight);
                adventureProvider.startConversation('talkToTomAboutGoingToMedicineMan');
                return disableDefault();
            }
            if (worldState['isPlanningToAskTomForSpecialTea']) {
                adventureProvider.movePlayer({x: 323, y: 326}, adventureProvider.facePlayerRight);
                adventureProvider.startConversation('askTomForSpecialTea');
                return disableDefault();
            }
        },

        'askTomForSpecialTea': function () {
            worldState['isPlanningToSeeMedicineMan'] = true;
        },

        'goToMedicineMan': function () {
            worldState['tomIsInPharmacy'] = true;
            soundManager.playSound('mask');
            adventureProvider.putPlayerAt(135, 507);
            adventureProvider.loadScene('pharmacy');
        },

        'onEnterPharmacy': function (scene) {
            if (!worldState['tomIsInPharmacy']) {
                adventureProvider.hideSceneImageByIdForScene('tom', scene);
            }
            adventureProvider.flipSceneImageById(scene, 'tom');
        },

        'onGettingSpecialSalamanderTea': function (scene) {
            worldState['tomIsInPharmacy'] = false;
            adventureProvider.hideSceneImageByIdForScene('tom', scene);
            worldState['hasSpokenToMalWithTom'] = true;
            worldState['hasSalamanderTea'] = true;
            return disableDefault();
        },

        'onHittingMedicineMan': function () {
            adventureProvider.movePlayer({x: 318, y: 505}, adventureProvider.facePlayerRight);
            if (worldState['isPlanningToSaveMalcom']) {
                worldState['hasSeenApologyOfCassandra'] = true;
                adventureProvider.startConversation('seeApologyOfCassandra');
                return disableDefault();
            }
            if (worldState['isLookingForSomethingThatHurts']) {
                worldState['hasSomethingThatHurts'] = true;
                adventureProvider.startConversation('askForSomethingThatHurts');
                return disableDefault();
            }
            if (    worldState['hasSpokenToMalWithTom']) {
                adventureProvider.startConversation("talkToMedicineManAfterGettingTea");
                return disableDefault();
            }
            adventureProvider.startConversation('tellMalcomYouAreJustBrowsing');
        },

        'giveCassandraSalamanderTea': function () {
            worldState['hasGivenCassandraSalamanderTea'] = true;
        },

        'talkToThiefHead': function () {
            if (worldState['isLookingForSomethingThatHurts']) {
                adventureProvider.startConversation("talkToFaintedThiefHead");
                return disableDefault();
            }
            worldState['isLookingForSomethingThatHurts'] = true;
            adventureProvider.startConversation("talkToThiefHead");
        }
    };

    sceneFunctions['TeaShopController'] = function(scope) {
        scope.simonIsHere = true;
        if (worldState['hasWaitedForSimonAtChangingHeads']) {
            scope.simonIsHere = false;
        }
        if (worldState['hasSeenApologyOfCassandra']) {
            scope.simonIsHere = true;
        }
        if (worldState['hasSeenSimonAtHeadsAfterFixingHim']) {
            scope.simonIsHere = false;
        }
    };

    sceneFunctions['PondController'] = function(scope) {
        scope.cassandraIsHere = false;
        if (worldState['hasGivenCassandraSalamanderTea']) {
            scope.cassandraIsHere = true;
        }
        if (worldState['isLookingForSomethingThatHurts']) {
            scope.cassandraIsHere = false;
        }
    };

    sceneFunctions['BeachController'] = function (scope) {
        scope.cassandraIsHere = true;
        scope.thiefIsHere = true;
        if (worldState['isLookingForSomethingThatHurts']) {
            scope.cassandraIsHere = false;
            scope.thiefIsHere = false;
        }
    };

    sceneFunctions['showBeachFire'] = () => {};

    return sceneFunctions;
};
