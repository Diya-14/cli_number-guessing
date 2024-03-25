import inquirer from "inquirer";

// 1)computer will generate a random number - done
// 2) user input for guessing number
// 3) compare user input with computer generated number and show result

const randomNmber = 13;

const answer = await inquirer.prompt([
    {name:"userGuessedNumber",
type:"number",
message:"please guess a number:",
},
]);

if (answer.userGuessedNumber === randomNmber){
    console.log("congratulation you guessed right number.");
}else{
    console.log("you guessed wrong number");
}