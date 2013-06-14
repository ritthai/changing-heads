/*
Copyright (c) 2013 Ritchie Thai

See the file license.txt for copying permission.
*/

adventure.getConversationManager = function () {

	var currentConversation = {};
	adventure.isInConversation = false;

	var clearDialog = function () {
		$("#dialog").html("");
	};
	
	var writeDialogLn = function (text) {
		$("#dialog").append(text + "<br />");
	};

	var chooseOption = function (option) {
		clearDialog();
		if (typeof option.onEnter !== "undefined") option.onEnter();
		if (option.dialog) {
			if (typeof option.dialog[0] === 'string') {
				var i;
				for (i = 0; i < option.dialog.length; i += 2) {
					if (i + 1 < option.dialog.length) {
						writeDialogLn(option.dialog[i] + ': ' + option.dialog[i + 1]);
					}
				}
			} else {
				writeDialogLn(option.dialog[0][0] + ": " + option.dialog[0][1]);
			}
		}
		if (option.next === "end") {
			endConversation();
			return;
		}
		currentConversation = adventure.conversations[option.next];
		proceedConversation();
	};

	var writeDialog = function (dialog) {
		if (dialog) {
			if (typeof dialog === 'string') {
				writeDialogLn(dialog);
			} else if (typeof dialog[0] === 'string') {
				var i;
				for (i = 0; i < dialog.length; i += 2) {
					if (i + 1 < dialog.length) {
						writeDialogLn(dialog[i] + ': ' + dialog[i + 1]);
					}
				}
			} else {
				writeDialogLn(option.dialog[0][0] + ": " + option.dialog[0][1]);
				// TODO: Remove this dialog format if it's not being used.
				// Otherwise, finish coding it.
			}
		}
	};
	
	var endConversation = function () {
		$("#dialog-box").fadeOut();
		currentConversation = {};
		setTimeout(function () { adventure.isInConversation = false; }, 100);
	};
	
	var proceedConversation = function () {
		var i, overridingDialog;
		if (typeof currentConversation.onEnter !== "undefined") {
			overridingDialog = currentConversation.onEnter();
		}
		if (typeof overrideDialog !== "undefined" && overrideDialog !== null) {
			writeDialogLn(overridingDialog);
		} else {
			writeDialogLn(currentConversation.dialog);
		}
		writeDialogLn("");

		var options = currentConversation.options;
		for (i = 0; i < options.length; i++) {
			var option = options[i];
			var optionDescription = option.description;
			var description = (typeof optionDescription === "undefined"
					|| optionDescription === null
					|| optionDescription === "")
				? option.dialog[0][1] : optionDescription;
			writeDialogLn('<a href="javascript:void(0);" id="option-' + i + '">' + description + '</a>');
			var link = document.getElementById('option-' + i);
			(function () {
				var option = options[i];
				link.onclick = function () {
					chooseOption(option);
				};
			}());
		}
	};

	var startConversation = function (conversationName) {
		adventure.isInConversation = true;
		currentConversation = adventure.conversations[conversationName];
		clearDialog();
		$("#dialog-box").show();
		$("#action-description-box").hide();
		proceedConversation();
	};

	return { startConversation: startConversation }
};
