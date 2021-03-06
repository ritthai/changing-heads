/*
Copyright (c) 2013 Ritchie Thai

See the file license.txt for copying permission.
*/

adventure.getScenes = function () {
    var scenes = {
        'teaShop': {
            controller: "TeaShopController",
            background: "tea-shop.jpg",
            onEnter: 'enterTeaShopAndSeeSimon',
            hotspots: [
                {
                    description: "Leave",
                    shape: { type: "rectangle", topLeftCorner: {x: 40, y: 57}, bottomRightCorner: {x: 189, y: 315} },
                    destinationScene: 'hub'
                }
                , {
                    id: 'talkToSimon',
                    description: "Talk to Simon",
                    shape: { type: "rectangle", topLeftCorner: {x: 549, y: 219}, bottomRightCorner: {x: 647, y: 445} },
                    positionToMovePlayerTo: {x: 473, y: 436},
                    conversationToStart: 'talkingToSimonInTeaShop',
                    onHit: 'onHittingSimon',
                    isSolid: true,
                    showCondition: 'simonIsHere'
                }, {
                    description: "Shop Owner",
                    shape: { type: "rectangle", topLeftCorner: {x: 404, y: 110}, bottomRightCorner: {x: 479, y: 330} },
                    conversationToStart: 'talkToShopOwner',
                    onHit: 'onHittingTeaShopOwner',
                    isSolid: true
                }

            ],
            images: [
                {
                    id: "simon",
                    url: "img/characters/simon.png",
                    shape: { type: "rectangle", topLeftCorner: {x: 570, y: 224}, bottomRightCorner: {x: 787, y: 433} },
                    showCondition: 'simonIsHere'
                }, {
                    url: "img/characters/tom.png",
                    shape: { type: "rectangle", topLeftCorner: {x: 404, y: 110}, bottomRightCorner: {x: 479, y: 330} }
                }
            ]
        },
        "hub": {
            background: "hub.jpg",
            playerPositionOnEnter: {x: -1000, y: 0},
            onEnter: "enterHub",
            hotspots: [
                {
                    description: "Go to the pond",
                    shape: { type: "rectangle", topLeftCorner: {x: 0, y: 0}, bottomRightCorner: {x: 398, y: 600} },
                    shouldStandStill: true,
                    destinationScene: 'pond',
                    destinationPosition: {x: 751, y: 432}
                }, {
                    description: "Go to the Tea Shop",
                    shape: { type: "rectangle", topLeftCorner: {x: 399, y: 257}, bottomRightCorner: {x: 800, y: 600} },
                    shouldStandStill: true,
                    destinationScene: 'teaShop',
                    destinationPosition: {x: 135, y: 374}
                }, {
                    description: "Go to the Medicine Shop",
                    shape: { type: "rectangle", topLeftCorner: {x: 399, y: 0}, bottomRightCorner: {x: 800, y: 257} },
                    shouldStandStill: true,
                    destinationScene: 'pharmacy',
                    destinationPosition: {x: 135, y: 574}
                }, {
                    description: "",
                    shape: { type: "rectangle", topLeftCorner: {x: 0, y: 0}, bottomRightCorner: {x: 800, y: 600} },
                    isSolid: true
                }
            ],
            images: [
                {
                    id: 'exitToPondIndicator',
                    url: 'img/icons/left-arrow.png',
                    shape: { type: "rectangle", topLeftCorner: {x: 23, y: 467}, bottomRightCorner: {x: 62, y: 508} }
                }
                , {
                    id: 'exitToTeaShopIndicator',
                    url: 'img/icons/right-arrow.png',
                    shape: { type: "rectangle", topLeftCorner: {x: 714, y: 501}, bottomRightCorner: {x: 750, y: 539} }
                }
                , {
                    id: 'exitToPharmacyIndicator',
                    url: 'img/icons/right-arrow.png',
                    shape: { type: "rectangle", topLeftCorner: {x: 714, y: 200}, bottomRightCorner: {x: 750, y: 240} }
                }
            ]
        },
        "pond": {
            controller: "PondController",
            background: "pond.jpg",
            playerPositionOnEnter: {x: 585, y: 286},
            onEnter: "playCassandraHum",
            hotspots: [
                {
                    description: "Go to The Changing Heads",
                    shape: { type: "rectangle", topLeftCorner: {x: 0, y: 300}, bottomRightCorner: {x: 100, y: 600} },
                    destinationScene: 'theChangingHeads',
                    destinationPosition: {x: 750, y: 400}
                }, {
                    description: "Salamander",
                    shape: { type: "rectangle", topLeftCorner: {x: 230, y: 200}, bottomRightCorner: {x: 600, y: 500} },
                    isSolid: true,
                    onHit: 'onHittingSalamander'
                }, {
                    description: "Enter Cassandra's Cave",
                    shape: { type: "rectangle", topLeftCorner: {x: 0, y: 0}, bottomRightCorner: {x: 350, y: 300} },
                    destinationScene: 'caveOfCassandra',
                    destinationPosition: {x: 135, y: 374},
                    onHit: 'onHittingCaveOfCassandra'
                }, {
                    id: "pond",
                    shape: { type: "rectangle", topLeftCorner: {x: 116, y: 5}, bottomRightCorner: {x: 797, y: 442} },
                    isSolid: true
                }, {
                    description: "Enter the town",
                    shape: { type: "rectangle", topLeftCorner: {x: 700, y: 0}, bottomRightCorner: {x: 800, y: 600} },
                    destinationScene: 'hub'
                }
            ],
            images: [
                {
                    id: 'exitToChangingHeadsIndicator',
                    url: 'img/icons/left-arrow.png',
                    shape: { type: "rectangle", topLeftCorner: {x: 23, y: 467}, bottomRightCorner: {x: 62, y: 508} }
                }, {
                    id: 'exitToTeaShopIndicator',
                    url: 'img/icons/right-arrow.png',
                    shape: { type: "rectangle", topLeftCorner: {x: 714, y: 501}, bottomRightCorner: {x: 750, y: 539} }
                }, {
                    id: 'cassandra',
                    url: 'img/characters/cassandra.png',
                    shape: { type: "rectangle", topLeftCorner: {x: 367, y: 311}, bottomRightCorner: {x: 419, y: 511} },
                    showCondition: "cassandraIsHere",
                    isFlipped: true
                }
            ]
        },
        "theChangingHeads": {
            background: "changing-heads.jpg",
            playerPositionOnEnter: {x: 415, y: 535},
            onEnter: "enterChangingHeads",
            hotspots: [
                {
                    id: "talkToSimon",
                    description: "Talk to Simon",
                    shape: { type: "rectangle", topLeftCorner: {x: 570, y: 224}, bottomRightCorner: {x: 787, y: 433} },
                    conversationToStart: 'examineNormalSizedHead',
                    onHit: 'onHittingNormalSizedHead'
                },
                {
                    id: "examineNormalSizedHead",
                    description: "Examine normal sized head",
                    shape: { type: "rectangle", topLeftCorner: {x: 526, y: 381}, bottomRightCorner: {x: 594, y: 450} },
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
                },
                {
                    id: "simon",
                    url: "img/characters/simon.png",
                    shape: { type: "rectangle", topLeftCorner: {x: 570, y: 224}, bottomRightCorner: {x: 787, y: 433} }
                }
            ]
        },
        'caveOfCassandra': {
            onEnter: "onEnteringCaveOfCassandra",
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
            onEnter: "onEnterPharmacy",
            background: "pharmacy.jpg",
            hotspots: [
                {
                    description: "Medicine Man",
                    shape: { type: "rectangle", topLeftCorner: {x: 385, y: 276}, bottomRightCorner: {x: 468, y: 506} },
                    onHit: "onHittingMedicineMan"
                }, {
                    description: "Leave",
                    shape: { type: "rectangle", topLeftCorner: {x: 2, y: 3}, bottomRightCorner: {x: 117, y: 595} },
                    destinationScene: 'hub'
                }
            ],
            images: [
                {
                    url: "img/characters/doctor.png",
                    shape: { type: "rectangle", topLeftCorner: {x: 404, y: 285}, bottomRightCorner: {x: 479, y: 505} }
                },
                {
                    id: 'exitIndicator',
                    url: 'img/icons/left-arrow.png',
                    shape: { type: "rectangle", topLeftCorner: {x: 23, y: 467}, bottomRightCorner: {x: 62, y: 508} }
                },
                {
                    id: 'tom',
                    url: 'img/characters/tom.png',
                    shape: { type: "rectangle", topLeftCorner: {x: 269, y: 287}, bottomRightCorner: {x: 344, y: 507} }
                }
            ]
        },
        'sky': {
            background: "sky.jpg",
            playerPositionOnEnter: {x: -1000, y: -1000},
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
            controller: "BeachController",
            background: "beach.jpg",
            playerPositionOnEnter: {x: 290, y: 300},
            hotspots: [
                {
                    description: "Talk to Thief Head",
                    shape: { type: "rectangle", topLeftCorner: {x: 385, y: 76}, bottomRightCorner: {x: 468, y: 306} },
                    onHit: "talkToThiefHead",
                    positionToMovePlayerTo: {x: 280, y: 312},
                    showCondition: "thiefIsHere"
                }, {
                    description: "Fly back to the pond",
                    shape: { type: "rectangle", topLeftCorner: {x: 0, y: 150}, bottomRightCorner: {x: 800, y: 600} },
                    destinationScene: 'pond',
                    destinationPosition: {x: 751, y: 432}
                }
            ],
            images: [
                {
                    url: "img/characters/thief-on-simon.png",
                    shape: { type: "rectangle", topLeftCorner: {x: 404, y: 85}, bottomRightCorner: {x: 479, y: 305} },
                    showCondition: "thiefIsHere"
                },
                {
                    id: 'exitToPondIndicator',
                    url: 'img/icons/left-arrow.png',
                    shape: { type: "rectangle", topLeftCorner: {x: 23, y: 467}, bottomRightCorner: {x: 62, y: 508} }
                },
                {
                    id: 'cassandra',
                    url: 'img/characters/cassandra.png',
                    shape: { type: "rectangle", topLeftCorner: {x: 216, y: 149}, bottomRightCorner: {x: 268, y: 349} },
                    showCondition: "cassandraIsHere"
                },
                {
                    id: 'fire',
                    url: 'img/scenery/beach-fire.png',
                    shape: { type: "rectangle", topLeftCorner: {x: 0, y: 400}, bottomRightCorner: {x: 600, y: 600} },
                    showCondition: "hasFire"
                }
            ]
        }
    };
    return scenes;
};
