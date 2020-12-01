const assertEqual = function(actual, expected) {
  if(actual === expected) {
    console.log(`\u2705Assertion passed : ${actual}  =  ${expected}`)
  } 
  else if(actual !== expected){
    console.log(`\u2716Assertion failed : ${actual} != ${expected}`)
  }
  return assertEqual;
  };
  

 const head=function(arr){
  
  return arr[0];
 }


 
 assertEqual( head([5,6,7]), 5 );
 assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");



  // TEST CODE
  assertEqual("Lighthouse Labs", "Bootcamp");
  assertEqual(1, 1);
  assertEqual("mom","mom");
  assertEqual("dad","Dad");
  assertEqual(22,22);
  assertEqual(22.2,22);