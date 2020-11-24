// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
if(actual === expected) {
  console.log(`\u2705Assertion passed : ${actual}  =  ${expected}`)
} 
else if(actual !== expected){
  console.log(`\u2716Assertion failed : ${actual} != ${expected}`)
}
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("mom","mom");
assertEqual("dad","Dad");
assertEqual(22,22);
assertEqual(22.2,22);
