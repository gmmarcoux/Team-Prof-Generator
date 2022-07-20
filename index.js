//node
const fs = require('fs');
const inquirer = require ('inquirer');

//html
const generateHTML = require('./src/generateHTML');


//profiles
const Manager = require('./lib/manager');
const Intern = require('./lib/intern');
const Engineer = require('./lib/engineer');


//array
let teamPlayers = [];

//PROMPTS
//Manager prompts
function addManager() {
    inquirer.prompt([
        {
            type: "input",
            name: "managerName",
            message: "Please record the name of the Manager."
        },

        {
            type: "input",
            name: "managerID",
            message: "Please record the Manager's ID."
        },

        {
            type: "input",
            name: "managerEmail",
            message: "Please record the email address of the Manager."
        },

        {
            type: "input",
            name: "managerOfficeNum",
            message: "Which room number is the Manager's office?"
        },
    ])
}

//Intern prompts
function addIntern() {
    inquirer.prompt([
        {
            type: "input",
            name: "internName",
            message: "Please record the name of the Intern."
        },

        {
            type: "input",
            name: "internID",
            message: "Please record the Intern's ID."
        },

        {
            type: "input",
            name: "internEmail",
            message: "Please record the email address of the Intern."
        },

        {
            type: "input",
            name: "internSchool",
            message: "Which school does the Intern attend?"
        },
    ])
}


//Engineer prompts
function addEngineer() {
    inquirer.prompt([
        {
            type: "input",
            name: "engineerName",
            message: "Please record the name of the Engineer."
        },

        {
            type: "input",
            name: "engineerID",
            message: "Please record the Engineer's ID."
        },

        {
            type: "input",
            name: "engineerEmail",
            message: "Please record the email address of the Engineer."
        },

        {
            type: "input",
            name: "githubAddy",
            message: "Please list the Engineer's Github account."
        },
    ])
}