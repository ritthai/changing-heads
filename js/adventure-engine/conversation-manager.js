/*
Copyright (c) 2013 Ritchie Thai

See the file license.txt for copying permission.
*/

// TODO: This is not decoupled from the HTML yet

adventure.getConversationManager = function (conversations, sceneFunctions) {

	var currentConversation = {};
	var isInConversation = false;

	var getIsInConversation = function () {
		return isInConversation;
	}
	
	var writeDialogLn = function (text) {
		$("#dialog").append(text + "<br />");
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

	var writeDialog = function (dialog) {
		if (!dialog) { return; }
		if (typeof dialog === 'string') {
			writeDialogLn(dialog);
		} else if (typeof dialog[0] === 'string') {
			writeAlternatingArrayDialog(dialog);
		}
	};

	var clearDialog = function () {
		$('#dialog').html('');
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
		if (option.dialog) { writeDialog(option.dialog); }
		currentConversation = conversations[option.next];
		proceedConversation();
	};
	
	var printOptionLink = function (option, description, i) {
		var link;
		var id = 'option-' + i;
		writeDialogLn('<a id="' + id + '">' + description + '</a>');
		link = document.getElementById(id);
		link.onclick = function (event) {
			event.preventDefault;
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
	};

	var proceedConversation = function (shouldPreventSound) {
		if (!shouldPreventSound) {
			(new buzz.sound( "audio/sounds/click", {
				formats: [ "wav" ]
			})).play();
		}
		var overridingDialog;
		if (currentConversation.onEnter) {
			overridingDialog = sceneFunctions[currentConversation.onEnter]();
		}
		if (typeof overrideDialog !== 'undefined') {
			writeDialog(overridingDialog);
		} else {
			writeDialog(currentConversation.dialog);
		}
		writeDialogLn('');
		showOptions();
	};

	var startConversation = function (conversationName) {
		isInConversation = true;
		currentConversation = conversations[conversationName];
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
