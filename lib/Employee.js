class Employee {
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
    }
  
    getName() {
      console.log(`This employee's name is ${this.name}`);
    }
  }
  module.exports = Employee;