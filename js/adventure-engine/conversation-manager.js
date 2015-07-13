/*
Copyright (c) 2013 Ritchie Thai

See the file license.txt for copying permission.
*/

adventure.getConversationManager = function (conversations, sceneFunctions, util, conversationDisplayer, soundManager) {

    var writeDialogLn = conversationDisplayer.writeDialogLn;
    var clearDialog = conversationDisplayer.clearDialog;

    var object = {};

    var activeConversation = null;
    var currentLine = 0;

    object.isInConversation = function () {
        return activeConversation != null;
    };

    object.startConversation = function (conversationKey) {
        setActiveConversation(conversations[conversationKey]);
        clearDialog();
        conversationDisplayer.showDialogBox();
        conversationDisplayer.hideActionDescriptionBox();
        advanceConversation();
    };

    var advanceConversation = function (shouldMute) {
        if (!shouldMute) { soundManager.playClickSound(); }
        if (currentLine === 0 && activeConversation.onEnter) { applyConversationOnEnter(); }
        var dialog = activeConversation.dialog;
        writeDialog(dialog);
        writeDialogLn('');
        showSpeechBubbleLinks(dialog);
    };

    var applyConversationOnEnter = function () {
        var overrideOptions = sceneFunctions[activeConversation.onEnter](activeConversation);
        if (overrideOptions) { applyOverrideOptions(overrideOptions); }
    }

    var applyOverrideOptions = function (overrideOptions) {
        var overrideConversation = util.clone(activeConversation);
        overrideConversation.options = overrideOptions;
        activeConversation = overrideConversation;
    };

    var showSpeechBubbleLinks = function (dialog) {
        if (isOnLastLineOfDialog(dialog)) {
            showOptions();
        } else {
            showAdvanceConversationLink();
        }
    };

    var isOnLastLineOfDialog = function (dialog) {
        return !dialogHasMultipleLines(dialog) || currentLine + 1 === dialog.length / 2;
    };

    var dialogHasMultipleLines = function (dialog) {
        return typeof dialog !== 'string' && typeof dialog[0] === 'string';
    };

    var showOptions = function () {
        var options = activeConversation.options;
        if (!options) { options = [{"description": "Continue"}]; }
        options.forEach(showOption);
        conversationDisplayer.writeOptionLn(''); // TODO: This is hacky. Use actual styling instead of adding an empty option
    };

    var showOption = function (option, i) {
        var description = option.description || option.dialog[1];
        conversationDisplayer.printOptionLink(description, i, function () { chooseOption(option); });
    };

    var chooseOption = function (option) {
        clearDialog();
        if (option.onEnter) { option.onEnter(); }
        if (!option.next) {
            endConversation();
            return;
        }
        if (option.dialog) { writeDialog(option.dialog, true); }
        setActiveConversation(conversations[option.next]);
        advanceConversation();
    };

    var showAdvanceConversationLink = function () {
        conversationDisplayer.printProceedConversationLink('Next', function () {
            currentLine += 1;
            clearDialog();
            advanceConversation();
        });
    };

    var setActiveConversation = function (conversation) {
        activeConversation = conversation;
        currentLine = 0;
    };

    var writeDialog = function (dialog, isOptionDialog) {
        if (!dialog) { return; }
        if (typeof dialog === 'string') {
            writeDialogLn(dialog); // TODO: Remove this if it's not used
            return;
        }
        if (typeof dialog[0] !== 'string') { return; }
        if (isOptionDialog) {
            // TODO: Is option dialog even used? This complicates things. Consider changing it.
            for (var i = 0; i + 1 < dialog.length; i += 2) {
                writeAlternatingArrayDialogLine(dialog, i);
            }
        } else {
            writeAlternatingArrayDialogLine(dialog, currentLine * 2);
        }
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
            activeConversation = null;
        });
    };

    return object;
};
