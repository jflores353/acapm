const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
});

// * Check for the first process argument to be init
// * If the first argument is init continue processing else end the program
if (process.argv[2]==="init"){
    console.log("I am init to win it")
};
// * check if a file named package.json already exists, if it does exit the program
// * Use readline to ask for 5 inputs
// rl.question("Ask for 5 inputs"), function() {

// }
// * Create a string that is a json object
// JSON.stringify(key:string, value:any) => {

// }
// * The key values should be the inputs you get from the user
// * Save this json to a file called package.json


