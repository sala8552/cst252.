/*
 * Author: Elias Salas <esalas@csumb.edu>
 * Created: 14 Feburay
 * License: Public Domain
 */

// Define Variables
myTransport = ["Chevey Colorado", "bike", "rides from friends",];

myMainRide = {
    make: "Chevy",
    model : "Colorado",
    color : "Dark Green",
    year : 2019,
    age : function() {
        return 2022 - this.year;
    }
}

// output
document.writeln("Kinds of transportion I use: ", myTransport, "</br>");
document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
document.writeln("The age of my ", myMainRide.model, " is ", myMainRide.age(), " years.");
