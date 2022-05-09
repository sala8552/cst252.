/**
    * Author:  Elias Salas
    * Created: 04.05.2022
    * License: Public Domain
**/


 // borrowed code from class:
// Crestructor called "Vehicle" that takes "make" and "model" as parameters and stores this.
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

// Create car, bike and skateboard.
var car = new Vehicle("Chevy", "Colorodo", 2019, "green");
var bike = new Vehicle("Bike", "Polygon", 2015, "mint");
var rollerblades = new Vehicle("Rollerblades", "O1 Kraft Team", 2016, "black");

// Reference the talk() method for each of these
console.log("My Vehicles")
console.log(car.talk());
console.log(bike.talk());
console.log(rollerblades.talk());

$("#output").append("<p>" + car.talk() + "</p>");
$("#output").append("<p>" + bike.talk() + "</p>");
$("#output").append("<p>" + rollerblades.talk() + "</p>");
