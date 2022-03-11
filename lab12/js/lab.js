/*
 * Author: Elias Salas <esalas@csumb.edu>
 * Created: 11 March
 * License: Public Domain
 */


 // find red button and add click handler
 $("#red-button").click(function(){
 	// remove purple class
   $("#the-text").removeClass("purple");
 	// toggle red class for text
   $("#the-text").toggleClass("red");
 })


 // find purple button and add click handler
 $("#purple-button").click(function(){
 	// remove red class
   $("#the-text").removeClass("red");
 	// toggle purple class for text
   $("#the-text").toggleClass("purple");
 })
