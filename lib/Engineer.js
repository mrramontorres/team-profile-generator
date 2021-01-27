const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(gitHub) {
      super(name, id, email);
      this.gitHub = gitHub;
    }
  
    getGitHub() {

    }

    // needs to override 
    getRole() {
    }
}

module.exports = Engineer;