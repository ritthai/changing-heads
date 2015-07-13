/*
Copyright (c) 2013 Ritchie Thai

See the file license.txt for copying permission.
*/

adventure.getConversationDisplayer = (function () {
    var $ = jQuery;

    var prototype = {};

    prototype.printOptionLink = function (description, i, handler) {
        printOptionLinkWithId(description, 'option-' + i, handler);
    };

    prototype.printProceedConversationLink = function (description, handler) {
        printOptionLinkWithId(description, 'proceed-conversation-link', handler);
    };

    var printOptionLinkWithId = function (description, id, handler) {
        writeOptionLn('<a id="' + id + '">' + description + '</a>');
        document.getElementById(id).onclick = function (event) {
            event.preventDefault();
            handler();
        };
    };

    prototype.writeDialogLn = function (text) {
        $("#dialog").append(text + "<br />");
    };

    var writeOptionLn = prototype.writeOptionLn = function (text) {
        $("#options").append(text + "<br />");
    };

    prototype.clearDialog = function () {
        $('#dialog').html('');
        $("#options").html('');
    };

    prototype.showDialogBox = function () {
        $("#dialog-box").show();
    };

    prototype.hideDialogBox = function (callback) {
        $('#dialog-box').fadeOut(callback);
    };

    prototype.hideActionDescriptionBox = function () {
        $("#action-description-box").hide();
    };

    return function () {
        var F = function () {};
        F.prototype = prototype;
        return new F();
    };
}());
