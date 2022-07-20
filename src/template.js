//SOUCRE : https://wesbos.com/template-strings-html 

const Engineer = require("../lib/Engineer");

//A. Generate the team's HTML formt

//1. MANAGER : name, id, email, officeNumber
const generateManager = manager => {
    return `
    <div class="employeeCard">
        <div class="cardHeader">
            <h2 class="NameRole">${manager.getName()}</h2>
            <h3 class="NameRole"><i class=""></i>${manager.getRole()}</h3>
        </div>

        <div class="cardBody">
            <h6 class="cardInfo id">ID: ${manager.getID()}</h6>
            <h6 class="cardInfo email">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></h6>
            <h6 class="cardInfo office">Office Number: ${manager.getOfficeNumber()}</h6>
        </div>
    </div>
    `;
};


//2. INTERNS : name, id, email. school
const generateIntern = intern => {
    return `
    <div class="employeeCard">
        <div class="cardHeader">
            <h2 class="NameRole">${intern.getName()}</h2>
            <h3 class="NameRole"><i class=""></i>${intern.getRole()}</h3>
        </div>

        <div class="cardBody">
            <h6 class="cardInfo id">ID: ${intern.getID()}</h6>
            <h6 class="cardInfo email">Email: <a href="mailto:${intern.getEmail()}">${manager.getEmail()}</a></h6>
            <h6 class="cardInfo office">Office Number: ${intern.getSchool()}</h6>
        </div>
    </div>
    `;
};


//3. ENGINNEERS : name, id, email, github
const generateEngineer = engineer => {
    return `
    <div class="employeeCard">
        <div class="cardHeader">
            <h2 class="NameRole">${engineer.getName()}</h2>
            <h3 class="NameRole"><i class=""></i>${engineer.getRole()}</h3>
        </div>

        <div class="cardBody">
            <h6 class="cardInfo id">ID: ${engineer.getID()}</h6>
            <h6 class="cardInfo email">Email: <a href="mailto:${engineer.getEmail()}">${manager.getEmail()}</a></h6>
            <h6 class="cardInfo office">Office Number: ${intern.getGithub()}</h6>
        </div>
    </div>
    `;
};

//B. Array
generateHTML = (data) => {

    pageArray = [];

    for (let i = 0; i <data.lemngth; i++) {
        const employee = data[i];
        const role = employee.getRole();

        //Manager
        if (role === 'Manager') {
            const managerCard = generateManager(employee);
            pageArray.push(managerCard);
        }
        //Intern
        if (role === 'Inter') {
            const internCard = generateIntern(employee);
            pageArray.push(InternCard);
        }
        //Engineer
        if (role === 'Engineer') {
            const engineerCard = generateEngineer(employee);
            pageArray.push(engineerCard);
        }
    }

    //join string and return to created page
    const employeeCard = pageArray.join('')

    const generateTeam = generateTeamPg(employeeCard);
    return generateTeam;
};




//4. THE WHOLE PAGE
const generateTeam = employeeCard => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
        <link rel="stylesheet" href="./style.css">
    </head>

    <body>

        <header class="h1 w-100 text-center">
            <h1 class="title">Team Profile Generator!</h1>
        </header>

        <div class="container">
            <div class="row col-11 justify-content-center d-flex">${generateTeam(team)}</div>
        </div>

    </body>
    </html>
    `;
}
