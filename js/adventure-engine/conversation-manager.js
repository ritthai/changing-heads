/*
Copyright (c) 2013 Ritchie Thai

See the file license.txt for copying permission.
*/

adventure.getConversationManager = function (conversations, sceneFunctions, util) {
	var isInConversation = false;
	var currentConversation = {};
	var currentLine = 0;
	var overridingDialog;
	var isEndingConversation = false;

	var getIsInConversation = function () {
		return isInConversation;
	};

	var startConversation = function (conversationName) {
		isInConversation = true;
		currentConversation = conversations[conversationName];
		resetVariablesForSubConverstion();
		clearDialog();
		showDialogBox();
		hideActionDescriptionBox();
		proceedConversation();
	};

	var proceedConversation = function (shouldPreventSound) {
		if (!shouldPreventSound) {
            playClickSound();
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
		writeOptionLn(''); // TODO: This is hacky. Use actual styling instead of adding an empty option
	};

	var showOption = function (option, i) {
		var optionDescription = option.description;
		var description = optionDescription ?
				optionDescription : option.dialog[1];
        printOptionLink(description, i, function () {
            chooseOption(option);
        });
	};

	var showProceedConversationLink = function () {
        printProceedConversationLink('Next', function () {
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
		hideDialogBox(function () {
			isInConversation = false;
		});
	};


    // TODO: Stuff to move into a sound  manager

    var playClickSound = function () {
        clickSound.play();
    };

	var clickSound = (new buzz.sound( "audio/sounds/click", {
				formats: [ "wav" ]
			}));


    // TODO: Stuff to move into a conversation UI manager

	var $ = jQuery;

    var printOptionLink = function (description, i, handler) {
        printOptionLinkWithId(description, 'option-' + i, handler);
    };

    var printProceedConversationLink = function (description, handler) {
        printOptionLinkWithId(description, 'proceed-conversation-link', handler);
    };

    printOptionLinkWithId = function (description, id, handler) {
		writeOptionLn('<a id="' + id + '">' + description + '</a>');
		document.getElementById(id).onclick = function (event) {
			event.preventDefault();
            handler();
		};
    };
	
	var writeDialogLn = function (text) {
		$("#dialog").append(text + "<br />");
	};

	var writeOptionLn = function (text) {
		$("#options").append(text + "<br />");
	};

	var clearDialog = function () {
		$('#dialog').html('');
		$("#options").html('');
	};

    var showDialogBox = function () {
		$("#dialog-box").show();
    };

    var hideDialogBox = function (callback) {
		$('#dialog-box').fadeOut(callback);
    };

    var hideActionDescriptionBox = function () {
		$("#action-description-box").hide();
    };

	return {
		startConversation: startConversation,
		isInConversation: getIsInConversation
	};
};
