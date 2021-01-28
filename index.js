const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Employee = require('./lib/Employee');
const { connected } = require('process');

let employeeList = [];

function appMenu() {

    inquirer.prompt([
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
    }
    /*{
    type: "confirm",
    name: "choice",
    message: "Would you like to add more employees?"
    }*/
    ])

    .then((data) => {
        console.log(data.name);
        console.log(data.id);
        console.log(data.email);
        console.log(data);
        employeeList.push(data);
        console.log(employeeList);

    });

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
