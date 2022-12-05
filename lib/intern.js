const Employee = require("./employee");

class intern extends Employee {
    constructor(name, Id, email, school) {
        super(name, Id, email);
        this.school = school;
    }
    getSchool() {
        return this.school;
    }
    getRole() {
        return "intern";
    }
}

module.exports = intern;

