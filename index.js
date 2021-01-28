const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");


function appMenu() {
    const employee = inquirer
    .prompt([
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
    ])
    .then((data) => {
        console.log(data)
    });
}

appMenu();