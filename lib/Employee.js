const inquirer = require("inquirer");

class Employee {

  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;

    await inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
      }
    ])
    .then(console.log("after then"))

  }

/*

  getName(

  )

  getId() {
    console.log(`This employee's ID is ${this.id}`);
  }

  getEmail() {
    console.log(`This employee's email is ${this.email}`);
  }
*/
  getRole() {
    return Employee;
  }

};



module.exports = Employee;