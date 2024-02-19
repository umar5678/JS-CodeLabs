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

function mostRepeatingNum(arr) {
  const numCount = {};
  let mostRepeatNum = -1;
  let maxCount = 0;

  for (let num of arr) {
    if (numCount[num]) {
      numCount[num]++;
    } else {
      numCount[num] = 1;
    }

    if (
      numCount[num] > maxCount ||
      (numCount[num] === maxCount && num != mostRepeatNum)
    ) {
      maxCount = numCount[num];
      mostRepeatNum = num;
    }
  }

  return maxCount > 1 ? mostRepeatNum : -1;
}

// console.log(mostRepeatingNum(num1));
// console.log(mostRepeatingNum(num2));
// console.log(mostRepeatingNum(num3));

/******************** Question 3 *********************/

//! for a given string, count the number of letter appeard
// string will not contain numbers or symbols, it will contain letters only

//todo
// create a fn that recives string as argument
// initialize an empty object to store letter counts
// Iterate through each letter of the input string
// Update the letter count object accordingly
// Check if the current letter already exists in the letter count object
// If it does, increment its count
// If it doesn't, initialize its count to 1
// Initialize an empty array to store intermediate results
// Iterate through the keys of the letter count object
// Construct the intermediate result by concatenating the count and letter
// Join the intermediate result array to form the final result string

function letterCounter(str) {
  const letterCountObj = {};

  for (let letter of str) {
    if (letterCountObj[letter]) {
      letterCountObj[letter]++;
    } else {
      letterCountObj[letter] = 1;
    }
  }

  // let reducedStr = "";
  // for (let key in letterCountObj) {
  //   reducedStr += letterCountObj[key] + key;
  // }

  const resultArray = [];
  for (let key in letterCountObj) {
    resultArray.push(letterCountObj[key] + key);
  }

  return resultArray.join("");
}

//?Data
const str1 = "qqqwwrrrrttty";
const str2 = "synonyms";

console.log(letterCounter(str1));
console.log(letterCounter(str2));
