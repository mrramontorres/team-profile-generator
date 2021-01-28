const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
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
        console.log(employeeList);
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
            console.log(employeeList);
            addEmployee();
        } else if (next === "Intern"){
            const newEmployee = new Intern(name, id, email, detail)
            employeeList.push(newEmployee);
            console.log(employeeList);
            addEmployee();
        }
    });
}

begin();