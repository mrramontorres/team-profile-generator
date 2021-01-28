const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Employee = require('./lib/Employee');


function appMenu() {

    const employee = inquirer.prompt([
    {
    type: "input",
    name: "name",
    message: "What's your name?",
    },
    {
    type: "input",
    name: "id",
    message: "What's your employee id?",
    },
    {
    type: "input",
    name: "email",
    message: "What's your email?",
    },
    {
    type: "confirm",
    name: "choice",
    message: "Would you like to add more employees?"
    }
    ])

    .then((data) => {
        console.log(data);
    })
    
    /*
    .then((val) => {
        if (val.choice) {
            console.log("Need to add more....");
        } else {
            console.log("Done.");
        }
    })
    */

}

appMenu();