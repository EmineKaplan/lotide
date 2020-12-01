
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

const assertArraysEqual = function(arr1,arr2){
  const result = eqArrays(arr1,arr2);
   if(!result){
     console.log("Oh! Sorry! There was an issue  with the array which you altered" )
   }
   else{
     console.log("Conguratulation! The orginal Array Remains Us")
   }
}

console.log(assertArraysEqual( [2,5,4,7,9], [2,5,4,7,9] ) );




const without = function(source,itemsToReverse){
  let newArr =[...source];
   for(let i = 0;i <=newArr.length; i++){
     for(let values of value){
     if(source[i] === values){
       let removedItem = newArr.indexOf(values);
     }
   }
  }
  return newArr; 
}