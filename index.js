const fs = require('fs');
const { get } = require('http');
const inquirer = require('inquirer');
const { getEnabledCategories } = require('trace_events');
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");


async function init() {
    try{
        const employee = await new Employee()
        console.log(Employee);
        console.log(employee);
    } catch (error) {
        console.log(error)
    }
}