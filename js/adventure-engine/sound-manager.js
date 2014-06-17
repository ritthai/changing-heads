/*
Copyright (c) 2013 Ritchie Thai

See the file license.txt for copying permission.
*/

adventure.makeSoundManager = function () {

    var object = {};

    var clickSound;

    var init = function () {
    	    clickSound = new buzz.sound('audio/sounds/click', { formats: ['wav'] });
    };

    object.playClickSound = function () {
        clickSound.play();
    };

    init();

    return object;
};
