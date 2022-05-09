/*
 * Author: Elias Salas
 * Created: 07 April 2022
 * License: Public Domain
 */

 // borrowed code from class:
// Create a object constructor called "Vehicle" that takes "make" and "model" as parameters and stores this.
// This is the prototyping method
function Vehicle(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    // Add a method talk()
    this.talk = function(){
        // brings up an appropriate alert box
        return (this.make + " " + this.model);
    }
}


var car = new Vehicle("Chevy", "Colorodo", 2019, "black");
var bike = new Vehicle("Bike", "Polygon", 2018, "blue");
var rollerblades = new Vehicle("rollerblades", "O1 Kraft Team", 2017, "black");

// Reference the talk() method for each of these
console.log("My Vehicles")
console.log(car.talk());
console.log(bike.talk());
console.log(rollerblades.talk());

$("#output").append("<p>" + car.talk() + "</p>");
$("#output").append("<p>" + bike.talk() + "</p>");
$("#output").append("<p>" + rollerblades.talk() + "</p>");


  
