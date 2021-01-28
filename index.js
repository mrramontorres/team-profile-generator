const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Employee = require('./lib/Employee');

let employeeList = [];

function begin() {
  inquirer
    .prompt([
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

function appMenu() {
  inquirer
    .prompt([
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
        /*{
        type: "confirm",
        name: "choice",
        message: "Would you like to add more employees?"
        }*/
    ])
    .then(function({name, id, email,officeNumber}) {
        const employeeManager = new Manager(name, id, email, officeNumber)
        employeeList.push(employeeManager);
        console.log(employeeList);
        addEmployee();
    });

}

function addEmployee() {
  inquirer
    .prompt([
        {
        message: "What would you like to do next?",
        type: "list",
        choice: ["Add an engineer.", "Add an intern.", "Generate team profiles."]
        }
    ])

}

begin();