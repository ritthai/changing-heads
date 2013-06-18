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
        "dialog": ["Kylie", "Alright, Simon better be here... Ah! Hey, Simon!"],
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
            "Well, I'm a storyboard artist not an animator. There's a difference. It's pretty good. I don't know; I'm kind of having writer's block or something.",
            "Kylie",
            "Aw, that sucks. Well, maybe being back home will get you reinvigorated!",
            "Simon",
            "Hey, I know! You know the weird head things growing out of the ground nearby past the pond? Let's check it out. Maybe we can get some inspiration."
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
        "dialog": ["Kylie", "Alright, Simon should be here any minute. I guess I'll just look around while I'm waiting."],
        "options": [
            {
                "description": "Continue",
                "next": "end"
            }
        ]
    },
    "examineTheChangingHeads": {
        "dialog": ["Kylie", "They just keep growing out of the ground. Each time a new one pops up it looks more and more like an actual person."],
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
            "Huh. Why is this one so much smaller? Wait... Oh my! Simon! Are you okay?",
            "Simon",
            "Huh? ...Oh, Kylie. Sorry, I dozed off. Late nights drawing storyboards, you know?",
            "Kylie",
            "Yeah, but I mean... How do your... legs feel?",
            "Simon",
            "Kind of cramped from sitting in that plane so long. Though they’re feeling better now. A lot better, actually. It’s like they’re not even the- OH DANG!",
            "Kylie",
            "Oh dang is right. Is it all the coffee? That stuff stunts your growth, pal.",
            "Simon",
            "Aw, my totally hot body! I’ve been working out too.",
            "Kylie",
			"Yeah, this is bonkers.",
			"Simon",
			"Heyheyhey. Kylie. Just don't lose your *head* over this. We must use our *heads* to make *headway* in this matter.",
			"Kylie",
			"...",
			"Simon",
			"...",
			"Simon and Kylie",
            "...Bahahahahahaha!",
			"Kylie",
			"Ok, but seriously, was anybody around before you fell asleep?",
			"Simon",
			"I don't think so. Well, those giant heads were there of course.",
			"Kylie",
			"The heads? Hey, maybe they saw something! Wait, can they even talk?"
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
"Kylie", "Hey! Can you folks hear me?",

"Heads", "We hear you, brother! I mean, sister. Fellow creature!",

"Kylie", "I’m a girl.",

"Heads", "Of course you are! We are not strange and totally just like you. We are sorry. Please forgive us. Our brother is foolish, but he means no harm.",

"Kylie", "What brother?",

"Head A", "The body thief! Our brother, but a traitor to our cause.",

"Head B", "The guy lacks patience.",

"Head C", "What a sellout!",

"Head D", "We’re supposed to be *growing* our bodies, not just grabbing the first one that walks by. Where’s the creativity in that? The heart?",

"Head B", "You know, the human living in that cave by the pond told us this would happen. I believed it! Would y’all listen? Noooooo.",

"Kylie", "Wait, the cave by the pond? You mean Cassandra?!? The scary tea lady that can burn stuff with her mind!?! Didn't she burn a dude and his house down for no reason?",

"Head B", "Yeah yeah, *she* burned a *dude*. I definitely knew that. I’m just being inclusive with my pronouns.",

"Head D", "We know stuff! Don’t think you’re better than us just ‘cause you just get *handed* a body for being born. Entitled brat.",

"Head B", "Hey, don’t take your personal failures out on her!",

"Kylie", "Ugh. I usually *avoid* Cassandra’s cave when I go by the pond. Maybe I can convince Simon that he doesn’t need a body.",
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
            "Excuse me, Miss Cassandra. I’m Kylie, and-",
            "Cassandra",
            "Come in, Kylie. Have some tea with me."
        ],
        "options": [
            {
                "description": "Continue",
                "next": "beatAroundTheBushWithCassandra"
            }
        ]
    },
	"beatAroundTheBushWithCassandra": {
        "dialog": [
            "",
            ""
        ],
        "options": [
            {
                "description": "Oh, uh, thanks, but I just had some.",
                "dialog": [
                    "Kylie",
                    "Oh, uh, thanks, but I just had some.",
                    "Cassandra",
                    "That’s fine; there’s always room for tea. I only brew the best.",
                ],
                "next": "beatAroundTheBushWithCassandra"
            },
            {
                "description": "I’d love to, but the caffeine keeps me up all night.",
                "dialog": [
                    "Kylie",
                    "I’d love to, but the caffeine keeps me up all night.",
                    "Cassandra",
                    "That’s perfect. I’m having chamomile. It soothes the mind.",
                ],
                "next": "beatAroundTheBushWithCassandra"
            },
            {
                "description": "Speaking of tea, I brought you some as a... cave warming gift. It’s... green?",
                "next": "giveCassandraTheGiftTea"
            },
            {
                "description": "It’s... safe, right?",
                "next": "drinkTeaFromCassandra"
            }
        ]
	},
	"giveCassandraTheGiftTea" : {
        "dialog": [
            "Kylie",
            "Speaking of tea, I brought you some as a... cave warming gift. It’s... green?",
            "Cassandra",
            "Why, thank you! The fire over there already keeps the place plenty warm.",
			"Kylie (under her breath)",
			"That’s what I’m afraid of.",
"Cassandra", "Pardon?",
"Kylie", "Nothing!",

"Cassandra", "Mmm? Anyway, though, I never say no to tea leaves from Tea Song. I’ve already got a pot brewed, so I’ll save this for later. Shall I pour you a cup?"
        ],
        "options": [
            {
                "description": "Continue",
                "next": "beatAroundTheBushWithCassandra"
            }
        ]
	},
	"drinkTeaFromCassandra" : {
        "dialog": [
            "Kylie",
            "It’s... safe, right?",

"Cassandra", "I promise you. Look-",

"", "Cassandra refills her cup and sips, then fills Kylie’s cup and stares expectantly.",

"", "Hesitantly, Kylie takes a drink.",

"Kylie", "Mmm, this is good.",

"Cassandra", "Yes, that’s because of the poison I put in.",

"Kylie", "WHAT?!?",

"Cassandra", "Calm down, I’m joking!",

"Kylie", "Oh, for crying out loud!",

"Cassandra", "Sorry, you seemed tense! I had to lighten the mood somehow."
        ],
        "options": [
            {
                "description": "Continue",
                "next": "respondingToTrickFromCassandra"
            }
        ]
	},
	"respondingToTrickFromCassandra": {
		"dialog": ["", ""],
		"options": [
			{
				"description": "What was up with forcing me to drink?!?",
				"next": "askCassandraWhatWasUp"
			},
			{
				"description": "Didn’t you, like, burn a dude and his house?",
				"next": "askCassandraAboutBurningADude"
			},
			{
				"description": "Finish talking (end of development demo)",
				"next": "end"
			}
		]
	},
	"askCassandraWhatWasUp": {
		"dialog": [
"Kylie", "What was up with all that, I don’t know, pleasantries and- and- and pointing a gun to my head until I drank your tea? Which is very good by the way.",

"Cassandra", "By gun you mean a honed mind that can set things aflame at will, I suppose? Don’t worry. I don’t bite. My parents taught me to be polite to my guests is all. And thank you; I fancy myself a bit of a tea connoisseur."
			],
		"options": [
			{
				"description": "Continue",
				"next": "respondingToTrickFromCassandra"
			}
		]
	},
	"askCassandraAboutBurningADude": {
		"dialog": [
"Kylie", "But... Didn’t you, like, burn a dude and his house?",

"Cassandra", "...",

"Kylie", "Oh gosh, sorry! Please don’t burn me!",

"Cassandra", "No no no, it’s fine. It’s just... I don’t talk about that, okay?",

"Kylie", "Okay."

			],
		"options": [
			{
				"description": "Continue",
				"next": "respondingToTrickFromCassandra"
			}
		]
	}
};

	return conversations;
};
