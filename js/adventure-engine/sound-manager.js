/*
Copyright (c) 2013 Ritchie Thai

See the file license.txt for copying permission.
*/

adventure.makeSoundManager = function () {
    var object = {};

    var sounds = {};

    object.addSounds = function (_sounds) {
        for (var x in _sounds) {
            if (_sounds.hasOwnProperty(x)) {
                var id = x;
                var sound = _sounds[id];
                addSound(x, sound.path, sound.formats, sound.shouldFadeIn);
            }
        }
    };

    var addSound = function (id, path, formats, shouldFadeIn) {
        var sound = new buzz.sound(path, { formats: formats });
        if (shouldFadeIn) { sound.shouldFadeIn = true; }
        sounds[id] = sound;
    };

    object.playClickSound = function () {
        playSound('click');
    };

    var playSound = 
    object.playSound = function (id) {
        var sound = sounds[id];
        if (sound.shouldFadeIn) {
            sound.play().fadeIn();
        } else {
            sound.play();
        }
    };

    return object;
};
