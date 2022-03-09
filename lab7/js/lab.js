

/*
 * Author: Elias Salas <esalas@csumb.edu>
 * Created: 27 Feburay
 * License: Public Domain
 */

function numberFunction(x){
  var results = (x % 2 == 0)
return results:
}
// test function
console. log ("Is 1 an even number? ", numberFunction(1)):
console. log ("Is 2 an even number? ", numberFunction(1)):

array = [20, 500, 10000,2345, 4587, 67890]
console. log ("My array", array);

var result = array.map (numberFunction);

console. log ("Test evenness of array:", result):

var result = array.map(function(x){
    return x ** 0.5:
})

console. log ("Squareroot of the array:" result);
