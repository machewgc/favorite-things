$(document).ready(function() {
  $("form#favorites").submit(function(event) {

    var favorites = ["favorite1","favorite2","favorite3"];

    favorites.forEach(function(favorite) {
      var userInput = $("input#" + favorite).val();
      $("." + favorite).text(userInput);
    });

    $("#favorite-list").show();

    event.preventDefault();
  });
});
