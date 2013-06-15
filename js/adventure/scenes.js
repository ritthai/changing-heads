/*
Copyright (c) 2013 Ritchie Thai

See the file license.txt for copying permission.
*/

adventure.getScenes = function () {
	var scenes = {
		"theChangingHeads": {
			background: "changing-heads.jpg",
			playerPositionOnEnter: {x: 415, y: 535},
			onEnter: "enterChangingHeads",
			hotspots: [ 
				{
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
					isSolid: true
				}, {
					description: "Enter Cassandra's Cave",
					shape: { type: "rectangle", topLeftCorner: {x: 0, y: 0}, bottomRightCorner: {x: 350, y: 199} },
					destinationScene: 'caveOfCassandra',
					destinationPosition: {x: 135, y: 374}
				}, {
					description: "Pond",
					shape: { type: "rectangle", topLeftCorner: {x: 116, y: 5}, bottomRightCorner: {x: 797, y: 442} },
					isSolid: true
				}, {
					description: "Go to the Tea Shop",
					shape: { type: "rectangle", topLeftCorner: {x: 700, y: 0}, bottomRightCorner: {x: 800, y: 600} },
					destinationScene: 'teaShop',
					destinationPosition: {x: 135, y: 374}
				}
			],
		},
		'caveOfCassandra': {
			background: "cave-of-cassandra.jpg",
			hotspots: [ {
					description: "Wall",
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
					conversationToStart: 'talkToCassandra'
				}, {
					description: "Fire",
					shape: { type: "rectangle", topLeftCorner: {x: 563, y: 230}, bottomRightCorner: {x: 797, y: 591} },
					isSolid: true
				}, {
					description: "Tea",
					shape: { type: "rectangle", topLeftCorner: {x: 360, y: 274}, bottomRightCorner: {x: 419, y: 316} },
					isSolid: true
				}, {
					description: "Table",
					shape: { type: "rectangle", topLeftCorner: {x: 316, y: 298}, bottomRightCorner: {x: 457, y: 412} },
					isSolid: true
				}, {
					description: "Wall",
					shape: { type: "rectangle", topLeftCorner: {x: 5, y: 5}, bottomRightCorner: {x: 799, y: 326} },
					isSolid: true
				}
			]
		},
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
					description: "Tea shop owner",
					shape: { type: "rectangle", topLeftCorner: {x: 419, y: 122}, bottomRightCorner: {x: 519, y: 224} },
					isSolid: true
				}
				, {
					description: "Talk to Simon",
					shape: { type: "rectangle", topLeftCorner: {x: 570, y: 224}, bottomRightCorner: {x: 787, y: 433} },
					positionToMovePlayerTo: {x: 541, y: 398},
					conversationToStart: 'talkingToSimonInTeaShop',
					isSolid: true
				}
			],
			images: [
				{
					id: "simon",
					url: "img/characters/simon.png",
					shape: { type: "rectangle", topLeftCorner: {x: 570, y: 224}, bottomRightCorner: {x: 787, y: 433} }
				}
			]
		}
	};
	return scenes;
};
