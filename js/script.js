function jStaticLayout (image, description) {
	var cardContainer = $("<div>").addClass("col-md-3");
	var cardImages = $("<img>").attr("src", image);

	cardContainer.append(cardImages);

	return cardContainer;
}