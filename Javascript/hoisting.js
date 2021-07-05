//Hoisting


catName("Chloe");

function catName(name) {
  console.log(`My cat's name is ${name}`);
}




//Only declarartion are hoisted
//console.log(num); 
// Returns undefined, as only declaration was hoisted, no initialization has happened at this stage
var num; // Declaration
num = 6; // Initialization
