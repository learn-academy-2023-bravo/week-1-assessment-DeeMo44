// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
//console.log(colors.push("indigo"))

// a) Your answer:
//the console will log the the amount of indices

// b) Verify and explain:
//the console loggged 5 because <.push()> returns a number
//which would be the total number of colors in the array

// --------------------1) What will this log?

const cohort = "LEARN 2023"
//console.log(cohort.length)

// a) Your answer:
//This will log 10 

// b) Verify and explain:
//The console logged 10 because there are 10 characters

// --------------------2) What will this log?

const greeting = "Hello World!"
//console.log(greeting[4])

// a) Your answer:
//The console will log 'o'

// b) Verify and explain:
//The console logged 'o' because 'o' is the 4th index of the variable <greeting>

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
//console.log(languages[index])

// a) Your answer:
//The console will log "Ruby"

// b) Verify and explain:
//The console logged "Ruby" because it is the 1st index of the array <languages>

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
//console.log(weekendDays.toUpperCase())

// a) Your answer:
//There may be an error i think
// b) Verify and explain:
//There was an error because <.toUpperCase> doesn't work on arrays - it works on strings

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
//console.log(typeof dataTypes.length)

// a) Your answer:
//My guess is there will be an error

// b) Verify and explain:
//The console logged 'number' because .length returns a number which in this case would be 4. typeOf is 
//stating that 4 is a number
