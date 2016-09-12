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
        showConversation(conversation, line, advanceConversation, chooseOption);
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

    var chooseOption = function (option) {
        if (option.onEnter) { option.onEnter(); }
        if (!option.next) {
            endConversation();
            return;
        }
        var conversation = conversations[option.next];
        advanceConversation(conversation, 0);
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

    // TODO: Split this out into another module
    // Everything below here is display code

    var showConversation = function (conversation, line, advanceConversation, chooseOption) {
        soundManager.playClickSound();
        conversationDisplayer.clearDialog();
        if (conversation.dialog) {
            writeDialog(conversation.dialog, line);
        }
        if (isLastLineOfDialog(conversation.dialog, line)) {
            showOptions(conversation.options, chooseOption);
        } else {
            showAdvanceConversationLink(conversation, line, advanceConversation);
        }
    };

    var isLastLineOfDialog = function (dialog, line) {
        return line + 1 === dialog.length / 2;
    };

    var showOptions = function (options, chooseOption) {
        if (!options) { options = [{"description": "Continue"}]; }
        options.forEach(function (x, i) {
            showOption(x, i, chooseOption);
        });
        conversationDisplayer.writeOptionLn(''); // TODO: This is hacky. Use actual styling instead of adding an empty option
    };

    var showOption = function (option, i, chooseOption) {
        var description = option.description || option.dialog[1];
        conversationDisplayer.printOptionLink(description, i, function () { chooseOption(option); });
    };

    var showAdvanceConversationLink = function (conversation, line, advanceConversation) {
        conversationDisplayer.printProceedConversationLink('Next', function () {
            advanceConversation(conversation, line + 1);
        });
    };

    var writeDialog = function (dialog, line) {
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

    return object;
};
