const Intern = require("./intern");

class Inter extends Employee {
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

module.exports = Inter;