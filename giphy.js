  $(document).ready(function() {
  var players = ["Mohamed Salah", "Zlatan", "Ronaldo","Messi","Ronaldinho"];

  function displayPlayers() {
      var gif = $(this).attr("data-name");
      var queryURL = "https://api.giphy.com/v1/gifs/search?q= " + gif + "&api_key=riFcpySJBkJmW8iczsascuMVH9GjPM1W&limit=10";


      $.ajax({
          url: queryURL,
          method: 'GET'
      }).done(function(response) {

          var results = response.data;

          for (var i = 0; i < results.length; i++) {

              var gifDiv = $("<div>");

              var image = $("<img class='gif'>");

              image.attr("src", results[i].images.fixed_width_still.url);

              image.attr("data-animate", results[i].images.fixed_width.url);

              image.attr("data-still", results[i].images.fixed_width_still.url);

              image.attr("data-state", "still");

              image.append(image);

              $("#gif-view").prepend(image);

          }

          $(".gif").on("click", function() {

              var state = $(this).attr("data-state");

              if (state === "still") {
                  $(this).attr("src", $(this).attr("data-animate"));
                  $(this).attr("data-state", "data-animate");
              } else {
                  $(this).attr("src", $(this).attr("data-still"));
                  $(this).attr("data-state", "still");
              }
          });

      });
  }

  function renderButtons() {

      $("#buttons-view").empty();

      for (var i = 0; i < players.length; i++) {

          var a = $("<button type='button' class='btn btn-primary'>");

          a.addClass("gif-button");

          a.attr("data-name", players[i]);

          a.text(players[i]);

          $("#buttons-view").append(a);
      }
  }


  $("#add-gif").on("click", function(event) {

      event.preventDefault();

      var gif = $("#gif-input").val().trim();

      players.push(gif);

      renderButtons();
  });

  $(document).on("click", ".gif-button", displayPlayers);

  renderButtons();

  });