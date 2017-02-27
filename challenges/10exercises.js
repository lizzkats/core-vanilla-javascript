// Define a function max() that takes two numbers as arguments and returns the largest of them.
// Use the if-then-else construct available in Javascript.
function max(num1, num2){
  if(num1 > num2){
    return num1
  }
  else if(num2 > num1){
    return num2
  }
}
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
function maxOfThree(num1, num2, num3){
  if(num1 > num2 && num1 > num3){
    return num1;
  }
  else if(num2 > num1 && num2 > num3){
    return num2
  }
  else if(num3 > num1 && num3 > num2){
    return num3
  }
}
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
function vowelChecker(letter){
  if(['a','e','i','o','u'].indexOf(letter) >= 0){
    return true
  } else {
    return false
  }
}
// Write a function translate() that will translate a text into "rövarspråket".
// That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
function translate(text){
  let output = ""
  let vowels = ['a','e','i','o','u']
  for(let i= 0; i < text.length; i++){
    let currentIndex = text.charAt(i)
    if(vowels.indexOf(currentIndex) != -1){
      output = (output + (currentIndex))
    } else {
      output = (output + (currentIndex +'o'+ currentIndex))
    }
    return output
  }
}
// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers.
// For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
function sum(array){
  let sumArray = array.reduce(function(num, index){
    return num + index
  })
  return sumArray
}

function multiply(array){
  let multiplyArray = array.reduce(function(num, index){
    return num * index
  })
  return multiplyArray
}
// Define a function reverse() that computes the reversal of a string.
// For example, reverse("jag testar") should return the string "ratset gaj".
function reverse(string){
  let stringSplitter = string.split('')
  let reverseString = stringSplitter.reverse()
  return reverseString.join('')
}
// Represent a small bilingual lexicon as a Javascript object in the following fashion
//{"merry":"god", "christmas":"jul", "and":"och", "happy":gott", "new":"nytt", "year":"år"}
//and use it to translate your Christmas cards from English into Swedish.
let Lexicon = {
  "merry":"god",
  "christmas":"jul",
  "and":"och",
  "happy":"gott",
  "new":"nytt",
  "year":"år"
}

//Write a function findLongestWord() that takes an array of words and returns the length of the longest one
function findLongestWord(array){
//split into nested arrays
//find the length of those arrays
//compare
}
//Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.

//Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
