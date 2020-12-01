/*This means two important things:

Functions can be stored in variables and passed around
Functions can do everything that other objects can do (like having properties assigned to them)
Check this out:*/

const myFn = function() {
  console.log("I am function.");
}

myFn.someAttribute = 42;
console.log(myFn.someAttribute);

function runner(f) {
  f();
}

runner(myFn);
/*So what is going on, and why is it special?

We assign a function to our variable myFn
An attribute someAttribute is assigned to that function object
A runner function is defined that runs the argument f that we pass it
We pass a reference to our myFn, which gets invoked by the runner function*/
