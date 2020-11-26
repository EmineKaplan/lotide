const assertEqual = function(actual, expected) {
  if(actual === expected) {
    console.log(`\u2705Assertion passed : ${actual}  =  ${expected}`)
  } 
  else if(actual !== expected){
    console.log(`\u2716Assertion failed : ${actual} != ${expected}`)
  }
  return assertEqual;
  };
  
const countLetters = function(string) {
  const noSpace = string.split(' ').join('');
  const letterList = {};

  for (const letter of noSpace) {
    letterList[letter] ? letterList[letter] += 1 : letterList[letter] = 1;
    if (!letterList[letter]) letterList[letter] = 0;
    letterList[letter] += 1;
  }
  return letterList;
};


assertEqual(countLetters("Hellloooo Wooorllld")["o"],5);
assertEqual(countLetters("Snowww is cooold")["b"],undefined); 