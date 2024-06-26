#! /usr/bin/env node

import inquirer from "inquirer";

// 1)computer will generate a random number - done
// 2) user input for guessing number -done
// 3) compare user input with computer generated number and show result

const randomNmber = Math.floor(Math.random() * 6 + 1);

const answer = await inquirer.prompt([
    {name:"userGuessedNumber",
type:"number",
message:"please guess a number between 1-6:",
},
]);

if (answer.userGuessedNumber === randomNmber){
    console.log("Congratulation! you guessed right number.");
}else{
    console.log("you guessed wrong number");
}