/*
Copyright (c) 2013 Ritchie Thai

See the file license.txt for copying permission.
*/

adventure.util = (function () {
	var clone = function (objectToClone) {
		return $.extend(true, {}, objectToClone);
	};

	return {
		clone: clone
	};
}());
