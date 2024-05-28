#! /usr/bin/env node
import inquirer from "inquirer";

 // 1) computer will generate a random number -done.

 // 2) user input for guessing number -done

// 3) compare uset input with computer generated number and show result -done

console.log("\n \tWellcome to U-30-Cli-Number-Guessing-Game \n");

const randomNumber = Math.floor(Math.random() * 5 + 1);

const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Enter your guess number between 1 to 5:",
    },
]);

if(answer.userGuessedNumber === randomNumber){
    console.log("Congratulation ! You guess a correct Number.");
}
else{
    console.log("Soory, You guess a wrong number");
}