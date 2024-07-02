"use strict";
//This project is not GUI based. It is a console-based game. The video here shows how to develop the game in Java. 
//You will take the requirements of the game from the video and develop the game in TypeScript and Node.js
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Create a GitHub repository for the project and submit its URL in the project submission form.
//#! /usr/bin/env node 
const chalk_1 = __importDefault(require("chalk"));
const inquirer_1 = __importDefault(require("inquirer"));
//CLASS PLAYER
class player {
    constructor(name) {
        this.health = 100;
        this.name = name;
    }
    healthDecrease() {
        this.health -= 25;
    }
    healthIncrease() {
        this.health = 100;
    }
}
//*************************************************************************************** */
//CLASS OPPONENT
class opponent {
    constructor(name) {
        this.health = 100;
        this.name = name;
    }
    healthDecrease() {
        this.health -= 25;
    }
    healthIncrease() {
        this.health += 25;
    }
}
//*************************************************************************************************/
//welcome note
console.log(chalk_1.default.red.bold("\n******************* Welcome to the game ********************\n"));
//inquirer for Player name
let playerName = await inquirer_1.default.prompt([
    {
        type: "input",
        name: "name",
        message: chalk_1.default.yellow.bold("Enter Your Name"),
        validate: (input) => {
            if (input.length < 3) {
                return chalk_1.default.greenBright.bold("Name must be at least 3 characters long");
            }
            return true;
        },
    },
]);
//************************************* */
// inquirer for Opponent name
let opponentName = await inquirer_1.default.prompt([
    {
        type: "list",
        name: "name",
        message: "Select Your Opponent",
        choices: ["ZOMBIE", "SKELETON", "ALIEN"],
    },
]);
//********************************************************** */
///data collect//
let opponent_1 = new opponent(opponentName.name);
let Player_1 = new player(playerName.name);
//****************************************************************** */
//game start
console.log(chalk_1.default.yellowBright.bold(`\n************* Game Start *************\n`));
console.log(chalk_1.default.green(`******* ${Player_1.name.toUpperCase()} VS ${opponent_1.name} ********\n`));
//************************************************************************************************ */
//game loop
//VARIABLE FOR DO WHILE LOOP
do {
    //for zombie
    if (opponentName.name === "ZOMBIE") {
        let selectAction = await inquirer_1.default.prompt([
            {
                type: "list",
                name: "action",
                message: "Select Your Action",
                choices: ["ATTACK", "HEAL", "RUN FOR THE LIFE"],
            },
        ]);
        //for Attach/////
        if (selectAction.action === "ATTACK") {
            let num = Math.floor(Math.random() * 2);
            // decrease your health
            if (num === 0) {
                Player_1.healthDecrease();
                console.log(chalk_1.default.redBright.bold(`\n********* ${opponent_1.name} HIT YOU *********\n`));
                console.log(chalk_1.default.bgGreenBright.bold(`\n********* ${Player_1.name.toUpperCase()} Health: ${Player_1.health} *********\n`));
                //****************************************************************************************************** */
                //decrease opponent health
            }
            else if (num >= 1) {
                console.log(chalk_1.default.yellowBright.bold(`\n********* ${Player_1.name.toUpperCase()} HIT ${opponent_1.name} *********\n`));
                opponent_1.healthDecrease();
                console.log(chalk_1.default.greenBright.bold(`\n********* ${opponent_1.name} Health: ${opponent_1.health} *********\n`));
            }
            if (Player_1.health === 0) {
                console.log(chalk_1.default.yellow.bold(`\n********* ${Player_1.name.toUpperCase()} DIED *********\n`));
                console.log(chalk_1.default.redBright.bold(`\n********* Better Luck Next Time *********\n`));
                break;
            }
            else if (opponent_1.health === 0) {
                console.log(chalk_1.default.yellow.bold(`\n********* ${Player_1.name.toUpperCase()} WIN *********\n`));
                break;
            }
        }
        //*********************************** */ For Heal ******************************************
        if (selectAction.action === "HEAL") {
            Player_1.healthIncrease();
            console.log(chalk_1.default.blue.bold(`\n${Player_1.name.toUpperCase()} Your Health has Recovered  ${Player_1.health} Health\n`));
        }
        if (selectAction.action === "RUN FOR THE LIFE") {
            console.log(chalk_1.default.red.bold(`\n*********  You Loose Better Luck Next Time  *********\n`));
            break;
        }
    }
    // for skeleton
    if (opponentName.name === "SKELETON") {
        let selectAction = await inquirer_1.default.prompt([
            {
                type: "list",
                name: "action",
                message: "Select Your Action",
                choices: ["ATTACK", "HEAL", "RUN FOR THE LIFE"],
            },
        ]);
        //for Attach/////
        if (selectAction.action === "ATTACK") {
            let num = Math.floor(Math.random() * 2);
            // decrease your health
            if (num === 0) {
                Player_1.healthDecrease();
                console.log(chalk_1.default.redBright.bold(`\n********* ${opponent_1.name} HIT YOU *********\n`));
                console.log(chalk_1.default.redBright.bold(`\n********* ${Player_1.name.toUpperCase()} Health: ${Player_1.health} *********\n`));
                //****************************************************************************************************** */
                //decrease opponent health
            }
            else if (num >= 1) {
                console.log(chalk_1.default.greenBright.bold(`\n********* ${Player_1.name.toUpperCase()} HIT ${opponent_1.name} *********\n`));
                opponent_1.healthDecrease();
                console.log(chalk_1.default.greenBright.bold(`\n********* ${opponent_1.name} Health: ${opponent_1.health} *********\n`));
            }
            if (Player_1.health === 0) {
                console.log(chalk_1.default.blueBright.bold(`\n********* ${Player_1.name.toUpperCase()} DIED *********\n`));
                console.log(chalk_1.default.yellowBright.bold(`\n********* Better Luck Next Time *********\n`));
                break;
            }
            else if (opponent_1.health === 0) {
                console.log(chalk_1.default.blueBright.bold(`\n********* ${Player_1.name.toUpperCase()} WIN *********\n`));
                break;
            }
        }
        //*********************************** */ For Heal ******************************************
        if (selectAction.action === "HEAL") {
            Player_1.healthIncrease();
            console.log(chalk_1.default.blue.bold(`\n${Player_1.name.toUpperCase()} Your Health has Recovered  ${Player_1.health} Health\n`));
        }
        if (selectAction.action === "RUN FOR THE LIFE") {
            console.log(chalk_1.default.blueBright.bold(`\n*********  You Loose Better Luck Next Time  *********\n`));
            break;
        }
    }
    //for ALIEN
    if (opponentName.name === "ALIEN") {
        let selectAction = await inquirer_1.default.prompt([
            {
                type: "list",
                name: "action",
                message: "Select Your Action",
                choices: ["ATTACK", "HEAL", "RUN FOR THE LIFE"],
            },
        ]);
        //for Attach/////
        if (selectAction.action === "ATTACK") {
            let num = Math.floor(Math.random() * 2);
            // decreas your health
            if (num === 0) {
                Player_1.healthDecrease();
                console.log(chalk_1.default.redBright.bold(`\n********* ${opponent_1.name} HIT YOU *********\n`));
                console.log(chalk_1.default.redBright.bold(`\n********* ${Player_1.name.toUpperCase()} Health: ${Player_1.health} *********\n`));
                //****************************************************************************************************** */
                //decreas opponent health
            }
            else if (num >= 1) {
                console.log(chalk_1.default.greenBright.bold(`\n********* ${Player_1.name.toUpperCase()} HIT ${opponent_1.name} *********\n`));
                opponent_1.healthDecrease();
                console.log(chalk_1.default.greenBright.bold(`\n********* ${opponent_1.name} Health: ${opponent_1.health} *********\n`));
            }
            if (Player_1.health === 0) {
                console.log(chalk_1.default.blueBright.bold(`\n********* ${Player_1.name.toUpperCase()} DIED *********\n`));
                console.log(chalk_1.default.yellowBright.bold(`\n********* Better Luck Next Time *********\n`));
                break;
            }
            else if (opponent_1.health === 0) {
                console.log(chalk_1.default.blueBright.bold(`\n********* ${Player_1.name.toUpperCase()} WIN *********\n`));
                break;
            }
        }
        //*********************************** */ For Heal ******************************************
        if (selectAction.action === "HEAL") {
            Player_1.healthIncrease();
            console.log(chalk_1.default.blue.bold(`\n${Player_1.name.toUpperCase()} Your Health has Recovered  ${Player_1.health} Health\n`));
        }
        if (selectAction.action === "RUN FOR THE LIFE") {
            console.log(chalk_1.default.blueBright.bold(`\n*********  You Loose Better Luck Next Time  *********\n`));
            break;
        }
    }
} while (true);
