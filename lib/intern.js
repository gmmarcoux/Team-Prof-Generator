const Intern = require("./intern");

class Intern extends Employee {
    constructor (name, id, email, school) {
        super (name, id, email);
        this.school = school;
    }


    gitSchool() {
        return this. school;
    }

    getRole() {
        return "Intern";
    }
};

module.exports = Intern;