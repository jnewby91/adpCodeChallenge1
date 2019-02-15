/**
 * Challenge 1
Create a function that takes an array of numbers and returns an array of only the odd numbers.
 The function must not use looping or libraries that use looping .
 */

 /*
 To loop through the array
 -------------------------
 1. iF the array has a length greater than zero return itself
 2. If the array has a length less than zero keep going

 To check if the number is even or odd create a function
 -------------------------------------------------------
 1. Use the shift prototype to extract the first digit
 2. After the digit is extracted check if the digit is even or odd
 3. If it is even then do nothing
 4. If it is odd push the variable to an array
*/


var result = []; 

function oddNumbers(array){

  if(array.length === 0){
    console.log(result)
    return result; 
  }else {
    let firstNumber = array.shift();
      if(firstNumber % 2 !== 0){
        result.push(firstNumber)
       }
      oddNumbers(array);
    }
  
  }
 
console.log(oddNumbers([1,2,3,4,5,6,7]));