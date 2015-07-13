/*
Copyright (c) 2013 Ritchie Thai

See the file license.txt for copying permission.
*/

adventure.getConversationManager = function (conversations, sceneFunctions, util, conversationDisplayer, soundManager) {

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
        var overridingOptions = sceneFunctions[activeConversation.onEnter](activeConversation);
        if (overridingOptions) { overrideOptions(overridingOptions); }
    }

    var overrideOptions = function (overridingOptions) {
        var overridingConversation = util.clone(activeConversation);
        overridingConversation.options = overridingOptions;
        activeConversation = overridingConversation;
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
        var optionDescription = option.description;
        var description = optionDescription ? optionDescription : option.dialog[1];
        conversationDisplayer.printOptionLink(description, i, function () { chooseOption(option); });
    };

    var showAdvanceConversationLink = function () {
        conversationDisplayer.printProceedConversationLink('Next', function () {
            currentLine += 1;
            clearDialog();
            advanceConversation();
        });
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

    var setActiveConversation = function (conversation) {
        activeConversation = conversation;
        currentLine = 0;
    };

    var writeAlternatingArrayDialog = function (dialog) {
        var i;
        for (i = 0; i < dialog.length; i += 2) {
            if (i + 1 < dialog.length) {
                if (dialog[i] === '') {
                    writeDialogLn(dialog[i + 1]);
                } else {
                    writeDialogLn(dialog[i] + ': ' + dialog[i + 1]);
                }
            }
        }
    };

    var writeDialog = function (dialog, isOptionDialog) {
        if (!dialog) { return; }
        if (typeof dialog === 'string') {
            writeDialogLn(dialog);
        } else if (typeof dialog[0] === 'string') {
            if (isOptionDialog) {
                writeAlternatingArrayDialog(dialog);
            } else {
                var speaker = dialog[currentLine * 2];
                var speech = dialog[currentLine * 2 + 1];
                writeDialogLn((speaker ? speaker + ': ' : '') + speech);
            }
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

    var writeDialogLn = conversationDisplayer.writeDialogLn;
    var clearDialog = conversationDisplayer.clearDialog;

    return object;
};
