//=> call(function borrowing) / Apply / Bind method.

let name = {
  firstname: "aditya",
  lastname: "shekhar",
};

let printDetails = function (hometown, state) {
  console.log(
    this.firstname + " " + this.lastname + " from " + hometown + "," + state
  );
};

printDetails.call(name, "India", "Delhi");
printDetails.apply(name,["India","Delhi"])

let name2 = {
  firstname: "John",
  lastname: "Doe",
};

printDetails.call(name2, "USA", "Newyork");
printDetails.apply(name,["USA","Newyork"])

//Bind
let printMyName = printDetails.bind(name2,"USA","Neywork")
console.log(printMyName);
printMyName() //Invoke later.
