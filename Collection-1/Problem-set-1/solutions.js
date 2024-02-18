/*********************** Question 1 ****************************/

//!: Write a function that takes a string or sentence as argument and returns the largest word from that sentence

//todo

//? Make a fn longestWord and pass str as argument in its paranthesis
//? then split the words on the basis of 'space' and hold these words in a words array
//? also initiate an empty string variable "longestWord" with let bcz its value can change while finding and iterating over that array

//? Now start a for-of loop , and start iterating over the word of words
//? in this loop, check if the length of current iterating word is greater then the length of the longest word

//? if so , set the value of longestWord to the word'
//? Lastly, return the longestWord

// Your solution:

function longestWord(str) {
  let words = str.split(" ");
  let longestWord = "";

  for (let word of words) {
    if (word.length > longestWord.length) longestWord = word;
  }

  return longestWord;

  //  also return number of chr
  // let chrLength = longestWord.length;
  // return [longestWord, chrLength];
}

console.log(longestWord("Always remember that you are absolutely unique."));
console.log(longestWord("You have brains in your head."));

/******************** Question 2 ***********************/
