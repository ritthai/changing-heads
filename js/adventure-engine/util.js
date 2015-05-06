/*
Copyright (c) 2013 Ritchie Thai

See the file license.txt for copying permission.
*/

adventure.getUtil = function () {
	var clone = function (objectToClone) {
		return $.extend(true, {}, objectToClone);
	};

	var each = function (array, lambda) {
		var i, element;
		if (!array) { return; }
		for (i = 0; i < array.length; i++) {
			element = array[i];
			lambda(element);
		}
	};

	return {
		clone: clone,
		each: each
	};
};
