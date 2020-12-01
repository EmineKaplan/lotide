// TEST/ASSERTION FUNCTIONS
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length){
    return false;
  }
for (let i = 0; i< arr1.length; i++) {
  if (arr1[i] !== arr2[i]){
    return false;
  }
}
  return true;
}

const assertAssertEqual = function(arr1,arr2){
const result = eqArrays(arr1,arr2);
 if(!result){
   console.log("Oh! Sorry! There was an issue  with the array which you altered" )
 }
 else{
   console.log("Conguratulation! The orginal Array Remains Us")
 }
}

console.log(assertAssertEqual( [2,5,4,7,9], [2,5,4,7,9] ) );

// ACTUAL FUNCTION
const middle = function(arr){

  let middleArr = []; 

  
    if(arr.length === 1 || arr.length === 2){
      return middleArr;
    }else if(arr.length % 2 == 0){
      var evenMid = arr.length / 2;
      return arr.slice((arr.length / 2)+1(arr.length / 2)-1,)
    }else{
      return arr.slice(arr.length/2,(arr.length/2)+1);
    }
  }
// TEST CODE
console.log( middle( [1,2,3,4,7,8] ) )



//sarj bitti

//oldu
//ordamisin






