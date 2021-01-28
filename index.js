const inquirer = require('inquirer');
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const fs = require('fs');

// This creates the array that will contain the employee objects.
let employeeList = [];

// This function verifies that a manager is creating the profiles.
function begin() {
  inquirer.prompt([
        {
            message: "Are you the manager of this team?",
            type: "confirm",
            name: "start",
        }
    ])
    .then(val => {
        if(val.start) {
            appMenu()
        } else {
            console.log("\n Only managers can create team profiles.\n Please find the manager of this team.\n Goodbye. \n ----------- \n");
        }
    });
}
// This function fufills the manager questions and creates a manager object.
function appMenu() {
  inquirer.prompt([
        {
            message: "What is the manager's name?",
            type: "input",
            name: "name",
        },
        {
            message: "What is the manager's employee id?",
            type: "input",
            name: "id",
        },
        {
            message: "What is the manager's work email address?",
            type: "input",
            name: "email",
        },
        {
            message: "What is the manager's office number?",
            type: "input",
            name: "officeNumber",
        }
    ])
    .then(function({name, id, email,officeNumber}) {
        const employeeManager = new Manager(name, id, email, officeNumber)
        employeeList.push(employeeManager);
        addEmployee();
        pageStart();
    });
}

// This function asks what the user wants to do next.
function addEmployee() {
  inquirer.prompt([
        {
        message: "Would you like to add anyone else?",
        type: "list",
        choices: ["Engineer", "Intern", "No, I'm done."],
        name: "nextStep",
        }
    ])
    .then(function(nextStep) {
        var obj = nextStep
        const next = obj[Object.keys(obj)[0]];
        if (next === "Engineer"){
            const detail = "gitHub account"
            newMember(next, detail)
        } else if (next === "Intern"){
            const detail = "school"
            newMember(next, detail)
        } else {
            generatePage(employeeList);
            console.log("----")
        }
    });
}
// This function will continue the cycle of adding additional employees.
function newMember(next, detail){
  inquirer.prompt([
        {
            message: `What is the ${next}'s name?`,
            type: "input",
            name: "name",
        },
        {
            message: `What is the ${next}'s ID?`,
            type: "input",
            name: "id",
        },
        {
            message: `What is the ${next}'s work email?`,
            type: "input",
            name: "email",
        },
        {
            message: `What is the ${next}'s ${detail}?`,
            type: "input",
            name: "detail",
        },
    ])
    .then(function({name, id, email, detail}) {
        if (next === "Engineer"){
            const newEmployee = new Engineer(name, id, email, detail)
            employeeList.push(newEmployee);
            addEmployee();
        } else if (next === "Intern"){
            const newEmployee = new Intern(name, id, email, detail)
            employeeList.push(newEmployee);
            addEmployee();
        }
    });
}


function pageStart() {
    const html =
    `
    <!DOCTYPE html>
    <html lang="en">
    ​
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>My Team</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
        <script src="https://kit.fontawesome.com/c502137733.js"></script>
    </head>
    ​
    <body>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 jumbotron mb-3 team-heading">
                    <h1 class="text-center">My Team</h1>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="team-area col-12 d-flex justify-content-center">
    `
    fs.writeFile("./dist/sampleTeam.html", html, function(err) {
        if (err) {
            console.log(err);
        }
    })
};



function generatePage(employeeList) {
    console.log(employeeList);
    console.log(employeeList.getRole());

}


begin();