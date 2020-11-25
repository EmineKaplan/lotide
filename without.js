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


const without = function(source,itemsToRemove) {
  
  let newArr = [...source];
  
  for(let i = 0; i <= newArr.length; i++ ){
    for(let values of itemsToRemove){
      if(source[i] === values){
        let removedItem = newArr.indexOf(values);
        newArr.splice(removedItem,1);
      }
    }
  }
  return newArr;
}


console.log( without([1, 2, 3], [1]) );