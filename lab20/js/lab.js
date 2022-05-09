/*
 * Author: Elias Salas
 * Created: 07 April 2022
 * License: Public Domain
 */
 //borrowed code from class;
 // Pick an URL from the numbers API: http://numbersapi.com/
//var url = "http://numbersapi.com/random/trivia";
//var url = "https://cataas.com/cat?json=true";
//var domain = "https://cataas.com";
var url = "https://api.harvardartmuseums.org/object";
var apiKey = "f76bf3ec-0d1d-4a13-b4f6-4d91474a2001";

// When a user clicks the button
$("#button").click(getAjax);

// use a jQuery AJAX call to fetch output from the numbers API
function getAjax() {
  // Using the core $.ajax() method
  $.ajax({
      // The URL for the request
      url: url,
      // The data to send (will be converted to a query string)
      data: {
      	apikey: apiKey,
        q:"totalpageviews:0",
        size:1
      },
      // Whether this is a POST or GET request
      type: "GET",
      // The type of data we expect back
      // dataType : "json",
  })
  // If the request succeeds
  .done(function( data ) {
      //alert("Success!");
      console.log(data);
      // Grab the record from this data
      var thisRecord = data.records[0];
      // get the info we want
      var imgurl = thisRecord.images[0].baseimageurl;
      console.log("imageurl", imgurl)
      var title = thisRecord.title;
      var desc = thisRecord.description;
      // Insert the output in the output div
      // $("#output").html("<pre>" + JSON.stringify(data, null, "\t"));
      $("#output").html("<h2>" + title);
      $("#output").append("<img src=" + imgurl + ">");
      $("#output").append("<p>" + desc);
  })
  // If the request fails
  .fail(function( xhr, status, errorThrown ) {
      console.log(errorThrown + " Status:" + status );
  });
}
