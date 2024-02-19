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

/******************** Question 2 *********************/

//! for a give array
// return the most repeating number
// if two numbers repeat the same , return the first number
// if no repeated , return -1

//? Data
const num1 = [1, 2, 3, 4, 5];
const num2 = [44, 23, 44, 12, 44];
const num3 = [1, 2, 3, 1, 2, 1, 2, 1, 2, 3];

//todo
// create a fn the recives an arr as argument
// create an object to store count of each number
// iterate through the array
// for each number encounterd, check if it exist in the object
// if it does, increment its count
// if it doesnot initialize it count from 1
// check if the count of the current number is greater then the maxcount, if so set the maxCount to the count of the number
// or if count is equal to the maxCount and current number is smaller then the most repeated number , set the most repeated num equal to number
// Return result
// If any number repeats more than once, return the most repeating number
// Otherwise, return -1

// Solution
