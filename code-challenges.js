// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding your process is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and determines which of the two strings has more characters. Use the two sets of test variables provided.

// Pseudo code:

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"
// Expected outcome: "cherry"

// //creating function that takes 2 parameters x & y
// const longer = (x,y) => {
// //if the length ox is greater than y
//   if (x.length > y.length){
// //x will be returned
//     return x
// //y will be returned if x is smaller
//   } else {
//     return y
//   }
// }
// console.log(longer(fruit1, fruit2)) ---> banana
// console.log(longer(fruit3, fruit4)) ---> cherry

// --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// Pseudo code:

const temperature1 = 42
// Expected output: "42 is below boiling point"

const temperature2 = 350
// Expected output: "350 is above boiling point"

const temperature3 = 212
// Expected output: "212 is at boiling point"

//creating a function named boil that tales the parameter num
//const boil = (num) => {
//   //if the num is 212 then it will return 212
//   // is at boiling point
//   if (num === temperature3){
//     return `${num} is at boiling point.`
//     // if num less than 212  it will
//     //return below boiling point
//   } else if (num<temperature3){
//     return `${num} is below boiling point`
//     //everything else will be above biling point
//   } else {
//     return `${num} is above boiling point`
//   }
// }
// console.log(boil(temperature1)) ---> 42 is below boiling point
// console.log(boil(temperature2)) ---> 350 is above boiling point
// console.log(boil(temperature3)) ---> 212 is at boiling point

// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Pseudo code:

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// Expected output: 9

//create a function named combine that takes two parameters x and y
// const combine = (x,y) => {
//   //concat will add 'y' the end of 'x'
//   //.length will return the length of the combined arrays
//   return x.concat(y).length
  
// }

// console.log(combine(padres1984WorldSeriesRuns, padres1998WorldSeriesRuns)) ---> 9

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// Pseudo code:

const currentCohort = "Bravo 2023"
// Expected output: "3202 ovarB"

//create a function that takes a string as a parameter - words
// const backwards = (words) => { 
//   // change <words> to an array with each character as an index
//   //reverse the array
//   //change the array back to a string
//   return words.split('').reverse().join('')
// }

// console.log(backwards(currentCohort)) ---> 3202 ovarB

// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// Pseudo code:

const myNumbers = [13, 34, 42, 5, 5, 10, 27, 42, 10]
const givenValue1 = 42
// Expected output: 7

const givenValue2 = 10
// Expected output: 8

//create a function named last that
//takes 2 parameters <array> and <num>
// const last = (array, num) => {
//   //.lastIndexOf is searching for num
//   //from right to left
//   return array.lastIndexOf(num)
// }

// console.log(last(myNumbers,givenValue1))
// console.log(last(myNumbers,givenValue2))
// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// Pseudo code:

const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
// Expected output: [82, 80, 79, 77, 76, 73, 72]

const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
// Expected output: [68, 67, 66, 66, 62, 59, 59]
 
//create a function named sorting that takes a parameter <array>
// const sorting = (array) => {
//   //.sort takes the array and orders it smallest to largest
//   //.reverse takes smallest-largest and makes ot
//   //largest to smallest which gets returned
//   return array.sort().reverse()
// }

// console.log(sorting(sanDiegoSummerTemperatures)) ---> [82, 80, 79, 77, 76, 73, 72]
// console.log(sorting(sanDiegoWinterTemperatures)) ---> [68, 67, 66, 66, 62, 59, 59]