/*
Copyright (c) 2013 Ritchie Thai

See the file license.txt for copying permission.
*/

adventure.getSounds = function () {
    return {
        "click": {
            "path": "audio/sounds/click",
            "formats": ["wav"]
        },
        "cassandraIntroMusic": {
            "path": "audio/music/cassandras-intro",
            "formats": ["ogg", "mp3"]
        },
        "startMusic": {
            "path": "audio/music/starting-the-brew-short",
            "formats": ["ogg", "mp3"],
            "shouldFadeIn": true
        },
        "introNarration": {
            "path": "audio/speech/intro-speech",
            "formats": ["ogg", "wav"]
        },
		"giantHeadsHum": {
            "path": "audio/music/giant-heads-hum",
            "formats": ["ogg", "wav"]
		},
		"cassandraHum": {
            "path": "audio/music/cassandra-hum",
            "formats": ["ogg", "wav"]
		},
		"salamander": {
			"path": "audio/music/salamander",
			"formats": ["ogg", "wav"]
		},
		"mask": {
			"path": "audio/music/why-the-mask",
			"formats": ["ogg", "wav"]
		}
    };
};
