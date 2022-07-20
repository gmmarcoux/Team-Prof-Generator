//SOUCRE : https://wesbos.com/template-strings-html 

const Engineer = require("../lib/Engineer");

//A. Generate the team's HTML formt

//1. MANAGER : name, id, email, officeNumber
const generateManager = manager => {
    return `
    <div class="employeeCard">
        <div class="cardHeader">
            <h2 class="NameRole">${manager.name}</h2>
            <h3 class="NameRole"><i class=""></i>${manager.getRole()}</h3>
        </div>

        <div class="cardBody">
            <h6 class="cardInfo id">ID: ${manager.id}</h6>
            <h6 class="cardInfo email">Email: <a href="mailto:${manager.email}">${manager.email}</a></h6>
            <h6 class="cardInfo office">Office Number: ${manager.officeNumber}</h6>
        </div>
    </div>
    `;
};


//2. INTERNS : name, id, email. school
const generateIntern = intern => {
    return `
    <div class="employeeCard">
        <div class="cardHeader">
            <h2 class="NameRole">${intern.name}</h2>
            <h3 class="NameRole"><i class=""></i>${intern.getRole()}</h3>
        </div>

        <div class="cardBody">
            <h6 class="cardInfo id">ID: ${intern.id}</h6>
            <h6 class="cardInfo email">Email: <a href="mailto:${intern.email}">${manager.email}</a></h6>
            <h6 class="cardInfo office">Office Number: ${intern.school}</h6>
        </div>
    </div>
    `;
};


//3. ENGINNEERS : name, id, email, github
const generateEngineer = engineer => {
    return `
    <div class="employeeCard">
        <div class="cardHeader">
            <h2 class="NameRole">${engineer.name}</h2>
            <h3 class="NameRole"><i class=""></i>${engineer.getRole()}</h3>
        </div>

        <div class="cardBody">
            <h6 class="cardInfo id">ID: ${engineer.id}</h6>
            <h6 class="cardInfo email">Email: <a href="mailto:${engineer.email}">${manager.email}</a></h6>
            <h6 class="cardInfo office">Office Number: ${intern.gethub}</h6>
        </div>
    </div>
    `;
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
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link rel="stylesheet" href="style.css">
    </head>
    `;






