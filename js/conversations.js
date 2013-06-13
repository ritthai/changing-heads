(function () {
	adventure.conversations = {
	    "introduceTheChangingHeads": {
	        "dialog": "Kylie: Alright, Simon should be here any minute. I guess I'll just look around while I'm waiting.",
	        "options": [
	            {
	                "description": "Continue",
	                "next": "end"
	            }
	        ]
	    },
	    "wonderWhereSimonIsAtTeaShop": {
	        "dialog": "Kylie: Huh, Simon should be... Ah! Hey, Simon!",
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
	        "dialog": "Kylie: Huh. Looks like they've finally gotten the size right. Wait... Oh my! Simon!<br />Simon: Huh? ...Oh, Kylie. I must've dozed off.",
	        "options": [
	            {
	                "description": "",
	                "dialog": [
	                    [
	                        "Kylie",
	                        "Simon! Are you okay?"
	                    ]
	                ],
	                "next": "talkToSimonAreYouOkay"
	            }
	        ]
	    },
	    "talkToSimonAreYouOkay": {
	        "dialog": "Simon: Hey, it's fine. I've just been staying up late working on the new storyboards.<br />Kylie: What about your body?<br />Simon: Yeah, I guess all those late nights take their toll. But I'm still-<br /><br />Simon looks down.",
	        "options": [
	            {
	                "description": "Continue",
	                "next": "talkToSimonWheresMyBody"
	            }
	        ]
	    },
	    "talkToSimonWheresMyBody": {
	        "dialog": "Simon: Oh hell! Where's my body?!? It must've happend while I was asleep.<br />Kylie: Was anybody else around? <br /> Simon: No! Well, the Changing Heads, but no-one else. <br /> Kylie: Maybe they'll know something. They're not very good at talking, but... aw geez, this is messed up.",
	        "options": [
	            {
	                "description": "Finish talking",
	                "next": "end"
	            }
	        ]
	    },
	    "talkToTheChangingHeads": {
	        "dialog": "Kylie: Hey, where's Simon's body.<br /> Heads: Go to the east, to Cassandra's cave. She'll help.",
	        "options": [
	            {
	                "description": "Finish talking",
	                "next": "end"
	            }
	        ]
	    },
	    "talkToCassandra": {
	        "dialog": "Kylie: Um. Excuse me. Hello Miss Cassandra, I'm Kylie and-<br />Cassandra: Nice to meet you, Kylie. Have a seat. Drink some tea with me.",
	        "options": [
	            {
	                "description": "No thanks. The caffeine keeps me up at night.",
	                "dialog": [
	                    
	                        "Kylie",
	                        "Oh... Thank you. Um. Sorry, I'd rather not; the caffeine keeps me up at night.",
"Cassandra",
"That's perfect then. This is chamomile. It relaxes the mind.",
"Developer's Note", "Rest of conversation not written yet."
	                    
	                ],
	                "next": "preEnd"
	            },
	            {
	                "description": "Tea?",
	                "dialog": [
	                        "Kylie",
	                        "Tea?",
							"Cassandra",
							"Yes. It's delicious, and has all sorts of medical benefits.",
"Developer's Note", "Rest of conversation not written yet."
	                    
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
		"talkingToSimonInTeaShop": {
	        "dialog": "Kylie: Yo, Simon! How're you doing? Good flight? <br /> Simon: Eh, alright. The flight got delayed so that was annoying, but yeah. How about you?",
	        "options": [
	            {
	                "description": "Awesome! I got into the journalism school I wanted.",
	                "dialog": [
	                    
	                        "Simon",
	                        "Hey, congratulations! So, what, are you going to write for a newspaper, or be on TV, or what?",
"Kylie", "No, newspapers are kind of dying out right? And television too. I wanna do new media.",
"Simon", "So internet stuff.",
"Kylie", "Yeah, basically."
	                ],
	                "next": "talkingToSimonInTeaShopAboutJournalismSchool"
	            },
	            {
	                "description": "I'm good. Hey, tell me about being an animator! ",
	                "dialog": [
	                        "Simon",
	                        "Oh, I'm not an animator; I'm a storyboard artist. It's going pretty good. I don't know; I'm kind of having writer's block or something.",
"Kylie", "Oh no! That's not good. Well, maybe being back home will give you a chance to do some soul searching.",
"Simon", "Hey, let's check out the Changing Heads. Maybe you can write a news story about it, and I can get inspired.",
"Kylie", "Yeah, sounds good. I'll meet you there."
	                ],
	                "next": "talkingToSimonInTeaShopAboutAnimation"
	            }
	        ]
	    },
		"talkingToSimonInTeaShopAboutAnimation": {
	                "dialog": [''
	                ],
	        "options": [
	            {
	                "description": "Finish talking",
	                "next": "end"
	            }
			]
		},
		"talkingToSimonInTeaShopAboutJournalismSchool": {
	                "dialog": [
	                    ''
	                ],
	        "options": [
	            {
	                "description": "Hey, so what's it like being an animator?",
	                "dialog": [
	                        "Simon",
	                        "Oh, I'm not an animator; I'm a storyboard artist. It's going pretty good. I don't know; I'm kind of having writer's block or something.",
"Kylie", "Oh no! That's not good. Well, maybe being back home will give you a chance to do some soul searching.",
"Simon", "Hey, let's check out the Changing Heads. Maybe you can write a news story about it, and I can get inspired.",
"Kylie", "Yeah, sounds good. I'll meet you there."
	                ],
	                "next": "talkingToSimonInTeaShopAboutAnimation"
	            }
			]
		},
		"preEnd": {
	                "dialog": [''
	                ],
	        "options": [
	            {
	                "description": "Finish talking",
	                "next": "end"
	            }
			]
		}
	};

}());
