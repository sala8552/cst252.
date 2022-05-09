/*
 * Author: Elias Salas
 * Created: 07 April 2022
 * License: Public Domain
 */

 // Pick an URL from the numbers API: http://numbersapi.com/
//var url = "http://numbersapi.com/random/trivia";
var url = "https://cataas.com/cat?json=true";
var domain = "https://cataas.com";

// When a user clicks the button
$("#activate").click(getAjax);

// use a jQuery AJAX call to fetch output from the numbers API
function getAjax() {
  // Using the core $.ajax() method
  $.ajax({
      // The URL for the request
      url: url,
      // The data to send (will be converted to a query string)
      // data: { id: 123},
      // Whether this is a POST or GET request
      type: "GET",
      // The type of data we expect back
      // dataType : "json",
  })
  // If the request succeeds
  .done(function( data ) {
      //alert("Success!");
      console.log(data);
      fullUrl = domain + data.url;
      // Insert the output in the output div
      $("#output").html("<img src=" + fullUrl + ">");
  })
  // If the request fails
  .fail(function( xhr, status, errorThrown ) {
      console.log(errorThrown + " Status:" + status );
  });
}
