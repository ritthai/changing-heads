/*
Copyright (c) 2013 Ritchie Thai

See the file license.txt for copying permission.
*/

adventure.getBuildModeManager = function () {
	var firstCoordinateIsRecorded = false;
	var firstCoordinate;

	var onClickWhenInBuildMode = function (coordinates) {
		if (firstCoordinateIsRecorded) {
			var secondCoordinate = coordinates;
			var x1 = firstCoordinate.x;
			var y1 = firstCoordinate.y;
			var x2 = secondCoordinate.x;
			var y2 = secondCoordinate.y;

			var output = ', {' + '\n' +
			'	description: "Examine",' + '\n' +
			'	shape: { type: "rectangle", topLeftCorner: {x: ' + x1 + ', y: ' + y1 + '}, ' +
				'bottomRightCorner: {x: ' + x2 + ', y: ' + y2 + '} }' + '\n' +
			'}' + '\n';

			console.log(output);

			firstCoordinateIsRecorded = false;
		} else {
			firstCoordinate = coordinates;
			firstCoordinateIsRecorded = true;
		}
	};

	return { onClickWhenInBuildMode: onClickWhenInBuildMode };
};
