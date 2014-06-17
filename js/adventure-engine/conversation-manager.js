/*
Copyright (c) 2013 Ritchie Thai

See the file license.txt for copying permission.
*/

adventure.getConversationManager = function (conversations, sceneFunctions, util, conversationDisplayer, soundManager) {

    var object = {};

	var isInConversation = false;
	var currentConversation = {};
	var currentLine = 0;
	var overridingDialog;
	var isEndingConversation = false;

	object.isInConversation = function () {
		return isInConversation;
	};

	object.startConversation = function (conversationName) {
		isInConversation = true;
		currentConversation = conversations[conversationName];
		resetVariablesForSubConverstion();
		clearDialog();
		conversationDisplayer.showDialogBox();
		conversationDisplayer.hideActionDescriptionBox();
		proceedConversation();
	};

	var proceedConversation = function (shouldPreventSound) {
		if (!shouldPreventSound) {
            soundManager.playClickSound();
		}
		if (currentLine === 0 && currentConversation.onEnter) {
			var overridingOptions = sceneFunctions[currentConversation.onEnter](currentConversation);
			if (overridingOptions) {
				var overridingConversation = util.clone(currentConversation);
				overridingConversation.options = overridingOptions;
				currentConversation = overridingConversation;
			}
		}
		writeDialog(currentConversation.dialog);
		writeDialogLn('');
		var dialog = currentConversation.dialog;
		if (typeof dialog !== 'string' && typeof dialog[0] === 'string') {
			if (currentLine + 1 === dialog.length / 2) {
				showOptions();
			} else {
				showProceedConversationLink();
			}
		} else {
			showOptions();
		}
	};

	var showOptions = function () {
		var options = currentConversation.options;
		if (!options) {
            options = [{"description": "Continue"}];
		}
		for (var i = 0; i < options.length; i++) {
			showOption(options[i], i);
		}
		conversationDisplayer.writeOptionLn(''); // TODO: This is hacky. Use actual styling instead of adding an empty option
	};

	var showOption = function (option, i) {
		var optionDescription = option.description;
		var description = optionDescription ?
				optionDescription : option.dialog[1];
        conversationDisplayer.printOptionLink(description, i, function () {
            chooseOption(option);
        });
	};

	var showProceedConversationLink = function () {
        conversationDisplayer.printProceedConversationLink('Next', function () {
			currentLine += 1;
			clearDialog();
			proceedConversation();
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
		currentConversation = conversations[option.next];
		resetVariablesForSubConverstion();
		proceedConversation();
	};

	var resetVariablesForSubConverstion = function () {
		currentLine = 0;
		overridingDialog = undefined;
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
		currentConversation = {};
		// NOTE: This is tricky. We cannot set isInConversation to false immediately,
		// because this gets evaluated before the click handler. If the click handler sees
		// that we are not in a conversation, the character will interact with the clicked
		// spot, even though the click was actually meant to end the conversation.
		conversationDisplayer.hideDialogBox(function () {
			isInConversation = false;
		});
	};

	var writeDialogLn = conversationDisplayer.writeDialogLn;
	var clearDialog = conversationDisplayer.clearDialog;

	return object;
};
