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
        }
    };
};
