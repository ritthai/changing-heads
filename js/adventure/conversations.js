/*
Copyright (c) 2013 Ritchie Thai

See the file license.txt for copying permission.
*/

adventure.getConversations = function () {
	var conversations =

{
	"startMenu": {
		"dialog": ["", "<strong>Changing Heads</strong> <br /> By Ritchie Thai <br /> <br /> There's some music so consider turning on sound."],
		"options": [
			{
				"description": "Start",
				"next": "wonderWhereSimonIsAtTeaShop"
			}
		]
	},
	"wonderWhereSimonIsAtTeaShop": {
		"dialog": [
			"",
			"Chapter 1 out of 5: Losing Your Head",
			"Kylie",
			"Yo, Simon! Geez, he was supposed to be here an hour ago.",
			"Kylie",
			"...He's not paying attention. Better walk up to him."
		],
		"onEnter": "playLittleDitty"
	},
	"talkingToSimonInTeaShop": {
		"dialog": [
			"Kylie",
			"Simon, what gives? I was here an hour ago and you didn't show. I went home after half an hour but came back in case I got the time wrong. Are you big shot animators too important for old highschool friends?",
			"Simon",
			"Kylie! Sorry, my flight got delayed. Bird flew into the jet or nail clippers or some jazz. I'm glad you came back. How've you been?"
		],
		"options": [
			{
				"description": "Awesome! I got into that journalism school.",
				"dialog": [],
				"next": "talkToSimonInTeaShopAboutJournalismSchool"
			},
			{
				"description": "I'm good. Hey, so tell me about being an animator!",
				"next": "talkingToSimonInTeaShopAboutAnimation"
			}
		]
	},
	"talkToSimonInTeaShopAboutJournalismSchool": {
		"onEnter": "talkToSimonInTeaShopAboutJournalismSchool",
		"dialog": [
			"Kylie",
			"I got into that journalism school I wanted.",
			"Simon",
			"Hey, that's awesome! So what are you gonna journalism about?",
			"Kylie",
			"I don't know. I need a story. I wanna do new media though.",
			"Simon",
			"You mean like a blog? Online video? Cats?",
			"Kylie",
			"Heh, something like that."
		],
		"options": [
			{
				"description": "Hey, so what's it like being an animator?",
				"next": "talkingToSimonInTeaShopAboutAnimation"
			}
		]
	},
	"talkingToSimonInTeaShopAboutAnimation": {
		"onEnter": "onTalkingToSimonAboutAnimation",
		"dialog": [
			"Kylie",
			"Hey, so what's it like being an animator?",
			"Simon",
			"Well technically I do storyboards and writing, not the animation. That stuff's outsourced. It's cool. I don't know, I've kind got writer's block.",
			"Kylie",
			"Well, maybe being back home will get you reinvigorated!",
			"Simon",
			"That's the plan. So, you're doing well?"
		],
		"options": [
			{
				"description": "Oh, I got into that journalism school I wanted!",
				"next": "talkToSimonInTeaShopAboutJournalismSchool"
			}
		]
	},
	"hearSimonSuggestSeeingTheHeads": {
		"onEnter": "hearSimonSuggestSeeingTheHeads",
		"dialog": [
			"Simon",
			"Oh! Weren't you telling me about some weird giant heads growing out of the ground near the pond? Let's check that out! Inspiration for me, journalism for you. The perfect plan!",
			"Kylie",
			"Oh yeah, those things are weird. Sure, let's go!",
			"Simon",
			"Actually, let's meet there. I wanna chat with Tom a minute. He runs this place. Really knows tea. I'll probably pass you on my bike, anyway.",
			"Kylie",
			"Alright then, enjoy your tea talk.",
		]
	},
	"tellSimonToMeetAtHeads": {
		"dialog": [
			"Kylie", "You're okay getting there by bike?",
			"Simon", "Yeah, I'm biking everywhere. Best shape of my life.",
			"Tom (the owner)", "You look it, Simon.",
			"Kylie", "Ok. Well, see ya."
		]
	},
	"tellMalcomYouAreJustBrowsing": {
		"dialog": [
			"Pharmacist", "Need any help, ma'am?",
			"Kylie", "Oh, thanks, I'm just browsing.",
			"Pharmacist", "Sure, take your time. I'm here if you need anything.",
			"Kylie", "(What's with that mask?)",
		]
	},
	"introduceTheChangingHeads": {
		"dialog": [
			"Kylie",
			"Alright, Simon should be here. Any minute. Guess I'll look around for now."
		]
	},
	"talkToShopOwner": {
		"dialog": [
			"Kylie",
			"(So he's the owner? I like the bowtie.)"
		]
	},
	"examineTheChangingHeads": {
		"dialog": [
			"Kylie",
			"These things just keep sprouting up. The newer ones are starting to look like actual proper faces."
		]
	},
	"examineNormalSizedHead": {
		"dialog": [
			"Kylie",
			"Why is this head so much smaller? Oh shoot! Simon!",
			"Simon",
			"Huh? ...Oh, Kylie. Sorry, I dozed off. Coffee fueled late nights storyboarding, you know?",
			"Kylie",
			"Oh. Uh. How do your... legs feel?",
			"Simon",
			"Kind of cramped from sitting in that plane, but they feel better now. Way better, actually. It’s like they’re not even- CRAP!",
			"Kylie",
			"Yeah, you lost a few inches there. I've heard coffee stunts growth but this...",
			"Simon",
			"My body... I just started working out too...",
			"Kylie",
			"You're taking this pretty well.",
			"Simon",
			"Well, Kylie. I can't lose my *head* over this. Gotta use our *heads* to make *headway* into the matter.",
			"Simon",
			"Don't get me wrong. I'd be craping my pants but they're gone too so I'm deflecting with humour.",
			"Kylie",
			"Hahaha. Ok, well, was anyone around?",
			"Simon",
			"Nah, just me and those big ol' giant heads.",
			"Kylie",
			"Hey, maybe they saw something!"
		]
	},
	"reassureHeadOfSimon": {
		"dialog": [
			"Kylie",
			"Don't worry, Simon, ol' buddy. We'll work this out... maybe...",
			"Simon",
			"Well, I *have* been trying to lose some weight.",
			"Kylie",
			"Too bad it's mostly muscle mass.",
			"Simon",
			"And it just had to happen *after* I got into shape."
		]
	},
	"talkToTheChangingHeads": {
		"dialog": [
			"Kylie",
			"Hey, Big Heads! You hear me up there?",
			"Heads",
			"We hear you, brother!",
			"Kylie",
			"I’m a girl.",
			"Heads",
			"Crap! No no! We meant brother as in... Look, kid, we're all just giant heads trying our best to fit in.",
			"Head A",
			"Except the jerk that ran off.",
			"Kylie",
			"What jerk?",
			"Head A",
			"The body thief! Our brother. A traitor to our cause.",
			"Head B",
			"We’re supposed to grow our own bodies, man, not grab any one walking by. Where’s the creativity? The soul?",
			"Head C",
			"That woman in the cave by the pond said it would happen. I told you she was right, but would y’all listen?",
			"Kylie",
			"Wait, the cave by the pond? You mean Cassandra?!? The scary tea lady who can burn junk with her mind!?! Didn't she burn down dude and his house for no reason?",
			"Head C",
			"Yeah, she's cool like that. Or should I say... hot? Haha! Get it?",
			"Kylie",
			"She said this would happen? She might know a thing... Geez, I don't wanna burn to death, but I'm not leaving Simon like this...",
			"Kylie",
			"Ugh... I usually *avoid* her cave when I pass the pond."
		]
	},
	"mentionFearOfCassandra": {
		"dialog": [
			"Kylie",
			"That's where Cassandra lives... I heard she's out here because she burned a man to death one day. Better move along before she fries me for loitering."
		]
	},
	"talkToCassandra": {
		"dialog": [
			"",
			"Chapter 2 out of 5: Tea Lady",
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
				"next": "tellCassandraYouHadTeaAlready"
			},
			{
				"description": "I’d love to, but the caffeine keeps me up all night.",
				"next": "tellCassandraTeaKeepsYouUp"
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
	"tellCassandraYouHadTeaAlready": {
		"onEnter": "tellCassandraAnExcuse",
		"dialog": [
			"Kylie",
			"Oh, uh, thanks, but I just had some.",
			"Cassandra",
			"That’s fine; there’s always room for more tea. I only brew the best."
		],
		"options": [
			{
				"description": "Continue",
				"next": "beatAroundTheBushWithCassandra"
			}
		]
	},
	"tellCassandraTeaKeepsYouUp": {
		"onEnter": "tellCassandraAnExcuse",
		"dialog": [
			"Kylie",
			"I’d love to, but the caffeine keeps me up all night.",
			"Cassandra",
			"That’s perfect. I’m having chamomile. It soothes the mind."
		],
		"options": [
			{
				"description": "Continue",
				"next": "beatAroundTheBushWithCassandra"
			}
		]
	},
	"giveCassandraTheGiftTea": {
		"onEnter": "giveCassandraTheGiftTea",
		"dialog": [
			"Kylie",
			"Speaking of tea, I brought you some from Tea Song as a... cave warming gift. It’s... green?",
			"Cassandra",
			"Why, thank you! Though the fire over there keeps the place plenty warm.",
			"Kylie",
			"(That’s what I’m afraid of.)",
			"Cassandra",
			"Pardon?",
			"Kylie",
			"Nothing!",
			"Cassandra",
			"Mmm? Anyway, I love Tea Song's blends. Tom's a virtuoso. I've just brewed a pot though, so I’ll save this for later. Shall I pour you a cup?"
		],
		"options": [
			{
				"description": "Continue",
				"next": "beatAroundTheBushWithCassandra"
			}
		]
	},
	"drinkTeaFromCassandra": {
		"dialog": [
			"Kylie",
			"It’s... safe, right?",
			"Cassandra",
			"I promise you. Look-",
			"",
			"Cassandra refills her cup and sips, then fills Kylie’s cup and stares expectantly.",
			"",
			"Hesitantly, Kylie takes a drink.",
			"Kylie",
			"Mmm, this is good.",
			"Cassandra",
			"Yes, that’s because of the poison I put in.",
			"Kylie",
			"WHAT?!?",
			"Cassandra",
			"I’m joking!",
			"Kylie",
			"Oh, for crying out loud!",
			"Cassandra",
			"Sorry, you seemed tense! I was just lightening the mood."
		],
		"options": [
			{
				"description": "Continue",
				"next": "respondingToTrickFromCassandra"
			}
		]
	},
	"respondingToTrickFromCassandra": {
		"dialog": [
			"",
			""
		],
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
				"description": "Calm down and let Cassandra speak",
				"next": "interviewCassandra"
			}
		]
	},
	"askCassandraWhatWasUp": {
		"onEnter": "askCassandraWhatWasUp",
		"dialog": [
			"Kylie",
			"What was up with all that pleasantries and- and- and practically holding a gun to my head until I drank your tea? Which is very good by the way.",
			"Cassandra",
			"By gun you mean a honed mind that can set things aflame at will? Don’t worry. I don’t bite. My parents taught me to be polite to guests is all. And thank you; I fancy myself a bit of a tea connoisseur."
		],
		"options": [
			{
				"description": "Continue",
				"next": "respondingToTrickFromCassandra"
			}
		]
	},
	"askCassandraAboutBurningADude": {
		"onEnter": "askCassandraAboutBurningADude",
		"dialog": [
			"Kylie",
			"But... Didn’t you, like, burn a dude and his house?",
			"Cassandra",
			"...",
			"Kylie",
			"Oh gosh, sorry! Please don’t burn me!",
			"Cassandra",
			"No no no, it’s fine. It’s just... I don’t talk about that, okay?",
			"Kylie",
			"Okay."
		],
		"options": [
			{
				"description": "Continue",
				"next": "respondingToTrickFromCassandra"
			}
		]
	},
	"interviewCassandra": {
		"onEnter": "interviewCassandra",
		"dialog": [
			"Cassandra",
			"So, given your obvious fear of me, I assume you didn’t just come for tea and pleasantries?",
			"Kylie",
			"Well... yeah. My friend Simon- Actually... So, I’m kind of a journalist. There are all these rumours about you, but I'm hoping to get a better view of who The Tea Lady really is.",
			"Cassandra",
			"Haha, Tea Lady? Well, thank you kindly for being such an intrepid young journalist. What would you like to know?",
			"Kylie",
			"Um..."
		],
		"options": [
			{
				"description": "Ask Cassandra something",
				"next": "interviewCassandraAboutThings"
			}
		]
	},
	"interviewCassandraAboutThings": {
		"dialog": ["", ""],
		"options": [
			{
				"description": "Ask about fire powers",
				"next": "askCassandraAboutFirePowers"
			},
			{
				"description": "Ask about giant heads",
				"next": "askCassandraAboutGiantHeads"
			},
			{
				"description": "My friend, Simon. One of those giant heads stole his body.",
				"next": "askCassandraAboutSimon"
			},
			{
				"description": "Thanks. Nothing else to ask for now."
			}
		]
	},
	"askCassandraAboutFirePowers": {
		"dialog": [
			"Kylie",
			"So tell me about your fire powers.",
			"Cassandra",
			"Oh, it runs in my mother's side of the family, but my mother herself had none and the doctors said I wouldn’t either. I suppose they were wrong.",
			"Kylie",
			"So when did you learn that you had them?",
			"Cassandra",
			"That's...",
			"Kylie",
			"That's? ... Oh! Sorry. Um. Next question?",
			"Cassandra",
			"Yes, I think that would be best."
		],
		"options": [
			{
				"description": "Continue",
				"next": "interviewCassandraAboutThings"
			}
		]
	},
	"askCassandraAboutGiantHeads": {
		"dialog": [
			"Kylie",
			"I hear you talk to those giant heads growing out of the ground.",
			"Cassandra",
			"You mean the Changing Heads?",
			"Kylie",
			"Is that what you call them?",
			"Cassandra",
			"It's what they call themselves. Most people are scared to come near me, but the Changing Heads don't seem to mind. Though I suppose they can't really move away anyhow.",
			"Kylie",
			"What do you know about them?",
			"Cassandra",
			"They're a proud group birthed from the land itself. It saw the joy humans had in simply living, and through sheer will decided to join them. They've tried so hard, at first growing simple and cartoonish figures, then disfigured and grotesque, but now they're getting close.",
			"Cassandra",
			"And they are intent on doing it alone. I even offered to sculpt bodies for them, but they said they needed to \"create an authentic personal expression of the self\".",
			"Kylie",
			"But I bet *one* of them said yes.",
			"Cassandra",
			"You're quite right. He was ever an impatient one. I was going to make his body, but the others called him a corporate sell out and made me leave."
			],
		"options": [
			{
				"description": "Continue",
				"next": "interviewCassandraAboutThings"
			}
		]
	},
	"askCassandraAboutSimon": {
		"dialog": [
			"Kylie",
			"My friend, Simon. One of those giant heads stole his body.",
			"Cassandra",
			"Ah, yes, I told them their impatient friend might try something like this.",
			"Kylie",
			"But... is there anything we can do for him? My friend, Simon, I mean.",
			"Cassandra",
			"Yes, of course. I have a type of tea that I believe will serve as a very effective cure if you can bring me the head and body.",
			"Kylie",
			"Where'd you learn a thing like that?",
			"Cassandra",
			"I studied to be a veterinarian. Certain... difficulties prevented me from completing my studies, but I learned quite a bit regardless."
			],
		"options": [
			{
				"description": "Continue",
				"next": "askCassandraAboutCure"
			}
		]
	},
	"askCassandraAboutCure": {
		"onEnter": "askCassandraAboutHeads",
		"dialog": ["", ""],
		"options": [
			{
				"description": "Tea? This isn’t some alternative medicine mumbo jumbo, is it?",
				"next": "askCassandraAboutAlternativeMedicine"
			},
			{
				"description": "Veterinarian? Will this work on Simon?",
				"next": "askCassandraWhetherCureWillWork"
			},
			{
				"description": "Where do you think that head took my friend's body?",
				"next": "askCassandraAboutBody"
			},
			{
				"description": "Ask other things",
				"next": "interviewCassandraAboutThings"
			},
			{
				"description": "Thanks. Nothing else to ask for now."
			}
		]
	},
	"askCassandraAboutAlternativeMedicine": {
		"dialog": [
			"Kylie",
			"Tea? This isn’t some alternative medicine mumbo jumbo, is it?",
			"Cassandra",
			"Not at all. Bodylessness as a symptom afflicted too few people for the drug companies to profitably mass produce, but fortunately for your friend I can brew the more rustic variation.",
		],
		"options": [
			{
				"description": "Continue",
				"next": "askCassandraAboutCure"
			}
		]
	},
	"askCassandraWhetherCureWillWork": {
		"dialog": [
			"Kylie",
			"Veterinarian? But... This will work, right? I mean, Simon might be nocturnal, but he’s no cat.",
			"Cassandra",
			"Oh, certainly. I’ve tested it myself. But as I said, you will need the body."
		],
		"options": [
			{
				"description": "Continue",
				"next": "askCassandraAboutCure"
			}
		]
	},
	"askCassandraAboutBody": {
		"dialog": [
			"Kylie",
			"Any idea where that head ran off to with my friend's body?",
			"Cassandra",
			"Perhaps my sky salamander, Cone, could be of help. She's bathing in the pond outside.",
			"Kylie",
			"Wait, that thing flies?",
			"Cassandra",
			"Yes, and quite gracefully I might add.",
			"",
			"Cassandra reaches into a pocket somewhere and pulls out a fish.",
			"Cassandra",
			"Here, feed this to Cone and I’m sure she'll warm up to you.",
			"Kylie",
			"Sweet! Thanks, Cassandra. You've been so nice!",
			"Cassandra",
			"Any time. Please come by whenever you’re in the mood for tea."
		],
		"options": [
			{
				"description": "Continue",
				"next": "askCassandraAboutCure"
			}
		]
	},
	"examineSalamander": {
		"dialog": ["Kylie", "Hey there, cutie! Enjoying the water?"]
	},
	"feedSalamander": {
		"dialog":
			[
				"Kylie",
				"Here, girl. Chow time.",
				"",
				"Cone voraciously gobbles down the fish in a gulp.",
				"Kylie",
				" Woah, Cone, that’s a real appetite you got there. I’m coming on board now, 'kay?",
				"",
				"As Kylie climbs on, Cone turbulently tosses her back off.",
				"Kylie",
				"Hey, what gives?!? Ugh, I guess I need a bigger fish from Cassandra."
			]
	},
	"treatSalamander": {
		"dialog":
			[
				"Cassandra",
				"Cone, darling, how are you feeling? Kylie, would you mind applying some to her tail?",
				"Kylie",
				"Yes, ma’am!",
				"",
				"Kylie rubs the ointment over Cone the sky salamander’s long slick tail. It feels smooth and wet, and a bit like rubber, occasionally pulsating with a playful twitch.",
				"Cassandra",
				"There we are. She should be ready to fly now.",
				"Kylie",
				"Already?",
				"Cassandra",
				"Haha, it's a very effective remedy. She'll need time for a full recovery, but she's in good health, and eager to be airborne. I'll join you! A ride through the clouds is always refreshing."
			],
		"options": [
			{
				"description": "Fly into the skies",
				"next": "flyIntoTheSkies"
			}
		]
	},
	"askCassandraForAnotherFish": {
		"dialog": [
			"Kylie",
			"Hey, Cassie! Cone just bucked me off her back. Maybe one fish isn't enough.",
			"Cassandra",
			"Oh my! I hope you are not hurt.",
			"Kylie",
			"Nah, I’m a bit wet is all.",
			"",
			"Kylie feels a comforting heat surrounding her body.",
			"Kylie",
			"Woah! Are you doing this?",
			"Cassandra",
			"Just trying to help. All dry?",
			"Kylie",
			"Oh wow! Yeah, thanks.",
			"Cassandra",
			"As for Cone, now that I think of it, I’ve lately seen her flying closer to the sun than is healthy for an amphibian. The poor baby must have a sunburn.",
			"Kylie",
			"But you’re a vet, right? You can fix her?",
			"Cassandra",
			"Of course. Though I am missing an ingredient. Would you be so kind as to fetch some \"special salamander tea laves\" from Tom at Tea Song? He's a sweetheart, and a virtuoso at tea.",
			"Kylie",
			"So I’ve heard. You're pretty virtuoso yourself.",
			"Cassandra",
			"Oh, you flatter me!"
		]
	},
	"askTomForSpecialTea": {
		"onEnter": "askTomForSpecialTea",
		"dialog":
			[
				"",
				"Chapter 3 out of 5: Fixing Cone",
				"Kylie",
				"Tom?",
				"Tom",
				"Hi there! Kylie is it? Simon's friend, right?",
				"Kylie",
				"Yeah. You're a popular man. Cassandra asked me to get-",
				"Tom",
				"Oh, how is Cassandra?",
				"Kylie",
				" She’s... actually really nice! I don’t see how a woman like her could just snap one day and commit arson and... whatever you call burning folks.",
				"Tom",
				" Yeah, it’s terrifying what things normal people are capable of.",
				"Kylie",
				" Let alone people with fire powers! But anyway, Cassandra asked me to pick up “special salamander tea”.",
				"Tom",
				" Oh, I’m afraid the medicine man from the pharmacy bought all of the latest batch. But hey, I’m sure he’ll give you some if you really need it though! He’s a great charitable man. Saved my life when I was a kid. I’m heading there myself; wanna come along?",
				"Kylie",
				"Oh. Yeah, sure.",
				"Tom",
				"Cool. Do you wanna go now?"
			],
		"options": [
			{
				"description": "Yeah, let's go.",
				"next": "talkToTomAboutGoingToMedicineMan"
			},
			{
				"description": "Uh, just give me a minute."
			},
		]
	},
	"talkToTomAboutGoingToMedicineMan": {
		"dialog":
			[
				"Kylie",
				"Let's go see this medicine man, Tom.",
				"Tom",
				"Absolutely. Let's go."
			],
			"options": [
				{
					"description": "Go to see the medicine man",
					"next": "goToMedicineManWithTom"
				}
			]
	},
	"goToMedicineManWithTom": {
		"onEnter": "goToMedicineMan",
		"dialog": [
			"Tom",
			"Here we are."
		],
		"options": [
			{
				"description": "Continue",
				"next": "talkToMedicineManWithTom"
			}
		]
	},
	"talkToMedicineManWithTom": {
		"dialog":
			[
				"Man in the Gas Mask",
				" Tom! Hey, how are you doing? I’ve got your prescription right here.",
				"Tom",
				" I’m good, thanks. Are you coming over to see the band play tonight?",
				"Man in the Gas Mask",
				" Aw, that’s today! I’ve got some work on my hands, but I’d love to if I can make it.",
				"Tom",
				" I hope to see you there then. By the way, this is Kylie. Kylie, Malcolm.",
				"Kylie",
				" Hi, nice to meet you.",
				"Malcolm (Man in the Gas Mask)",
				" Yeah, same here.",
				"Tom",
				" Mal, would you happen to have any of that salamander tea left? Kylie here was asking for some. 6 bags if you can spare it. I’ll credit it toward your next order if that’s fine with you.",
				"Kylie",
				" So you’re the medicine man Tom was mentioning?",
				"Malcolm",
				" Haha, I guess Tom likes to call me that. And yeah, Tom, that sounds good.",
				"Tom",
				" Thanks, Mal. I’m gonna head back then. See you.",
				"Malcolm",
				" See you.",
				"Kylie",
				" Bye."
			],
		"options": [
			{
				"description": "Continue",
				"next": "talkToMedicineMan"
			}
		]
	},
	"talkToMedicineMan": {
		"onEnter": "onGettingSpecialSalamanderTea",
		"dialog":
			[
				"Malcolm",
				"Alright, 6 bags. Here ya go. Yeah, sorry for hoarding it all. I’ve just been testin' a real effective ointment for bad skin. Real effective, but the stuff burns, and this tea numbs the pain. The burn's pretty much intolerable otherwise.",
				"Kylie",
				" That sounds pretty cool. I hope you’ve still got enough tea for yourself then, and thanks so much for sparing some.",
				"Malcolm",
				" Oh, don’t mention it. Tom’s a good kid. If he wants you to have it, I’m down with that."
			],
		"options": [
			{
				"description": "Continue",
				"next": "talkToMedicineManAfterGettingTea"
			}
		]
	},
	"talkToMedicineManAfterGettingTea": {
		"dialog": ["", ""],
		"options": [
			{
				"description": "So what's the gas mask for?",
				"next": "askMedicineManAboutGasMask"
			},
			{
				"description": "Tell me about that cream again?",
				"next": "askMedicineManAboutCream"
			},
			{
				"description": "Finish talking"
			}
		]
	},
	"askMedicineManAboutGasMask": {
		"dialog": [
			"Kylie",
			" So what’s the gask mask for?",
			"Medicine Man",
			" Oh, the things I mix back there create some pretty bad fumes if you’re not suited up. It’s not just the mask, right? I’m bundled up like a caterpillar here."
		],
		"options": [
			{
				"description": "Continue",
				"next": "talkToMedicineManAfterGettingTea"
			}
		]
	},
	"askMedicineManAboutCream": {
		"dialog": [
			"Kylie",
			"Could you tell me about that cream again?",
			"Medicine Man",
			"Hah, the stuff's great for the skin, but it burns like mad. I wouldn't recommend it for acne. More like if you spilled acid on your face.",
			"Kylie",
			"Or if you got burned by a fire?",
			"Medicine Man",
			"Well, sure, that too."
		],
		"options": [
			{
				"description": "Continue",
				"next": "talkToMedicineManAfterGettingTea"
			}
		]
	},
	"giveCassandraSalamanderTea": {
		"onEnter": "giveCassandraSalamanderTea",
		"dialog":
			[
				"Kylie",
				"Hey, Cassandra! I got the tea for Cone's sunburn.",
				"Cassandra",
				"Ah, thank you, Kylie.",
				"Kylie",
				"No prob. So, did you all learn about flying salamanders in vet school?",
				"Cassandra",
				"Oh, not sky salamanders. I had one named Sally as a child. She scampered out of a log I was burning with matches one day, as if birthed by the flames. I didn’t understand fire then as I do now, but even then I found it beautiful. Warmth. Light. Comfort. I fell in love, and decided to bring her home and raise her.",
				"Cassandra",
				"Sally's passed on now, but Cone here is her child.",
				"Kylie",
				"Aw, that's sweet!",
				"Cassandra",
				"Anyhow, let's go fix Cone."
			]
	},
	"flyIntoTheSkies": {
		"dialog":
			[
				"Kylie",
				"This is amazing!"
			],
		"onEnter":	"flyIntoTheSkies",
		"options": [
			{
				"description": "Continue",
				"next": "talkAboutPastOfCassandra"
			}
		]
	},
	"talkAboutPastOfCassandra": {
		"dialog":
			[
				"",
				"Chapter 4 out of 5: Fire",
				"Cassandra",
				" Kylie, you seem understanding. You want to know why I really burned that man's house down with him in it?",
				"Kylie",
				"Oh! I nearly forgot.",
				"Cassandra",
				"I don't want people to forget. That man earned it. I just want your understanding. And if you really are a journalist, I hope your article will be understanding. I would never burn you for that, but it would certainly burn me up a little.",
				"Kylie",
				"I promise I'll be fair, Cassandra.",
				"Cassandra",
				"Alright then.",
				"Cassandra",
				"I told you about my first salamander, Sally. She was just a few inches long when I found her, but grew near the size of Cone here. She was already a handful, so when we left town for my father's work, my parents insisted on giving her away. But despite plenty of interest, nobody seemed suitably knowledgable of how to care for her.",
				"Cassandra",
				"Around then, a young medicine maker arrived in town with strange and exotic animals, including another sky salamander. He seemed kind, so I entrusted him with Sally's care until I was older.",
				"Cassandra",
				"Then around... it must be 7 years ago now, I returned from veterinary studies to visit Sally, only to find the man's store selling charred sky salamander skin, eyes, tail. He did not even recognize me until I mentioned Sally. I saw the guilt in his eyes.",
				"Cassandra",
				"That’s when I felt my blood get hot. And then my skin got hot, and the air, and the room. And then I knew. It was my will that he and his store feel the flames as Sally did. And as I willed it, the place was engulfed in flames.",
				"Cassandra",
				"As I walked among the smoldering remains, I found a box of salamander eggs. All but one were empty. Used in his medicine, I presume. Cone here was the remaining egg.",
				"Cassandra",
				"And you know what? I know it was wrong. An eye for an eye is no recipe for justice. But it felt good. And perhaps I should, but I don’t regret it.",
				"Kylie",
				"...",
				"Cassandra",
				"Kylie, you are quiet.",
				"Kylie",
				"It's just... I remember why I was scared of you again.",
				"Cassandra",
				"...Kylie, I-",
				"Kylie",
				"Hey! It's Simon’s body!",
				"Cassandra",
				"Well, he certainly seems to be enjoying himself."
			],
		"options": [
			{
				"description": "Land",
				"next": "landAtBeachParty"
			}
		]
	},
	"landAtBeachParty": {
		"dialog": ["Kylie", "So this guy game to dance at a beach party?"],
		"onEnter": "landAtBeachParty"
	},
	"talkToThiefHead": {
		"dialog":
			[
				"Kylie",
				" Excuse me, you’re one of the Changing Heads, right?",
				"Thief Head",
				" You’re out of your mind, lady. I’m just a real human like you.",
				"Kylie",
				" Um. My friend Simon would really like his body back.",
				"Thief Head",
				" Who is this Simon? I was born with an infant body from the womb of a caring mother, and grew my body by eating delicious food.",
				"Kylie",
				" Cassandra offered to make you a body, right? Why don’t we just do that? It doesn’t matter what your brothers and sisters think.",
				"Thief Head",
				" Cassandra? I don’t need her shoddy clay work.",
				"Cassandra",
				" I am afraid he’s right. I’m not much of an artist, though I am a bit offended by the tone.",
				"Kylie",
				" Please, my friend Simon is an excellent artist. He can made you a body! Or maybe one of his artist friends can.",
				"Thief Head",
				" I don’t need a body made from dirt! I’ve got a perfectly good one right here!",
				"Cassandra",
				" Kylie, dear, let me handle this.",
				"",
				"The beach party erupts into flames",
				"Party Goer",
				"Sweet! Bonfire!",
				"Another Party Goer",
				"It's a disco infero! Party on!",
				"Cassandra",
				"Thief of the Changing Heads, you have stolen someone else's body as your own. Instead of treating you as a criminal, Kylie here kindly offered you a new body of your own. Yet you refuse. I am not so kind, and if you do not come peacefully, I won't hesitate to seer your head off and take the body alone.",
				"Thief Head",
				"You can't! This body is mine now. Finders keepers, losers-",
				"Thief Head",
				"-",
				"Kylie",
				"What happened?!?",
				"Cassandra",
				"He is just dehydrated. Partly from my flames, but I suspect more from dancing all day in a body he is unaccustomed to.",
				"Kylie",
				"Cassandra, that amazing! But... were you really going to burn his head off?",
				"Cassandra",
				"Certainly not. I just hoped to invoke his cooperation with the fear of flames, but he's a stubborn one.",
				"Kylie",
				"So what do we do?",
				"Cassandra",
				"Let's discuss this back home? I could use a cup of tea to think over.",
				"Kylie",
				"Of course! Sure.",
			]
	},
	"talkToFaintedThiefHead": {
		dialog:
			[
				"Kylie",
				"Looks like he's out cold. Good riddance!"
			]
	},
	"askCassandraHowSimonIs": {
		dialog:
			[
				"",
				"Chapter 5 out of 5: Burn",
				"Kylie",
				"Hey so how's Simon's body?",
				"Cassandra",
				"It's resting in the back, but we need to remove the head. I have a thought, but the specifics elude me.",
				"Cassandra",
				"He knows joy of having a body, but not the pain, and if we inflict enough, I am sure he will pop right off. But we cannot harm the body. Otherwise I would just burn him a bit.",
				"Kylie",
				"Burn him without harming the body? Oh! That ointment! The guy with the mask!",
				"Cassandra",
				"A mask you say? What exactly is he trying to cover?",
				"Kylie",
				"Cover? He just... Oooh! Uh. Nothing. He likes Halloween. I mean-",
				"Cassandra",
				"Very well. I will watch over the body until you are ready.",
				"Kylie",
				"(Was he covering burn scars?)"
			]
	},
	"askForSomethingThatHurts": {
		dialog:
			[
				"Kylie",
				" Hello, um...",
				"Malcolm",
				" It’s Malcolm. How was the tea?",
				"Kylie",
				"Oh, it was great. Hey, I was wondering whether I could get some of that skin ointment you mentioned. The one that really burns.",
				"Malcolm",
				"Well, it's a a bit strong for you. If you need something for your skin-",
				"Kylie",
				"Oh, it’s not for me. You know those giant heads?",
				"Malcolm",
				"The Changing Heads.",
				"Kylie",
				"One of them stole my friend Simon’s body and won't return it. We just want to burn him a bit to make him leave without harming the body.",
				"Malcolm",
				"Wow, that’s sounds like some real trouble.",
				"Malcolm",
				"Okay, yeah, I think the skin cream should work just fine. But make sure your friend drinks the tea before getting back on his body. Here's some of the cream.",
				"Kylie",
				"Thank you! This is a huge help.",
				"Malcolm",
				"Anytime.",
				"Kylie",
				"By the way, Mal. Do you know Cassandra?",
				"Malcolm",
				"Ah, that. You've been speaking to her?",
				"Kylie",
				"Yeah...",
				"Malcolm",
				"It's true. I’m the one she burned.",
				"Kylie",
				"Sorry. So then the mask-",
				"Malcolm",
				"It's to hide the burns from customers. I guess deserved it. I don't know, I don’t think I deserved *this*. She told you what happened?",
				"Kylie",
				"Why did you do it?",
				"Malcolm",
				"You know how I met Tom from Tea Song? He got real sick as a kid. He wasn’t going to make it. The only cure is refined from a substance in sky salamander heart, but over hunting made them a rare endangered species.",
				"",
				"I already had a tamed male, and then I found out Cassandra was looking for someone to care for her female. If I could sustainably breed and farm them, there are so many diseases that could be cure.",
				"",
				"I never planned on killing Cassandra's salamander. But Tom was sick. I harvested the male first after fertilizing the female, but Tom needed more. So after the eggs were laid, I harvested Cassandra’s and hoped I could find the words to explain.",
				"Kylie",
				"That's terrible. I mean, I get it. Just... the whole situation.",
				"Malcolm",
				"Yeah. Well, Tom’s well these days, so it was worth something.",
				"Kylie",
				"So that skin cream is for your burns?",
				"Malcolm",
				"Yeah. It’s been a rough, but with the cream I can stop using the mask in a few years. And the insurance paid for my house.",
				"Kylie",
				"That’s optimistic.",
				"Malcolm",
				"Well, you can’t let the past drag you down. Business is well. Tom's healthy. Things are okay."
			]
	},
	"fixSimon": {
		dialog:
			[
				"Simon",
				"Kylie! You are the best friend ever. If you ever need a favour-",
				"Kylie",
				"I do. Put me in that cartoon you’re working on and make me a cool journalist in an episodes.",
				"Simon",
				"Oh. You’ve thought about this. Uh, I’ll ask the team if we can work that in.",
				"Cassandra",
				"So Kylie, the thief is waking soon. You have something?",
				"Kylie",
				"Yeah! Cassandra, do you have some gloves? So this skin cream is harmless but it's supposed to burn real bad. Drinking the salamander tea numbs it too, so Simon won't feel anything, but the thief head will.",
				"Cassandra",
				"That should work. Here are the gloves. I'll brew the tea.",
				"",
				"Kylie applies cream to the body",
				"Thief Head",
				"AAAAAAAAAAH! Death! Death! This is death! This is what death must feel like. My life was short, but I lived it in glory!",
				"Kylie",
				"You’re not dying, you wuss, but you better get off that body.",
				"Thief Head",
				"No! This is *my* body! I will not be made to- OH MY FEELING TISSUES! They cry out in horror! I must maintain- AH!",
				"",
				"The thief head pops off the body",
				"Cassandra",
				"Quickly, Simon, drink this.",
				"Simon",
				"It’s hot! I'll burn my tongue.",
				"Kylie",
				"Hey, you heard the thief head. You'll burn plenty more if you don’t drink that stuff.",
				"Simon",
				"Okay, okay, I’m drinking. Ow! My tongue.",
				"Cassandra",
				"Alright then, on you go.",
				"",
				"Cassandra places Simon’s head onto his body",
				"Simon",
				"Yes! I’m back! Fingers, I missed you. Toes! Ow, my legs. I thought the tea was supposed to stop the burn.",
				"Kylie",
				"Hah, that’s not the cream, Simon. This guy was at the beach dancing in your body all day.",
				"Simon",
				"Oh. Well, I guess that's my exercise for the day.",
				"Thief Head",
				"You filthy capitalists! You can't take that body from me. You can't *own* a body.",
				"Cassandra",
				"Ignore him. I'll return him to his family, where they will decide a fair punishment. But Kylie, where did you get this cream again?",
				"Kylie",
				"Oh, nobody. A friend had it.",
				"Cassandra",
				"Ah, so you’re friends with Malcom.",
				"Kylie",
				"Ack... No, I-",
				"Simon",
				" Who’s Malcom?",
				"Kylie",
				"Uh. Nobody! A no good pet killer. Right, Cassie? But, well, let's forget him! He sure learned his lesson, right?",
				"Cassandra",
				"Is that so?",
				"Kylie",
				"Yes. Yes, that’s so.",
				"Cassandra",
				"Well, I better go thank him for his help then. You two stay however long you like. I hope you'll come by again for tea sometime.",
				"",
				"Cassandra leaves",
				"Simon",
				"Wait, so who is Malcolm again?",
				"Kylie",
				"He's a decent guy, Simon. I've gotta follow Cassandra. I don't like that look in her eyes.",
				"Simon",
				"Alright. I'll be at Tea Song."
			]
	},
	"seeApologyOfCassandra": {
		dialog:
			[
				"Kylie",
				"No fire. Good sign.",
				"Cassandra",
				"Malcolm, why don’t you take off the mask?",
				"Malcolm",
				"I’d really prefer-",
				"Cassandra",
				"Ah, Kylie.",
				"Kylie",
				"Yeah. Hi. So, we’re all here.",
				"Cassandra",
				"Talking.",
				"Kylie",
				"Talking. Not burning.",
				"Malcolm",
				"Yes, don’t worry. Cassandra just came to thank me for the tea.",
				"Cassandra",
				"It’s okay, Kylie. I know I unnerve you bit. That's fair. But I and my flames are far calmer these days.",
				"Kylie",
				"So are you two friends now?",
				"Malcolm",
				"Are we?",
				"Cassandra",
				"Malcolm, we will never be friends. I don't forgive you. This is not forgiveness. This is just an apology. I was young, emotional, and lacked self control, and I am sorry. For the first time, I truly do feel truly bad about it.",
				"Cassandra",
				"But Sally was my best friend, and you took her away from me forever. I know you saved Tom. I know you had reasons. But you lost Sally to do it. I never got an apology from you either.",
				"Malcolm",
				"Cassandra... I still don’t know what to say. I’m sorry-",
				"Cassandra",
				"That will do. Kylie, good to see you again. Malcolm, goodbye.",
				"",
				"Cassandra leaves",
				"Kylie",
				"How are you, Mal?",
				"Malcolm",
				"Good, I guess. I think she still hates me, but at least she understands.",
				"Kylie",
				"She’s changed, huh?",
				"Malcolm",
				"Not so much. She says she's calmer now, but there's a spark in her and I was dumb and wrong back then to douse it in gasoline. I'm glad she's putting that spark to good use now.",
				"",
				"The End. But if you'd like to see what everyone's up to now.",
				"",
				"Epilogue",
				"Kylie",
				"Alright, time to meet Simon at Tea Song again."
			]
	},
	"debriefWithSimon": {
		dialog:
			[
				"Kylie",
				"How are you feeling?",
				"Simon",
				"Reinvigorated! That was a life experience. A real change in perspective.",
				"Kylie",
				"In all the excitement I talked to those giant heads but never took a proper look, really.",
				"Simon",
				"Me neither. Wanna go now?",
				"Kylie",
				"Yeah. Don't fall asleep this time."			]
	},
	"talkToSimonAtChaningHeadsAfterReattachment": {
		dialog:
			[
				"Simon",
				"Hey, what do you think they did to that thief head?",
				"Kylie",
				"I don’t know. I’ll ask."
			]
	},
	"debriefWithChangingHeads": {
		dialog:
			[
				"Kylie",
				"Hey! How are you folks?",
				"Head A",
				"We are fantastic. We now have a prime example of the folly of impatience.",
				"Kylie",
				"Um. Where's the thief head?",
				"Head A",
				"We had a democratic vote and have put sanctions against his body growing privelages.",
				"Head B",
				"We buried that poser! He'll grow into a little cherry tree that can’t talk or move!",
				"Heads",
				"Hahahahahaha.",
				"Theif Head",
				"(Muffled undeground) Whatever, jerks! I'll grow delicious cherries and that'll taste rad, and you can't have any."
			]
	},
	"askSimonAboutWritersBlock": {
		dialog:
			[
				"Kylie",
				"So Simon, how’s your writer’s block?",
				"Simon",
				"Gone. I have so many thoughts. How about you?",
				"Kylie",
				"I don't even know. It was thing, I'll give you that.",
				"Simon",
				"Hey, what do you think they did to that thief head?",
				"Kylie",
				"I don’t know. I’ll ask."
			]
	}
};

	return conversations;
};
