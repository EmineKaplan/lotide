const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) return false;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) return false;
  }
  return true;
};
const assertArraysEqual = function(array1, array2) {
  if (!eqArrays(array1, array2)) return console.log(`❌❌❌ Assertion Failed: ${array1} !== ${array2}`);
  return console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
};
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
 const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const takeUntil = function(array, callback) {
  var newArray = [];


  for(var i = 0; i < array.length; i++)
  {

      if(callback(array[i])){
          console.log(`${array[i]} is a falsey`);
        return newArray;  
      }


      newArray.push(array[i]);
  }



  return newArray;




}
const results1 = takeUntil(data1, x => x < 0);
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
console.log(results1);

assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);
