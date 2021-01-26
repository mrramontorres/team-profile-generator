class Manager extends Employee {
    constructor(officeNumber) {
      super(name, id, email);
      this.officeNumber = officeNumber;
    }

    // needs to override 
    getRole() {
    }
}

module.exports = Manager;