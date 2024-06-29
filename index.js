#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.yellow.underline.bold("\n\t\t\t\t WELCOME TO ALEEZE COUNTDOWN TIMER..."));
function startCountdown(duration) {
    let remainingSeconds = duration;
    const intervalId = setInterval(() => {
        remainingSeconds--;
        if (remainingSeconds <= 0) {
            clearInterval(intervalId);
            console.log(chalk.underline.bold.red("\t\t\t\tTime is up!"));
        }
        else {
            console.log(chalk.underline.bold.magentaBright(`Time remaining: ${remainingSeconds} seconds`));
        }
    }, 1000);
}
async function main() {
    const { duration } = await inquirer.prompt([
        {
            type: "number",
            name: "duration",
            message: chalk.underline.bold.cyan("Enter the duration of the countdown timer (in seconds):"),
            validate: (input) => {
                return input > 0 ? true : chalk.underline.bold.red("Please enter a valid duration (greater than 0).");
            }
        }
    ]);
    startCountdown(duration);
}
main();
