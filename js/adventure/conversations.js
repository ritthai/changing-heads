/*
Copyright (c) 2013 Ritchie Thai

See the file license.txt for copying permission.
*/

adventure.getConversations = function () {
	var conversations = 

{
	"startMenu": {
        "dialog": "Changing Heads by Ritchie Thai",
        "options": [
            {
                "description": "Start playing",
                "next": "wonderWhereSimonIsAtTeaShop"
            }
        ]
	},
    "wonderWhereSimonIsAtTeaShop": {
        "dialog": "Kylie: Alright, Simon better be here... Ah! Hey, Simon!",
        "options": [
            {
                "description": "Continue",
                "next": "end"
            }
        ],
		"onEnter": "playLittleDitty"
    },
    "talkingToSimonInTeaShop": {
        "dialog": [
            "Kylie",
            "Simon, buddy, what gives? I could've succesfully given a porcupine a backrub in the time I waited for you. Are you big shot animators too important to visit old highschool friends?",
            "Simon",
            "Sorry, the flight got delayed! I think a bird flew into that rocket tube thing under the wing with nail clippers or some jazz like that. But whatever, right? How've you been?"
        ],
        "options": [
            {
                "description": "Awesome! I got into the journalism school I wanted.",
                "dialog": [
                ],
                "next": "talkingToSimonInTeaShopAboutJournalismSchool"
            },
            {
                "description": "I'm good. Hey, so tell me about being an animator!",
                "dialog": [
                    "Kylie",
                    "I'm good. Hey, so tell me about being an animator!"
                ],
                "next": "talkingToSimonInTeaShopAboutAnimation"
            }
        ]
    },
    "talkingToSimonInTeaShopAboutJournalismSchool": {
        "dialog": [
					"Kylie",
					"Awesome! I got into the journalism school I wanted.",
                    "Simon",
                    "Hey, that's awesome! So what are you gonna journalate about?",
                    "Kylie",
                    "I don't know. I can't figure out where to get a good story. Hmm... I wanna do new media.",
                    "Simon",
                    "Like a video blog? A crackdown on the shady world of cats and catnip?",
                    "Kylie",
                    "Eh, something like that."
        ],
        "options": [
            {
                "description": "Hey, so what's it like being an animator?",
                "dialog": [
                    "Kylie", "Hey, so what's it like being an animator?"
                ],
                "next": "talkingToSimonInTeaShopAboutAnimation"
            }
        ]
    },
	"talkingToSimonInTeaShopAboutAnimation": {
		"dialog": [
                    "Simon",
                    "Ok, well, I'm a storyboard artist not an animator. There's a difference. It's pretty good. I don't know; I'm kind of having writer's block or something.",
                    "Kylie",
                    "Aw, that sucks. Well, maybe being back home will get you reinvigorated!",
                    "Simon",
                    "Hey, I know! You know the weird head things growing out of the ground nearby past the pond? Let's check it. Maybe we can get some inspiration.",
		],
		"onEnter": "onTalkingToSimonAboutAnimation",
		"options": [
			{
				"description": "I like that idea! You're taking your bike, right? I'll meet you there.",
				"next": "end"
			}
		]
	},
    "introduceTheChangingHeads": {
        "dialog": "Kylie: Alright, Simon should be here any minute. I guess I'll just look around while I'm waiting.",
        "options": [
            {
                "description": "Continue",
                "next": "end"
            }
        ]
    },
    "examineTheChangingHeads": {
        "dialog": "Kylie: These things just grow out of the ground. Every once in a while a new one pops up to the right, and each new one looks more and more like an actual person. It looks like they're just starting work on growing a body.",
        "options": [
            {
                "description": "Finish examining",
                "next": "end"
            }
        ]
    },
    "examineNormalSizedHead": {
        "dialog": [
            "Kylie",
            "Why is this one so much smaller? Wait... Oh my! Simon!",
            "Simon",
            "Huh? ...Oh, Kylie. I must've dozed off."
        ],
        "options": [
            {
                "description": "",
                "dialog": [
                    "Kylie",
                    "Simon! Are you okay?"
                ],
                "next": "talkToSimonAreYouOkay"
            }
        ]
    },
    "talkToSimonAreYouOkay": {
        "dialog": [
            "Simon",
            "Hey, it's fine. I've just been staying up late working on the new storyboards.",
            "Kylie",
            "What about your body?",
            "Simon",
            "Yeah, I guess all those late nights take their toll. But I'm still-",
            "",
            "",
            "",
            "Simon looks down."
        ],
        "options": [
            {
                "description": "Continue",
                "next": "talkToSimonWheresMyBody"
            }
        ]
    },
    "talkToSimonWheresMyBody": {
        "dialog": [
            "Simon",
            "Aw nuggets! Where's my totally hot body?!? Something must've happend while I was asleep.",
            "Kylie",
			"Holy crap, this is bonkers!",
			"Simon",
			"Hey hey hey. Kylie. Don't lose your *head* over this! We'll have to think calmly if we want to make any *headway* in this matter. :D... I saw a smile!",
			"Kylie",
            "...Yeah, that was good. But seriously, was anybody else around?",
            "Simon",
            "I don't think so. Well, those giant heads were there of course...",
            "Kylie",
            "The heads? Maybe they saw something! Wait, can they even talk?"
        ],
        "options": [
            {
                "description": "Finish talking",
                "next": "end"
            }
        ]
    },
    "talkToTheChangingHeads": {
        "dialog": [
            "Kylie",
            "Hey! Can you guys hear me?",
            "Heads",
            "We hear you fellow creature. We hear you brother. We hear you sister.",
            "Heads",
            "We are sorry. Please forgive us. Our brother is foolish, but he means no harm.",
        ],
        "options": [
            {
                "description": "Brother?",
                "next": "headsDescribeTheThievingHead"
            }
        ]
    },
	"headsDescribeTheThievingHead": {
		    "dialog": [
		        "Heads",
		        "The body thief. Our brother. A traitor to our cause",
		        "Heads",
		        "He lacks patience. Unwilling to wait to grow a body, he turned into a petty criminal.",
		        "Heads",
		        "The human from the cave by the pond. It warned us.",
				"Kylie",
				"Cassandra?!? That scary tea lady? Didn't she burn a man to death? Ugh. But I guess I should to talk to her..."
		    ],
		    "options": [
		        {
		            "description": "Finish talking",
		            "next": "end"
		        }
		    ]
		},
	"mentionFearOfCassandra": {
        "dialog": [
            "Kylie (in her head)",
            "That's where Cassandra lives... I heard that she lives out here because she burned a man to death one day. Better move along before she fries me for loitering.",
        ],
        "options": [
            {
                "description": "Continue",
                "next": "end"
            }
        ]
	},
    "talkToCassandra": {
        "dialog": [
            "Kylie",
            "Um. Excuse me. Hello Miss Cassandra, I'm Kylie and-",
            "Cassandra",
            "Nice to meet you, Kylie. Have a seat. Drink some tea with me."
        ],
        "options": [
            {
                "description": "No thanks. The caffeine keeps me up at night.",
                "dialog": [
                    "Kylie",
                    "Oh... Thank you. Um. Sorry, I'd rather not; the caffeine keeps me up at night.",
                    "Cassandra",
                    "That's perfect then. This is chamomile. It relaxes the mind.",
                ],
                "next": "preEnd"
            },
            {
                "description": "Tea?",
                "dialog": [
                    "Kylie",
                    "Tea?",
                    "Cassandra",
                    "Yes. It's delicious, and helps relax the mind.",
                ],
                "next": "preEnd"
            },
            {
                "description": "My friend's body was stolen.",
                "dialog": [
                    "Kylie",
                    "Thank you, but there's something I wanted to ask you.",
                    "Cassandra",
                    "Go right ahead.",
                    "Kylie",
                    "My friend... His body was stolen. One of the Changing Heads took it.",
                    "Developer Commentator",
                    "The rest of this isn't written yet."
                ],
                "next": "preEnd"
            }
        ]
    },
    "preEnd": {
        "dialog": [
            ""
        ],
        "options": [
            {
                "description": "Finish talking",
                "next": "end"
            }
        ]
    }
};

	return conversations;
};
