/*
Copyright (c) 2013 Ritchie Thai

See the file license.txt for copying permission.
*/

adventure.getScenes = function () {
	var scenes = {
		'teaShop': {
			background: "tea-shop.jpg",
			onEnter: 'enterTeaShopAndSeeSimon',
			hotspots: [
				{
					description: "Leave",
					shape: { type: "rectangle", topLeftCorner: {x: 40, y: 57}, bottomRightCorner: {x: 189, y: 315} },
					destinationScene: 'pond',
					destinationPosition: {x: 751, y: 432}
				}
				, {
					id: 'talkToSimon',
					description: "Talk to Simon",
					shape: { type: "rectangle", topLeftCorner: {x: 549, y: 219}, bottomRightCorner: {x: 647, y: 445} },
					positionToMovePlayerTo: {x: 473, y: 436},
					conversationToStart: 'talkingToSimonInTeaShop',
					isSolid: true
				}, {
					description: "Talk to Shop Owner",
					shape: { type: "rectangle", topLeftCorner: {x: 404, y: 85}, bottomRightCorner: {x: 479, y: 305} },
					conversationToStart: 'talkToShopOwner',
					onHit: 'onHittingTeaShopOwner',
					isSolid: true
				}

			],
			images: [
				{
					id: "simon",
					url: "img/characters/simon.png",
					shape: { type: "rectangle", topLeftCorner: {x: 570, y: 224}, bottomRightCorner: {x: 787, y: 433} }
				}, {
					url: "img/characters/tom.png",
					shape: { type: "rectangle", topLeftCorner: {x: 404, y: 85}, bottomRightCorner: {x: 479, y: 305} }
				}
			]
		},
		"pond": {
			background: "pond.jpg",
			playerPositionOnEnter: {x: 585, y: 286},
			hotspots: [
				{
					description: "Go to The Changing Heads",
					shape: { type: "rectangle", topLeftCorner: {x: 0, y: 300}, bottomRightCorner: {x: 100, y: 600} },
					destinationScene: 'theChangingHeads',
					destinationPosition: {x: 750, y: 400}
				}, {
					description: "Salamander",
					shape: { type: "rectangle", topLeftCorner: {x: 247, y: 395}, bottomRightCorner: {x: 485, y: 519} },
					isSolid: true,
					onHit: 'onHittingSalamander'
				}, {
					description: "Enter Cassandra's Cave",
					shape: { type: "rectangle", topLeftCorner: {x: 0, y: 0}, bottomRightCorner: {x: 350, y: 199} },
					destinationScene: 'caveOfCassandra',
					destinationPosition: {x: 135, y: 374},
					onHit: 'onHittingCaveOfCassandra'
				}, {
					id: "pond",
					shape: { type: "rectangle", topLeftCorner: {x: 116, y: 5}, bottomRightCorner: {x: 797, y: 442} },
					isSolid: true
				}, {
					description: "Go to the Tea Shop",
					shape: { type: "rectangle", topLeftCorner: {x: 700, y: 0}, bottomRightCorner: {x: 800, y: 600} },
					destinationScene: 'teaShop',
					destinationPosition: {x: 135, y: 374}
				}
			],
			images: [
				{
					id: 'exitToChangingHeadsIndicator',
					url: 'img/icons/left-arrow.png',
					shape: { type: "rectangle", topLeftCorner: {x: 23, y: 467}, bottomRightCorner: {x: 62, y: 508} }
				}
				, {
					id: 'exitToTeaShopIndicator',
					url: 'img/icons/right-arrow.png',
					shape: { type: "rectangle", topLeftCorner: {x: 714, y: 501}, bottomRightCorner: {x: 750, y: 539} }
				}
			]
		},
		"theChangingHeads": {
			background: "changing-heads.jpg",
			playerPositionOnEnter: {x: 415, y: 535},
			onEnter: "enterChangingHeads",
			hotspots: [ 
				{
					id: "examineNormalSizedHead",
					description: "Examine normal sized head",
					shape: { type: "rectangle", topLeftCorner: {x: 526, y: 381}, bottomRightCorner: {x: 594, y: 450} },
					positionToMovePlayerTo: {x: 471, y: 455},
					conversationToStart: 'examineNormalSizedHead',
					onHit: 'onHittingNormalSizedHead'
				}, {
					description: "Examine the Changing Heads",
					shape: { type: "rectangle", topLeftCorner: {x: 0, y: 115}, bottomRightCorner: {x: 800, y: 400} },
					conversationToStart: 'examineTheChangingHeads',
					onHit: 'onHittingTheChangingHeads'
				}, {
					description: "Go to the pond",
					shape: { type: "rectangle", topLeftCorner: {x: 700, y: 0}, bottomRightCorner: {x: 800, y: 600} },
					destinationScene: 'pond',
					destinationPosition: {x: 135, y: 374}
				}
			],
			images: [
				{
					id: 'simon-head',
					url: 'img/characters/simon-head.png',
					shape: { type: "rectangle", topLeftCorner: {x: 544, y: 401}, bottomRightCorner: {x: 580, y: 450} }
				},
				{
					id: 'exitIndicator',
					url: 'img/icons/right-arrow.png',
					shape: { type: "rectangle", topLeftCorner: {x: 722, y: 461}, bottomRightCorner: {x: 760, y: 493} }
				}
			]
		},
		'caveOfCassandra': {
			background: "cave-of-cassandra.jpg",
			hotspots: [ {
					id: "wall",
					shape: { type: "rectangle", topLeftCorner: {x: 0, y: 0}, bottomRightCorner: {x: 800, y: 160} },
					isSolid: true
				}, {
					description: "Exit to pond",
					shape: { type: "rectangle", topLeftCorner: {x: 82, y: 208}, bottomRightCorner: {x: 280, y: 344} },
					destinationScene: 'pond',
					destinationPosition: {x: 135, y: 374}
				}, {
					description: 'Talk to Cassandra',
					shape: { type: "rectangle", topLeftCorner: {x: 428, y: 221}, bottomRightCorner: {x: 545, y: 403} },
					positionToMovePlayerTo: {x: 300, y: 400},
					onHit: 'talkToCassandra',
					conversationToStart: 'talkToCassandra'
				}, {
					id: "fire",
					shape: { type: "rectangle", topLeftCorner: {x: 563, y: 230}, bottomRightCorner: {x: 797, y: 591} },
					isSolid: true
				}, {
					id: "tea",
					shape: { type: "rectangle", topLeftCorner: {x: 360, y: 274}, bottomRightCorner: {x: 419, y: 316} },
					isSolid: true
				}, {
					id: "table",
					shape: { type: "rectangle", topLeftCorner: {x: 316, y: 298}, bottomRightCorner: {x: 457, y: 412} },
					isSolid: true
				}, {
					id: "wall",
					shape: { type: "rectangle", topLeftCorner: {x: 5, y: 5}, bottomRightCorner: {x: 799, y: 326} },
					isSolid: true
				}
			]
		},
		'pharmacy': {
			background: "pharmacy.jpg",
			hotspots: [
				{
					description: "Talk to Medicine Man",
					shape: { type: "rectangle", topLeftCorner: {x: 385, y: 76}, bottomRightCorner: {x: 468, y: 306} },
					onHit: "onHittingMedicineMan"
				}, {
					description: "Leave",
					shape: { type: "rectangle", topLeftCorner: {x: 2, y: 3}, bottomRightCorner: {x: 117, y: 595} },
					destinationScene: 'pond',
					destinationPosition: {x: 751, y: 432}
				}
			],
			images: [
				{
					url: "img/characters/doctor.png",
					shape: { type: "rectangle", topLeftCorner: {x: 404, y: 85}, bottomRightCorner: {x: 479, y: 305} }
				}
			]
		},
		'sky': {
			onEnter: 'enterSky',
			background: "sky.jpg",
			hotspots: [
				{
					description: "Land",
					shape: { type: "rectangle", topLeftCorner: {x: 2, y: 3}, bottomRightCorner: {x: 117, y: 595} },
					destinationScene: 'beach',
					destinationPosition: {x: 751, y: 432}
				}
			]
		},
		'beach': {
			background: "beach.jpg",
			hotspots: [
				{
					description: "Talk to Thief Head",
					shape: { type: "rectangle", topLeftCorner: {x: 385, y: 76}, bottomRightCorner: {x: 468, y: 306} },
					conversationToStart: "talkToThiefHead"
				}, {
					description: "Leave",
					shape: { type: "rectangle", topLeftCorner: {x: 2, y: 3}, bottomRightCorner: {x: 117, y: 595} },
					destinationScene: 'pond',
					destinationPosition: {x: 751, y: 432}
				}
			],
			images: [
				{
					url: "img/characters/simon.png",
					shape: { type: "rectangle", topLeftCorner: {x: 404, y: 85}, bottomRightCorner: {x: 479, y: 305} }
				}
			]
		}
	};
	return scenes;
};
