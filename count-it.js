// Count It
//
// Write a function that counts the letters in a string.
//
// Input
//
// A string. e.g. "Hello World"
//
// Output
//
// The letters and how often they show up. e.g. d:1 e:1 h:1 l:3 o:2 r:1 w:1 NOTE: the function should not call console.log()
//
// Special
//
// Case-insensitive. So convert all letters to lowercase
// Ignore whitespace
// Ignore anything not a-z
// Challenge input:
//
// "The quick brown fox jumps over the lazy dog and the sleeping cat early in the day."


'use strict';
function countIt(stringToCount){
  //convert the string to lower case
  let stringToCountLowerCase = stringToCount.toLowerCase();

  //make an object or array of the letters we are concerned with
  let interestingCharacters = { "a": 0, "b": 0, "c": 0, "d": 0, "e": 0, "f": 0, "g": 0, "h": 0, "i": 0, "j": 0, "k": 0, "l": 0, "m": 0, "n": 0, "o": 0, "p": 0, "q": 0, "r": 0, "s": 0, "t": 0, "u": 0, "v": 0, "w": 0, "x": 0, "y": 0, "z": 0 };

  //loop through the interesting letters
  // for (var prop in interestingCharacters) {
  //   // and loop through the string of letters provided
  //   for (var stringChar = 0; stringChar < stringToCountLowerCase.length; stringChar++) {
  //     if (stringToCountLowerCase[stringChar] === prop) {
  //       // increment any matches
  //       interestingCharacters[prop]++;
  //     }
  //   }
  // }


  // loop through the string of letters provided
  stringToCountLowerCase.split('').forEach(function(element){
    //loop through the interesting letters
    if (interestingCharacters.hasOwnProperty(element)) {
      // increment any matches
      interestingCharacters[element]++;
    }
  });



  // return the match count info
  // console.log(interestingCharacters);
  return interestingCharacters;
}
countIt("The quick brown fox jumps over the lazy dog and the sleeping cat early in the day.");
