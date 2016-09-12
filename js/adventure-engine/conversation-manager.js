/*
Copyright (c) 2013 Ritchie Thai

See the file license.txt for copying permission.
*/

adventure.getConversationManager = function (conversations, sceneFunctions, util, conversationDisplayer, soundManager) {

    var writeDialogLn = conversationDisplayer.writeDialogLn;

    var object = {};

    var isInConversation = false;

    object.isInConversation = function () {
        return isInConversation;
    };

    object.startConversation = function (conversationKey) {
        var conversation = conversations[conversationKey];
        startConversation(conversation);
    };

    var startConversation = function (conversation) {
        isInConversation = true;
        advanceConversation(conversation, 0);
        conversationDisplayer.showDialogBox();
    };

    var advanceConversation = function (conversation, line) {
        if (line === 0 && conversation.onEnter) {
            conversation = applyConversationOnEnter(conversation);
        }
        showConversation(conversation, line);
    };

    var applyConversationOnEnter = function (conversation) {
        var onEnterResult = sceneFunctions[conversation.onEnter](conversation);
        var overrideOptions = onEnterResult ? onEnterResult.overrideOptions : null;
        return (overrideOptions ?
            applyOverrideOptions(conversation, overrideOptions) :
            conversation);
    }

    var applyOverrideOptions = function (conversation, overrideOptions) {
        var overrideConversation = util.clone(conversation);
        overrideConversation.options = overrideOptions;
        return overrideConversation;
    };

    var showConversation = function (conversation, line) {
        soundManager.playClickSound();
        conversationDisplayer.clearDialog();
        writeDialog(conversation.dialog, line);
        writeDialogLn('');
        showSpeechBubbleLinks(conversation, line);
    };

    var showSpeechBubbleLinks = function (conversation, line) {
        if (isLastLineOfDialog(conversation.dialog, line)) {
            showOptions(conversation.options);
        } else {
            showAdvanceConversationLink(conversation, line);
        }
    };

    var isLastLineOfDialog = function (dialog, line) {
        return line + 1 === dialog.length / 2;
    };

    var showOptions = function (options) {
        if (!options) { options = [{"description": "Continue"}]; }
        options.forEach(showOption);
        conversationDisplayer.writeOptionLn(''); // TODO: This is hacky. Use actual styling instead of adding an empty option
    };

    var showOption = function (option, i) {
        var description = option.description || option.dialog[1];
        conversationDisplayer.printOptionLink(description, i, function () { chooseOption(option); });
    };

    var chooseOption = function (option) {
        if (option.onEnter) { option.onEnter(); }
        if (!option.next) {
            endConversation();
            return;
        }
        var conversation = conversations[option.next];
        advanceConversation(conversation, 0);
    };

    var showAdvanceConversationLink = function (conversation, line) {
        conversationDisplayer.printProceedConversationLink('Next', function () {
            advanceConversation(conversation, line + 1);
        });
    };

    var writeDialog = function (dialog, line) {
        if (!dialog) { return; }
        if (typeof dialog === 'string') {
            writeDialogLn(dialog); // TODO: Remove this if it's not used
            return;
        }
        if (typeof dialog[0] !== 'string') { return; }
        writeAlternatingArrayDialogLine(dialog, line * 2);
    };

    var writeAlternatingArrayDialogLine = function (dialog, i) {
        var speaker = dialog[i];
        var speech = dialog[i + 1];
        if (speaker === '') {
            writeDialogLn(speech);
        } else {
            writeDialogLn(speaker + ': ' + speech);
        }
    };

    var endConversation = function () {
        // NOTE: This is tricky. We cannot end the conversation immediately,
        // because this gets evaluated before the click handler. If the click handler sees
        // that we are not in a conversation, the character will interact with the clicked
        // spot, even though the click was actually meant to end the conversation.
        conversationDisplayer.hideDialogBox(function () {
            isInConversation = false;
        });
    };

    return object;
};
