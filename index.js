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
            appMenu();
            pageStart();
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
    .then(function({name, id, email, officeNumber}) {
        const employeeManager = new Manager(name, id, email, officeNumber)
        employeeList.push(employeeManager);
        managerHTML(employeeManager);
        addEmployee();
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
            pageEnd();
            console.log("----Team Page Generated!----")
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
            engineerHTML(newEmployee);
            addEmployee();
        } else if (next === "Intern"){
            const newEmployee = new Intern(name, id, email, detail)
            employeeList.push(newEmployee);
            internHTML(newEmployee);
            addEmployee();
        }
    });
}
function pageStart() {
    const html =
`<!DOCTYPE html>
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
                <div class="team-area col-12 d-flex justify-content-center">`
    fs.writeFile("./dist/sampleTeam.html", html, function(err) {
        if (err) {
            console.log(err);
        }
    })
};
function engineerHTML(newEmployee) {
  return new Promise(function(resolve, reject) {
   const data =
       `<div class="card employee-card">
            <div class="card-header">
                <h2 class="card-title">${newEmployee.getName()}</h2>
                <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${newEmployee.getRole()}</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${newEmployee.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${newEmployee.getEmail()}}">${newEmployee.getEmail()}</a></li>
                    <li class="list-group-item">GitHub: <a href="https://github.com/${newEmployee.getGitHub()}" target="_blank" rel="noopener noreferrer">${newEmployee.getGitHub()}</a></li>
                </ul>
            </div>
        </div>`; 
    fs.appendFile("./dist/sampleTeam.html", data, function(err) {
        if (err) {
            return reject(err);
        }
        return resolve();
    })
})}; 
function internHTML(newEmployee) {
  return new Promise(function(resolve, reject) {
     const data =
       `<div class="card employee-card">
            <div class="card-header">
                <h2 class="card-title">${newEmployee.getName()}</h2>
                <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${newEmployee.getRole()}</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${newEmployee.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${newEmployee.getEmail()}">${newEmployee.getEmail()}</a></li>
                    <li class="list-group-item">School: ${newEmployee.getSchool()}</li>
                </ul>
            </div>
        </div>`;
      fs.appendFile("./dist/sampleTeam.html", data, function(err) {
          if (err) {
              return reject(err);
          }
          return resolve();
      })
  })}; 
function managerHTML(employeeManager) {
    const data =
       `<div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${employeeManager.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${employeeManager.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${employeeManager.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${employeeManager.getEmail()}}">${employeeManager.getEmail()}</a></li>
                <li class="list-group-item">Office number: ${employeeManager.getOfficeNumber()}</li>
            </ul>
        </div>
        </div>`;
    fs.appendFile("./dist/sampleTeam.html", data, function(err) {
        if (err) {
            console.log(err);
        }
    })
};
function pageEnd() {
    const html =
`   </body>
</html>`
    fs.appendFile("./dist/sampleTeam.html", html, function(err) {
        if (err) {
            console.log(err);
        }
    })
};

begin();