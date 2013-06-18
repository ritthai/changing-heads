/*
Copyright (c) 2013 Ritchie Thai

See the file license.txt for copying permission.
*/

// TODO: This is not decoupled from the HTML yet

adventure.getConversationManager = function (conversations, sceneFunctions) {

	var isInConversation = false;
	var currentConversation = {};
	var currentLine = 0;
	var overridingDialog;

	var getIsInConversation = function () {
		return isInConversation;
	}
	
	var writeDialogLn = function (text) {
		$("#dialog").append(text + "<br />");
	};

	var writeOptionLn = function (text) {
		$("#options").append(text + "<br />");
	};

	var writeAlternatingArrayDialog = function (dialog) {
		var i;
		for (i = 0; i < dialog.length; i += 2) {
			if (i + 1 < dialog.length) {
				if (dialog[i] === '') {
					writeDialogLn(dialog[i + 1])
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
				writeDialogLn(dialog[currentLine * 2] + ': ' + dialog[currentLine * 2 + 1]);
			}
		}
	};

	var clearDialog = function () {
		$('#dialog').html('');
		$("#options").html('');
	};

	var endConversation = function () {
		$('#dialog-box').fadeOut();
		currentConversation = {};
		// TODO: This is kind of a hack. Should fix it.
		setTimeout(function () { isInConversation = false; }, 100);
	};

	var chooseOption = function (option) {
		clearDialog();
		if (option.onEnter) { option.onEnter(); }
		if (option.next === "end") {
			endConversation();
			return;
		}
		if (option.dialog) { writeDialog(option.dialog, true); }
		currentConversation = conversations[option.next];
		resetVariablesForPartialConverstion();
		proceedConversation();
	};
	
	var showProceedConversationLink = function () {
		var link;
		var id = 'proceed-conversation-link';
		var description = 'Next';
		writeOptionLn('<a id="' + id + '">' + description + '</a>');
		link = document.getElementById(id);
		link.onclick = function (event) {
			event.preventDefault();
			currentLine += 1;
			clearDialog();
			proceedConversation();
		};
	};

	var printOptionLink = function (option, description, i) {
		var link;
		var id = 'option-' + i;
		writeOptionLn('<a id="' + id + '">' + description + '</a>');
		link = document.getElementById(id);
		link.onclick = function (event) {
			event.preventDefault();
			chooseOption(option);
		};
	};

	var showOption = function (option, i) {
		var optionDescription = option.description;
		var description = optionDescription ?
				optionDescription : option.dialog[1];
		printOptionLink(option, description, i);
	};

	var showOptions = function () {
		var options = currentConversation.options,
			i;
		for (i = 0; i < options.length; i++) {
			showOption(options[i], i);
		}
		writeOptionLn('');
	};

	var proceedConversation = function (shouldPreventSound) {
		if (!shouldPreventSound) {
			(new buzz.sound( "audio/sounds/click", {
				formats: [ "wav" ]
			})).play();
		}
		if (currentLine === 0 && currentConversation.onEnter) {
			overridingDialog = sceneFunctions[currentConversation.onEnter]();
		}
		if (typeof overridingDialog !== 'undefined') {
			writeDialog(overridingDialog);
		} else {
			writeDialog(currentConversation.dialog);
		}
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

	// TODO: Conversation is an overloaded term.
	// It's being used to refer to every line from when the dialog box
	// appears to when it diappears, but it also refers to only
	// the lines since the last dialog choice.
	// Using the term "partial conversation" is evidence that
	// this needs to be clarified.
	// This is also a very poorly named method.
	// This whole area needs a refactor, soon.
	var resetVariablesForPartialConverstion = function () {
		currentLine = 0;
		overridingDialog = undefined;
	};

	var startConversation = function (conversationName) {
		isInConversation = true;
		currentConversation = conversations[conversationName];
		resetVariablesForPartialConverstion();
		clearDialog();
		$("#dialog-box").show();
		$("#action-description-box").hide();
		proceedConversation();
	};

	return {
		startConversation: startConversation,
		isInConversation: getIsInConversation
	}
};
