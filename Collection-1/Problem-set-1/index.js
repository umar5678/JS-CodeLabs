/*********************** Question 1 ****************************/

//!: Write a function that takes a string or sentence as argument and returns the largest word from that sentence

//todo

//? Make a fn longestWord and pass str as argument in its paranthesis
//? then split the words on the basis of 'space' and hold these words in a words array
//? also initiate an empty string variable "longestWord" with let
//? bcz its value can change while finding and iterating over that array

//? Now start a for-of loop , and start iterating over the word of words
//? in this loop, check if the length of current iterating word is greater then the length of the longest word

//? if so , set the value of longestWord to the word'
//? Lastly, return the longestWord

// Your solution:

/****************** Question 2 ***********************/

//!: Write a function to check if all the values of a string are unique
//!: Should return true only if all the values are uinque, otherwise false
//!: "qwer" return true
//!: "desktop" return true
//!: "qwerqwer" return false

//todo

//? Create a function called "areAllCharUnique" with a parameter "str".
//? Inside the function, initialize an empty array called "charArray" to store encountered characters.

//? Iterate over each character in the string using a for...of loop.
//? Inside the loop, check if the current character already exists in the "charArray" using indexOf() method.
//? If it does, return false immediately, indicating that not all characters are unique.

//? If the character is not found in the "charArray", add it to the array using push().

//? After the loop completes, return true, indicating that all characters in the string are unique.

//todo: Test the function with sample strings:
//? - "qwer": Should return true as all characters are unique.
//? - "desktop": Should return true as all characters are unique.
//? - "qwerqwer": Should return false as 'q' and 'w' are repeated.

// Solution:

/****************** Question 3 *********************/

//!: Create a function that takes a sting or a sentence and capatalize the first letter of each word and return the new string

//todo
//! method 1
//? Make a function `captalizeWords` , pass str as argument
//? str being passed as arg is a sentence
//? split str on the basis of "space" and store these words in words array
//? then loop over the array, using map()
//? in the callback of map function :iterate over th each word of array and perfome some operation over each item or word
//? in cb of map(): first slice the first letter of the word and store it in variable
//? then slice the rest of the letters expect the first letter
//? uppercase the firstLetter using upperCase() method
//? return the concatinated string of first + rest letters
//? the words array now stores all the words capatalized , now it needs to join to give out a string of letters or a sentence
//! method 2
//? in the cb of map():  return word with its first letter uppercased using charAt() mehtod
//? and concatinating it with rest of letters

// solution
