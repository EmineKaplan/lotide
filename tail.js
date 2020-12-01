const assertEqual = function(actual, expected) {
  if(actual.length != expected.length) {
    
    console.log(`\u2716Assertion failed : ${actual} != ${expected}`)
  } 
  else if(actual.length == expected.length){
    
    for(var i = 0; i < actual.length; i++){
      if(actual[i] != expected[i]){
        console.log(`\u2716Assertion failed : ${actual[i]}  =  ${expected[i]}`)
      }else{
        console.log(`\u2705Assertion passed: ${actual[i]} != ${expected[i]}`) 
      }
    }
   
  }
  return assertEqual;
  

};
  
  
  
  const tail=function(arr){
   return  arr[1,arr.length];
  }
 
 
  const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]); 