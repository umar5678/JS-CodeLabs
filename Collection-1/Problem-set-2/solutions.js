/******************** Question 1 *********************/

//! For a given string,
// sort it in ascnding order,
// if there is one value , return the value not the array
// if two values , return values not the array
// if three values, return second value
// if more then three, return second value and second last value from the array

const arr1 = [3];
const arr2 = [4, 1];
const arr3 = [-6, 5, 2];
const arr4 = [-56, 34, 22, 66, 90, 17];

// todo
// create a fn name it `sortAndSecondValue` and pass arr as argument
// create a new variable sortedArr to store sorted array, apply sort method on arr
// then check if length of sortedArr is less then 2 , return the value
// if 2 return two values
// if more then two return value at the index 1 and from second last index,
// access the second last by substraction 2 from the length of array it will give second last index
// return value

// Solution

function sortAndSecondValue(arr) {
  // let values = arr.sort((a, b) => a - b);
  let values = [...new Set(arr)].sort((a, b) => a - b);

  if (values.length < 2) {
    return `${values[0]}`;
  } else if (values.length === 2) {
    return `${values[0]} ${values[1]}`;
  } else if (values.length === 3) {
    return `${values[1]}`;
  } else {
    return `${values[1]} ${values[values.length - 2]}`;
  }
}

// console.log(sortAndSecondValue(arr1));
// console.log(sortAndSecondValue(arr2));
// console.log(sortAndSecondValue(arr3));
// console.log(sortAndSecondValue(arr4));

/******************** Question 2 *********************/

//! for a give array
// return the most repeating number
// if two numbers repeat the same , return the first number
// if no repeated , return -1

//? Data
const num1 = [1, 2, 3, 4, 5];
const num2 = [44, 23, 44, 12, 44];
const num3 = [2, 1, 3, 1, 2, 1, 2, 1, 2, 3];

//todo
//

/******************** Question 3 *********************/
