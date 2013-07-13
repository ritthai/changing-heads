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
	"talkToShopOwner": {
		"dialog": [
			"Kylie",
			"Hi.",
			"Tea Shop Owner",
			"Good afternoon.",
			"Game Developer",
			"Yeah, this is sort of temporary."
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
		"dialog": ["Kylie", "Hey there, cutie! Enjoying the water?"]
	},
	"feedSalamander": {
		"dialog":
			[
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
			]
	},
	"treatSalamander": {
		"dialog":
			[
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
			]
	},
	"askCassandraForAnotherFish": {
		"dialog": [
			"Kylie",
			" Hey, Cassie! I think Cone’s still hungry. She just threw me off her back!",
			"Cassandra",
			" Oh my! I hope she did not hurt you.",
			"Kylie",
			" Nah, I’m a bit wet, but fine otherwise.",
			"",
			"Kylie starts to feel a heat surrounding her body.",
			"Kylie",
			" Woah! Are you doing this?",
			"Cassandra",
			" Just trying to help. There. All dry?",
			"Kylie",
			" Oh, cool! Thanks. But yeah, could I get another fish please?",
			"Cassandra",
			" Actually, now that I think of it, I believe Cone has a sunburn. I’ve seen her flying closer to the sun that is healthy for an amphibian lately. Poor baby.",
			"Kylie",
			" But you’re a vet, right? You can fix her?",
			"Cassandra",
			" Yes, of course. Though I am missing missing an ingredient I need for the ointment. While I prepare using the ingredients I do have, would you be so kind as to fetch some “special salamander tea” from Tea Song? Tom will know the one. Just tell him you’re picking it up for me.",
			"Kylie",
			" And Tom’s the owner, right?",
			"Cassandra",
			" Yes. He’s a virtuoso at tea making.",
			"Kylie",
			" I’ve heard. He told me you’re pretty good yourself.",
			"Cassandra",
			" Oh, what a sweetheart. He flatters me.",

			"Game Developer",
			"Hi! It's the developer speaking. I haven't added Tom to the tea shop yet, so that's all for now."
		]
	},
	"askTomForSpecialTea": {
		"dialog":
			[
				"Tom",
				" Hello again! What may I do for you? Kaylee was, is it?",
				"Kylie",
				" Kylie actually. And you’re Tom?",
				"Tom",
				" Ah, forgive me. So how is Cassandra?",
				"Kylie",
				" She’s... actually really nice! I don’t see how a woman like her could just snap one day and commit arson and... whatever you call burning folks.",
				"Tom",
				" Yeah, it’s terrifying what things normal people are capable of.",
				"Kylie",
				" Let alone people with fire powers! But anyway, Cassandra asked me to pick up “special salamander tea”.",
				"Tom",
				" Oh, I’m afraid the medicine man from the pharmacy bought all of the latest batch. But hey, I’m sure he’ll give you some if you really need it though! He’s a great charitable man. Saved my life when I was a kid. I’m actually about to head there myself; wanna come along?",
				"Kylie",
				" Oh. Yeah, sure."
			]
	},
	"talkToMedicineMan": {
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
				" Bye.",
				"",
				"Tom leaves",
				"Malcolm",
				" Alright, 6 bags. Here you go. Yeah, sorry for hoarding it all. I’ve just been testing a super effective ointment for skin problems, but the way it burns your skin is intolerable. The tea seems to really make a difference.",
				"Kylie",
				" That sounds pretty cool. I hope you’ve still got enough for yourself, and thanks so much for sparing some.",
				"Malcolm",
				" Oh, don’t mention it. Tom’s a good kid. If he wants you to have it, I’m down with that.",
				"Kylie",
				" So what’s the gask mask for?",
				"Medicine Man",
				" Oh, the things I mix back there create some pretty bad fumes if you’re not suited up. It’s not just the mask, right? I’m bundled up like a caterpillar here.",
				"Kylie",
				" Alright, thanks again.",
				"Malcolm",
				" No problem."
			]
	},
	"giveCassandraSalamanderTea": {
		"onEnter": "giveCassandraSalamanderTea",
		"dialog":
			[
				"Kylie",
				" Hey, that’s a cool dress! How did you get the flames like that?",
				"Cassandra",
				" Oh, just a trick I learned from years of playing around. You have the salamander tea?",
				"Kylie",
				" Yeah, right here.",
				"Cassandra",
				" Excellent. Let’s go get Cone fixed up."
			]
	},
	"talkAboutPastOfCassandra": {
		"dialog":
			[
				"Cassandra",
				" Kylie, you seem like a nice understanding person. Would you- Would you like to hear about what really happened those years ago, when I burned that man and his house down? For your journalism.",
				"Kylie",
				" Oh, right! I nearly forgot about that! Yes, please.",
				"Cassandra",
				" Alright. Please just hear me out, and don’t twist things around. If you do, I promise not to hurt you, but I would really appreciate if you did not.",
				"Kylie",
				" I promise not to twist things around!",
				"Cassandra",
				" Alright then.",
				"",
				"When I was a kid I had another sky salamander, Sally. Cone here who we’re riding is her child. I didn’t understand it as I do now, but even as a child I found fire beautiful. Warmth. Light. Comfort. I found Sally scampering out of a log I was burning using matches one day, as if birthed by the flames. I fell in love, and decided to bring her home and raise her.",
				"",
				"She was only a few inches long then, she eventually grew to the size of a large dog. It was also around then that she started flying and I learned that she was a sky salamander.",
				"",
				"One day, we all had to move for my father’s work. Except Sally. She was already a handful, and with the move, my parents said we absolutely had to give her away. We searched for a suitable owner, but despite plenty of interest, nobody seemed to know how to take care of her.",
				"",
				"Around then, a man moved town with strange and exotic animals. Even another sky salamander. He seemed nice, and seemed to know what he was doing, so we chose to give Sally to him until I was older.",
				"",
				"And then around... I guess it must’ve been 7 years ago now, I came back to visit Sally. I learned that he was actually some sort of medicine maker, but I didn’t suspect anything yet. It wasn’t until I got to his store that I saw him selling roasted sky salamander flesh, salamander eyes, salamander tail.",
				"",
				"He didn’t recognize me as I approached him, and asked how he could help. Well, I told him I was there to see Sally, the friend I entrusted to him as a child, and he froze.",
				"",
				"That’s when I felt my blood get hot. And then my skin got hot, and the air, and the whole room. And then I knew what could be done. It was my will that he and his store feel the heat of the flames as Sally did. And as I willed it, the place was engulfed in flames.",
				"And you know what? I know it was wrong. I don’t believe in revenge, or torture, or hurting people. But let me tell you",
				" it felt good. And though I know that should, I don’t regret it.",
				"",
				"Well, as I walked among the smoldering remains if his store, I found a box labelled, “Sky Salamander Eggs.” There were five, but four were already cracked open. Used in his medicine, I presume. I raised the last, and that’s where Cone here came from.",
				"Kylie",
				" ...",
				"Cassandra",
				" Kylie, you are quiet.",
				"Kylie",
				" ...It’s just... I’m a bit scared of you again.",
				"Cassandra",
				" Sorry. Perhaps I should not have brought it up.",
				"Kylie",
				" No, it’s fine- Hey! Look at that giant head! It’s Simon’s body!",
				"Cassandra",
				" Well, he certainly seems to be enjoying himself."
			]
	},
	"talkToThiefHead": {
		"onEnter": "talkToThiefHead",
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
				" Let it burn, baby! Let it burn!",
				"Another Party Goer",
				" Dance dance fever!!!",
				"Cassandra",
				" Thieving head of the Changing Heads, you have stolen someone else’s body to use as your own. We could have treated you like a criminal, but Kylie here kindly offered you a new body of your own. Yet you still refused. If you do not come with us peacefully, I won’t hesitate to melt that head of yours right off and bring the body alone back to Kylie’s friend.",
				"Thief Head",
				" You can’t do that! This body is mine now. Finders keepers, losers weep...",
				"",
				"The head falls silent",
				"Kylie",
				" What happened?!?",
				"Cassandra",
				" Do not worry. He is just dehydrated from the heat of the flames, and I suspect from dancing all day in a body he is not accustomed to.",
				"Kylie",
				" Cassandra, that was awesome! You weren’t really going to burn his head off, were you?",
				"Cassandra",
				" No, certainly not. I was hoping the fear of fire would be enough to make him cooperate though. It appears we will need to be a bit more creative.",
				"Kylie",
				" So what do we do?",
				"Cassandra",
				" He has experienced the joy of having a body, but I believe he has not yet experienced true pain. We need something that will hurt him enough to make him leave the body, but that will not harm it.",
				"Kylie",
				" Hmm. Something that hurts but won’t harm... I think I know just the thing.",
				"Cassandra",
				" Well then, let’s retreat back to my place. I’ll get Simon and take care of the body, and you can try this plan of yours."
			]
	},
	"askForSomethingThatHurts": {
		dialog:
			[
				"Kylie",
				" Hello, um...",
				"Malcolm",
				" It’s Malcolm. Hey, don’t worry about it- how was the tea?",
				"Kylie",
				" Oh, it was great. Hey, I was wondering whether I could get some of that skin ointment you said you were working on. The one that burns really really badly.",
				"Malcolm",
				" Oh, I don’t mind selling you some, but I really think that stuff’s a bit strong for you. If you need something for-",
				"Kylie",
				" Oh, it’s not for me. You know those giant heads?",
				"Malcolm",
				" Yeah, the Changing Heads.",
				"Kylie",
				" Wait, does everyone know that they’re called that but me? Um, anyway. One of them stole my friend’s body, and won’t give it back. So we want to hurt him until he leaves, but my friend still needs the body so we don’t want to harm it.",
				"Malcolm",
				" Wow! That’s sounds like some real trouble your friend got himself into.",
				"Kylie",
				" Not for much longer I hope.",
				"Malcolm",
				" Okay, yeah, I think the special skin cream should work just fine. Just make sure he drinks the tea before getting back onto his body. Here’s some of the cream, and an extra bag of tea in case you’re out.",
				"Kylie",
				" Hey, thanks! You’ve been so helpful.",
				"Malcolm",
				" Anytime.",
				"Kylie",
				" By the way, Mal, did you know Cassandra? I mean, personally?",
				"Malcolm",
				" Ah, *that*. Have you been speaking to her?",
				"Kylie",
				" Oh! Um, I-",
				"Malcolm",
				" No, don’t worry about it. Yeah, I’m the one she burned, but I don’t hate her for it.",
				"Kylie",
				" Wow, really?",
				"Malcolm",
				" Well, I kind of deserved it. Well, maybe not. I don’t think I deserved *this*. Having to cover myself up all the time to hide the burns from customers. But I probably deserved something.",
				"Kylie",
				" Why did you do it?",
				"Malcolm",
				" You know how Tom seems to like me so much? He got really sick when he was a kid, and everyone seriously thought he wasn’t going to make it. The only realistic cure for him was going to be a substance found in a sky salamander’s heart, but they’re actually a rare and endangered species due to over hunting.",
				"",
				"Before I met Tom, I actually already tamed a male sky salamander. When I found out Cassandra had a female, and that she needed someone to look after it, I had to do it. I mean, there are so many diseases we could cure if we had sky salamanders sustainably bred and farmed instead of hunting for them.",
				"",
				"I did trick Cassandra. I needed her female salamander for breeding, but I wasn’t planning on killing her. After she was fertilized, I even used my male salamander for Tom first. He was still really sick though, so after the eggs were laid, I used Cassandra’s, and hoped I could figure something out before she returned.",
				"Kylie",
				" That really sucks!",
				"Malcolm",
				" Yeah. Well, Tom’s clearly doing great, at least, so I at least got that.",
				"Kylie",
				" So that’s why you’re making the skin cream! For your burns!",
				"Malcolm",
				" Yeah. It’s been a rough I don’t know how many years, but I think if I keep using the cream, I’ll be able to stop wearing this mask in about a year. And insurance paid for my house, so in a way, it didn’t turn out so bad.",
				"Kylie",
				" That’s some ridiculously optimistic thinking you have there.",
				"Malcolm",
				" Hah, well, you know! You can’t let the past drag you down. Bygones. Sunken costs. Glass half full."
			]
	},
	"fixSimon": {
		dialog:
			[
				"Simon",
				" Kylie! You are the best friend ever. I mean, if you ever need a favour-",
				"Kylie",
				" I wanna be in the show you’re working on. Make me a cool journalist in one of the episodes, and give the character my name, and let me do the voice. Oh, and make sure my character looks cool.",
				"Simon",
				" Oh. So you’ve been thinking about this. Uh, I’ll talk to the team and see if we can work that in.",
				"Cassandra",
				" Kylie, this thieving head will awaken soon. What is your plan?",
				"Kylie",
				" Oh! Cassandra, do you have a pair of gloves? This skin cream burns like mad, but it’s should be harmless. And we need to give Simon some of that salamander tea too so that he doesn’t feel the burn when he gets back on.",
				"Cassandra",
				" Here you go, hun.",
				"",
				"Cassandra hands her the gloves",
				"Cassandra",
				" I’ll prepare the tea.",
				"",
				"Kylie starts applying the cream to the body",
				"Thief Head",
				" AAAAAAAAAAH! Death! Death! This is death! This is what death must feel like. My life was short, but I lived it in glory!",
				"Kylie",
				" You’re not dying, you wuss, but I’ll keep the pain coming if you don’t get off that body right now.",
				"Thief Head",
				" This is *my* body! I will not be made to- OH MY FEELING TISSUES! They cry out in horror! I must resist- AH!",
				"",
				"The thief head pops off the body",
				"Cassandra (to Simon)",
				" Quickly, drink this.",
				"Simon",
				" It’s hot!",
				"Kylie",
				" Hey, you heard that giant head; if you don’t drink that tea you’re gonna get a lot hotter.",
				"Simon",
				" Okay, I’m drinking- Ow! I burned my tongue.",
				"Cassandra",
				" Alright then, on you go.",
				"",
				"Cassandra places Simon’s head onto his body",
				"Simon",
				" Yes! I’m back- wait, I can’t feel anything.",
				"Cassandra",
				" You are not attached yet, dear. Drink this now; it is already lukewarm.",
				"",
				"Simon gulps it down",
				"Simon",
				" Woah, this feels weird and amazing. Hey, I can move my fingers again! My toes! My legs! Ow, my legs. I thought you said that first cup of tea would make the cream not hurt.",
				"Kylie",
				" Hah, that’s not the cream. This guy was dancing all day at a beach party in your body.",
				"Simon",
				" Oh. Well, I guess that means I don’t need to work out today then.",
				"Thief Head",
				" You filthy capitalists! You can’t take that body from me. Nobody can *own* a body. That’s like saying you can own the sky, or the land, or a car.",
				"Cassandra",
				" Just ignore him. I’ll return him to his family, where they will decide a fair punishment. But Kylie, I would like to know where you procured this skin cream of yours.",
				"Kylie",
				" Oh, I got it from- Um. A friend had it.",
				"Cassandra",
				" Ah, so you’re friends with Malcom.",
				"Kylie",
				" Eeep!",
				"Simon",
				" Who’s Malcom?",
				"Kylie",
				" He’s a no good pet killer who got what he deserved and I think we should all forget about because he’s learned his lesson.",
				"Cassandra",
				" Is that so?",
				"Kylie",
				" Yes. Yes, that’s so.",
				"Cassandra",
				" Very well. I’m off to the Changing Heads then. You two stay however long you like, and I hope you will come over again for tea sometime.",
				"",
				"Cassandra leaves",
				"Simon",
				" Wait, so who exactly is Malcolm again?",
				"Kylie",
				" He’s like some sort of doctor, and he saved Tom’s life, but he had to kill Cassandra’s pet salamander to do it so she got mad and burned him and his house down, but he’s actually a pretty nice guy, but Cassandra kind of is too when she’s not crazy, and I think we need to go see Malcolm as soon as possible.",
				"Simon",
				" Wow, I don’t think I got all that, but that sounds really crazy.",
				"Kylie",
				" I’ll explain it to you again later; I’ve gotta go. Let’s meet up at Tea Song.",
				"Simon",
				" Ok, sure, just give me a call."
			]
	},
	"seeApologyOfCassandra": {
		dialog:
			[
				"Kylie",
				" Ok, nothing’s burnt. Nobody’s here. That either means Malcolm was out, or... or something else.",
				"Cassandra’s voice from the back",
				" Malcolm, why don’t you take off the mask?",
				"Kylie",
				" Crap, it’s something else.",
				"",
				"Kylie enters the door to the back room",
				"Malcolm",
				" I’d really prefer-",
				"Cassandra",
				" Ah, Kylie.",
				"Kylie",
				" Yeah. Hi. So, we’re all back here.",
				"Cassandra",
				" Talking.",
				"Kylie",
				" Talking.",
				"Malcolm",
				" Yes, don’t worry. Cassandra just came to thank me for the tea.",
				"Cassandra",
				" It’s okay. Kylie, I know I unnerved you a little with my story back there, but I’m a far calmer person these days, as are my flames.",
				"Kylie",
				" Oh. That’s a relief. So are you two friends now?",
				"Malcolm",
				" Are we?",
				"Cassandra",
				" Malcolm, I want to make one thing clear. We will never be friends, this is not forgiveness, and there will never be forgiveness. This is an apology. I was young, overly emotional, and lacked self control. I am very sorry, and for the first time in seven years, I feel truly bad about it. But that was my best friend that you killed. I know you had reasons. I know you had a life to save. But Sally was my best friend, and you took her away from me forever. So I’m sorry, and that’s it. I never got an apology from you either, though to be fair, I never gave you a chance until now.",
				"Malcolm",
				" Cassandra... I’ve had over seven years to think about it, but I still don’t know what to say. I’m sorry-",
				"Cassandra",
				" That will do. Kylie, good seeing you here. Malcolm.",
				"",
				"Cassandra leaves",
				"Kylie",
				" How are you feeling, Mal?",
				"Malcolm",
				" Well... I don’t know. Good, I guess. I know she says she doesn’t forgive me, but I think maybe she does. I think she still hates me, but I’m glad she understands why I did it.",
				"Kylie",
				" She’s changed, huh?",
				"Malcolm",
				" Not so much, I think. Maybe more in control of her anger, but then again, maybe not. She had a pretty good reason to be mad all those years ago after all."
			]
	},
	"debriefWithSimon": {
		dialog:
			[
				"Kylie",
				" How are you feeling?",
				"Simon",
				" Reinvigorated! That was a real experience. A real change in perspective.",
				"Kylie",
				" We never did properly see the Changing Heads together, did we?",
				"Simon",
				" No, I guess not. Wanna go now?",
				"Kylie",
				" Yeah. But this time, I’m coming with you on the bike. And no falling asleep.",
				"Simon",
				" For sure."
			]
	},
	"talkToSimonAtChaningHeadsAfterReattachment": {
		dialog:
			[
				"Simon",
				" Hey, what do you think they did to that impatient thief head?",
				"Kylie",
				" I don’t know. I’ll ask them."
			]
	},
	"debriefWithChangingHeads": {
		dialog:
			[
				"Kylie",
				" Hey! How are you folks?",
				"Head A",
				" We are fantastic. Here we have a prime example of the consequences of impatience.",
				"Head B",
				" Hard work conquers all!",
				"Kylie",
				" Um. How’s that thief head dude?",
				"Head A",
				" That dude is no longer permitted to grow a body. We have sunken him back into the ground, where he will grow into a lovely cherry tree.",
				"Head B",
				" A lovely tree that can’t talk or move!",
				"Heads",
				" Hahahahahaha.",
				"Theif Head (muffled underground)",
				" Whatever, jerks! I’m gonna grow delicious cherries and they’ll taste radical.",
				"Kylie",
				" Right. So you all seem good."
			]
	},
	"askSimonAboutWritersBlock": {
		dialog:
			[
				"Kylie",
				" So Simon, how’s your writer’s block? Or artist’s block or whatever.",
				"Simon",
				" I think it’s totally gone. How about you? Do you have your journalistic scoop?",
				"Kylie",
				" I- I want to say yes, but I still have no idea how I’m gonna put it together. But yeah. This is something I can work with.",
				"",
				"This is the end. But feel free to continue exploring to see what everyone is up to after all this."
			]
	}
};

	return conversations;
};
