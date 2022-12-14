const Employee = require("./employee");

// Second Child class
class Engineer extends Employee {
    constructor(name, Id, email, github) {
        super(name, Id, email);
        this.github = github;
    }
    getGithub() {
        return this.github;
    }
    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;

