//In addition to Employee's properties and methods, Engineer will also have: github, getGithub(), getRole()

//as the employee sheet..
const { ModuleFilenameHelpers } = require("webpack");
const Employee = require("./employee");

//and a little extra
class Engineer extends Employee {
    constructor (name, id, email, github) {
        super (name, id, github);
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return "Engineer";
    }
};

module.exports = Engineer; 