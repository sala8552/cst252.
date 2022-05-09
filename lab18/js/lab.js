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

// This is the class method
// class Vehicle {
//   constructor(make, model, year, color) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//     this.color = color;
//   }
//   info() {
//     return this.color + " " + this.year + " " + this.make + " " +  this.model;
//   }
// }

// Create car, bike and skateboard.
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


// Display the instructions line by line.
// Wait for the player to hit enter.
// Load a random word from a list of 1000 words.
// Initialize chances, strikes, game status, and more variables.
// Until the game is over, print the displayed word, incorrectly guessed letters, and the number of strikes.
// Prompt the user to guess either a letter or the word.
// If the input is invalid, reprompt for a new input until it is.
// If the player guessed a letter, check for the letter in the word.
// If the letter is in the word, replace the appropriate asterisks with the letter.
// Else: Lose a chance.
// Display the incorrectly guessed letter.
// Display an “x” as a strike.
// If the word is fully guessed, the game is over.
// Else-if the player guessed a word: if the guess is correct, the game is over.
// Else- lose a chance and display an “x” as a strike.
// If the player has 0 chances remaining: the game is over.
// If the word is guessed, display a victory message and the word.
// Else- display a loss message and the word.
// Wait for the player to hit enter.

// borrowed this pseudocode from: https://u.osu.edu/fe1181au17sec6709a/hangman-documentation/hangman-pseudo-code/
