/*
Copyright (c) 2013 Ritchie Thai

See the file license.txt for copying permission.
*/
adventure.getSounds = function() {
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
            "formats": []
        },
        "mask": {
            "path": "audio/music/bass-mal",
            "formats": ["ogg", "wav"]
        },
        "map": {
            "path": "audio/music/map",
            "formats": ["ogg", "wav"]
        },
        "sky": {
            "path": "audio/music/sky",
            "formats": ["ogg", "wav"]
        },
        "beach": {
            "path": "audio/music/closer-in-time",
            "formats": ["ogg", "mp3"]
        }
    };
};
