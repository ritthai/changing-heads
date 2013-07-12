/*
Copyright (c) 2013 Ritchie Thai

See the file license.txt for copying permission.
*/

adventure.util = (function () {
	var setBackgroundImageOfJqueryElement = function ($element, url) {
		$element.css('background-image', 'url(' + url + ')');
	};

	var clone = function (objectToClone) {
		return $.extend(true, {}, objectToClone);
	};

	return {
		setBackgroundImageOfJqueryElement: setBackgroundImageOfJqueryElement,
		clone: clone
	};
}());
