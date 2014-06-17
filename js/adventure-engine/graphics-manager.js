/*
Copyright (c) 2013 Ritchie Thai

See the file license.txt for copying permission.
*/

adventure.getGraphicsManager = function () {
    var object = {};

	object.removeScene = function () {
		$('#scene .scene-entity').remove();
	};

	object.setBackgroundImageOfScene = function (url) {
		$('#scene').css('background-image', 'url(' + url + ')');
	};

    object.addSceneImages = function (images) {
		var i, image;
		if (!images) { return; }
		for (i = 0; i < images.length; i++) {
			image = images[i];
			if (!image.hidden) {
				addSceneImage(images[i]);
			}
		}
	};

	var addSceneImage = function (image) {
		var id = 'scene-image_' + image.id;
		var x = image.shape.topLeftCorner.x;
		var y = image.shape.topLeftCorner.y;
		var width = image.shape.bottomRightCorner.x - x;
		var height = image.shape.bottomRightCorner.y - y;

		$('#scene').append('<div id="' + id + '" class="scene-entity scene-entity_image"></div>');
		var $sceneImage = $('#' + id);
		$sceneImage.css('background-image', 'url(' + image.url + ')').
			css('left', x + 'px').
			css('top', y + 'px');
		$sceneImage.width(width).
			height(height);
		if (image.isFlipped) {
			$sceneImage.addClass('is-flipped-horizontally');
		}
	};

    object.showActionDescription = function (description) {
		if (!description) {
			$("#action-description-box").hide();
			$('#screen').removeClass('is-clickable');
		} else {
			$("#action-description").html(description);
			$("#action-description-box").show();
			$('#screen').addClass('is-clickable');
		}
    };

	object.flipSceneImageById = function (id) {
		var htmlId = 'scene-image_' + id;
		$('#' + htmlId).addClass('is-flipped-horizontally');		
	};

	object.hideSceneImageById = function (id) {
		var htmlId = 'scene-image_' + id;
		$('#' + htmlId).hide();
	};

	object.movePlayer = function (destination, callback) {
		makePlayerFaceRightWayForMove(destination);
		animatePlayerMove(destination, callback);
	};

	var makePlayerFaceRightWayForMove = function (destination) {
        var player = $('#player');
		if (destination.x < player.position().left + player.width()/2) {
			facePlayerLeft();
		} else {
			facePlayerRight();
		}
	};

	var facePlayerLeft =
    object.facePlayerLeft = function () {
		$("#player").addClass('is-flipped-horizontally');
	};
    

	var facePlayerRight =
    object.facePlayerRight = function () {
		$("#player").removeClass('is-flipped-horizontally');
	};

	var animatePlayerMove = function (destination, callback) {
        var player = $('#player');
		var playerTopLeftPoint = playerGroundToTopLeftPoint(player, destination);
		player.animate({
				left: playerTopLeftPoint.x,
				top: playerTopLeftPoint.y
			}, callback);
	};

	object.putPlayerAt = function (destination) {
		var player = $("#player");
		var destinationOnPage = sceneToPageCoordinates(destination);
		var playerTopLeftPoint = playerGroundToTopLeftPoint(player, destinationOnPage);
		player.offset({
				left: playerTopLeftPoint.x,
				top: playerTopLeftPoint.y
		});
	};

	var playerGroundToTopLeftPoint = function (player, groundPoint) {
		var topLeftPoint = {
			x: groundPoint.x - player.width() / 2,
			y: groundPoint.y - player.height()
		};
		return topLeftPoint;
	};

	var sceneToPageCoordinates = function (coordinates) {
		var screen = $("#screen"),
			offset = screen.offset(),
			resultX = coordinates.x + offset.left,
			resultY = coordinates.y + offset.top;
		return {x: resultX, y: resultY};
	};

    return object;
};
