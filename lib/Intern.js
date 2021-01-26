class Intern extends Employee {
    constructor(school) {
      super(name, id, email);
      this.school = school;
    }

    getSchool() {

    }

    // needs to override 
    getRole() {
    }
}

module.exports = Intern;