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
		"dialog": [
			"Kylie",
			"Alright, Simon better be here... Ah! Hey, Simon!"
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
				"dialog": [],
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
					"Kylie",
					"Hey, so what's it like being an animator?"
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
			"Hey, I know! You know the weird head things growing out of the ground nearby past the pond? Let's check it out. Maybe we can get some inspiration.",
			"Kylie",
			"I like that idea! You're taking your bike, right? I'll meet you there."
		],
		"onEnter": "onTalkingToSimonAboutAnimation"
	},
	"introduceTheChangingHeads": {
		"dialog": [
			"Kylie",
			"Alright, Simon should be here any minute. I guess I'll just look around while I'm waiting."
		]
	},
	"examineTheChangingHeads": {
		"dialog": [
			"Kylie",
			"They just keep growing out of the ground. Each time a new one pops up it looks more and more like an actual person."
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
		]
	},
	"talkToTheChangingHeads": {
		"dialog": [
			"Kylie",
			"Hey! Can you folks hear me?",
			"Heads",
			"We hear you, brother! I mean, sister. Fellow creature!",
			"Kylie",
			"I’m a girl.",
			"Heads",
			"Of course you are! We are not strange and totally just like you. We are sorry. Please forgive us. Our brother is foolish, but he means no harm.",
			"Kylie",
			"What brother?",
			"Head A",
			"The body thief! Our brother, but a traitor to our cause.",
			"Head B",
			"The guy lacks patience.",
			"Head C",
			"What a sellout!",
			"Head D",
			"We’re supposed to be *growing* our bodies, not just grabbing the first one that walks by. Where’s the creativity in that? The heart?",
			"Head B",
			"You know, the human living in that cave by the pond told us this would happen. I believed it! Would y’all listen? Noooooo.",
			"Kylie",
			"Wait, the cave by the pond? You mean Cassandra?!? The scary tea lady that can burn stuff with her mind!?! Didn't she burn a dude and his house down for no reason?",
			"Head B",
			"Yeah yeah, *she* burned a *dude*. I definitely knew that. I’m just being inclusive with my pronouns.",
			"Head D",
			"We know stuff! Don’t think you’re better than us just ‘cause you just get *handed* a body for being born. Entitled brat.",
			"Head B",
			"Hey, don’t take your personal failures out on her!",
			"Kylie",
			"Ugh. I usually *avoid* Cassandra’s cave when I go by the pond. Maybe I can convince Simon that he doesn’t need a body."
		]
	},
	"mentionFearOfCassandra": {
		"dialog": [
			"Kylie (in her head)",
			"That's where Cassandra lives... I heard that she lives out here because she burned a man to death one day. Better move along before she fries me for loitering."
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
					"That’s fine; there’s always room for tea. I only brew the best."
				],
				"next": "beatAroundTheBushWithCassandra"
			},
			{
				"description": "I’d love to, but the caffeine keeps me up all night.",
				"dialog": [
					"Kylie",
					"I’d love to, but the caffeine keeps me up all night.",
					"Cassandra",
					"That’s perfect. I’m having chamomile. It soothes the mind."
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
	"giveCassandraTheGiftTea": {
		"dialog": [
			"Kylie",
			"Speaking of tea, I brought you some as a... cave warming gift. It’s... green?",
			"Cassandra",
			"Why, thank you! The fire over there already keeps the place plenty warm.",
			"Kylie (under her breath)",
			"That’s what I’m afraid of.",
			"Cassandra",
			"Pardon?",
			"Kylie",
			"Nothing!",
			"Cassandra",
			"Mmm? Anyway, though, I never say no to tea leaves from Tea Song. I’ve already got a pot brewed, so I’ll save this for later. Shall I pour you a cup?"
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
			"Calm down, I’m joking!",
			"Kylie",
			"Oh, for crying out loud!",
			"Cassandra",
			"Sorry, you seemed tense! I had to lighten the mood somehow."
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
			}
		]
	},
	"askCassandraWhatWasUp": {
		"onEnter": "askCassandraWhatWasUp",
		"dialog": [
			"Kylie",
			"What was up with all that, I don’t know, pleasantries and- and- and pointing a gun to my head until I drank your tea? Which is very good by the way.",
			"Cassandra",
			"By gun you mean a honed mind that can set things aflame at will, I suppose? Don’t worry. I don’t bite. My parents taught me to be polite to my guests is all. And thank you; I fancy myself a bit of a tea connoisseur."
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
		"dialog": [
			"Cassandra",
			"So I assume, especially seeing how scared you seem, that you didn’t just come here to offer me tea and exchange \"pleasantries\"?",
			"Kylie",
			"Well... yeah. I’m kind of a journalist. I mean, there are all these rumours about you, but I was hoping to get a better idea of who \"The Tea Lady\" really is.",
			"Cassandra",
			"Haha, \"Tea Lady\"? Well, thank you kindly for being such an intrepid young journalist willing to get my story. What would you like to know?",
			"Kylie",
			"Except the off limit thing, right? Um..."
		],
		"options": [
			{
				"description": "Ask Cassandra stuff (this is temporary)",
				"next": "interviewCassandraAboutThings"
			}
		]
	},
	"interviewCassandraAboutThings": {
		"onEnter": "interviewCassandraAboutThings",
		"dialog": [
			"Kylie",
			" So tell me about your fire powers.",
			"Cassandra",
			" Oh, it runs in the family. My mother’s side, I believe. They said I wouldn’t have it because she didn’t either, but I guess the doctors made a bit of a blunder.",
			"Kylie",
			" So when did you learn that you had them?",
			"Cassandra",
			" …",
			"Kylie",
			" Oh, sorry! Um. Next question?",
			"Cassandra",
			" Yes, I think that’s for the best.",
			"Kylie",
			" I hear you talk to those giant head things that grow out of the ground.",
			"Cassandra",
			" You mean the Changing Heads?",
			"Kylie",
			" Is that what you call them?",
			"Cassandra",
			" It’s what they call themselves. Most people are too scared to come anywhere near me, but the Changing Heads don’t seem to mind. I suppose they don’t really have the freedom to locomote anyhow.",
			"Kylie",
			" What do you know about them?",
			"Cassandra",
			" They’re a proud group. The land there saw the joy humans had in simply being alive, and through sheer will decided that it wished to join them. It tried over and over again, at times growing simple and cartoonish figures, and at others growing ones that were disfigured and grotesque, but eventually it improved. And they are intent on doing it alone. I once offered to help sculpt them a body, but they refused, and stated that they could do it themselves.",
			"Kylie",
			" I bet *one* of them would’ve accepted.",
			"Cassandra",
			" Yes, you’re quite right. How did you know?",
			"Kylie",
			" My friend. One of those heads stole his body.",
			"Cassandra",
			" Ah, yes, he was ever an impatient one. I was going to try to make him a body, but the others said it was unacceptable. I warned them that something like this would eventually happen if the continued to stick to their ways.",
			"Kylie",
			" But... is there anything we can do for him? My friend, I mean.",
			"Cassandra",
			" Yes, of course. I have a type of tea that I believe will serve as a very effective cure if you can bring me the body.",
			"Kylie",
			" Tea? This isn’t some sort of alternative medicine mumbo jumbo, is it?",
			"Cassandra",
			" Not at all! It was actually once a drug you could get with a doctor’s prescription, but bodylessness was a symptom that afflicted too few people for it to ever be profitable. Fortunately for your friend, I know how to brew it.",
			"Kylie",
			" How did you end up learning something like that?",
			"Cassandra",
			" I studied to be a veterinarian. Certain... difficulties prevented me from completing my education, but I still gained a decent bit of knowledge from my studies.",
			"Kylie",
			" Veterinarian? But... This will work, right? I mean, Simon might be nocturnal, but he’s no cat.",
			"Cassandra",
			" Oh, certainly. I’ve tested it myself. But as I said, you will need the body.",
			"Kylie",
			" Aw, that’s right! I don’t know how we’re gonna manage that.",
			"Cassandra",
			" Perhaps my sky salamander, Cone, could be of help.",
			"Kylie",
			" Oh, that’d be swell! Where is it?",
			"Cassandra",
			" She’s outside, bathing in the pond.",
			"Kylie",
			" Wait, so that thing flies?",
			"Cassandra",
			" Yes, Cone is a very graceful flier.",
			"",
			"Cassandra reaches into a pocket somewhere and pulls out a fish.",
			"Cassandra",
			" Here, feed her this and I’m sure she’ll be willing to let you on her back.",
			"Kylie",
			" Sweet! Thanks, Cassandra. You’ve been so nice!",
			"Cassandra",
			" Any time. Please come by anytime you’re in the mood to have tea."
		]
	},
	"examineSalamander": {
		"onEnter": "examineSalamander",
		"dialog": ["Kylie", "Hey there, cutie! Enjoying the water?"]
	}
};

	return conversations;
};
