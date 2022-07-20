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

//Making a new team memeber
function addteamPlayers() {
    inquirer.prompt({
        type: "list",
        name: "addTeamPlayers",
        message: "What role is the new team member?",
        choices: ["Intern", "Engineer", "Finished"]
    })
        .then(answers => {
            let { addteamPlayers } = answers;

            if (addteamPlayers === "Engineer") {
                addEngineer();
            } else if (addteamPlayers === "Intern") {
                addIntern();
            } else if (addteamPlayers = "Finished") {
                generateHTML();
            }
        })
}

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
    ]).then(answers => {
        const manager = new Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.managerOfficeNum);
        teamArray.push(manager);
        createTeam();
    });
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
    ]).then(answers => {
        const intern = new Intern(answers.internName, answers.internID, answers.internEmail, answers.internSchool);
        teamArray.push(manager);
        createTeam();
    });
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
    ]).then(answers => {
        const engineer = new Engineer(answers.engineerName, answers.engineerID, answers.engineerEmail, answers.githubAddy);
        teamArray.push(engineer);
        createTeam();
    });
}

//function to start and run the app
function runApp () {
    fs.writeFile("./dist/index.html", generateHTML(teamPlayers), err => {
        if (err) {
            return console.error(err);
        }else {
            console.log("Congrats! Your directory has been created!");
            fs.copyFile("./src/style.css", "./dist/style.css", err => {
                if (err) {
                    console(err)
                    return;
                };
            });
        };
    });
};

createTeam ();

addManager();