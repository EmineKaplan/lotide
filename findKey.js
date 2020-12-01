const assertEqual = function(actual, expected) {
  if(actual === expected) {
    console.log(`\u2705Assertion passed : ${actual}  =  ${expected}`)
  } 
  else if(actual !== expected){
    console.log(`\u2716Assertion failed : ${actual} != ${expected}`)
  }
  return assertEqual;
  };
  
// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("mom","mom");
assertEqual("dad","Dad");
assertEqual(22,22);
assertEqual(22.2,22);
const findKey = function(object, callback) {
  for (let key in object) {
    if (callback(object[key])) {
      return key;
    }
  } //returns undefined (implicitly) if key not found 
};

console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)); // => "noma")

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "noma");

