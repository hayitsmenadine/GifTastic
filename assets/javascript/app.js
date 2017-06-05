
var topics = ["Cinderella", "Snow White", "Belle", "Jasmine", "Elsa", "Sleeping Beauty", "Ariel", "Mulan"];

function displayPrincessInfo() {

	var princess = $(this).attr("data-name");
	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        princess + "&r=json&api_key=dc6zaTOxFJmzC&limit=10";

	$.ajax({
		url: queryURL,
		method: "GET"
	}).done(function(response) {

		var results = response.data;

		for (var i =0; i<results.length; i++) {
		
		var prinDiv = $("<div class='princess'>");

		var rating = results[i].rating;

		var pOne = $("<p>").text("Rating: " + rating);

		prinDiv.append(pOne);

		var image = $("<img>").attr("src", results[i].images.fixed_width.url);

		prinDiv.append(image);

		$("#princess-view").prepend(prinDiv);
	}
	});

}

function renderButtons() {

	$("#buttons-view").empty();

	for (var j = 0; j<topics.length; j++) {

		var a = $("<button>");

		a.addClass("princess");

		a.attr("data-name", topics[j]);

		a.text(topics[j]);

		$("#buttons-view").append(a);
	}
}

$("#add-princess").on("click", function(event) {
	event.preventDefault();

	var princess = $("#princess-input").val().trim();

	topics.push(princess);

	renderButtons();

});

$(document).on("click", ".princess", displayPrincessInfo);

renderButtons();


















