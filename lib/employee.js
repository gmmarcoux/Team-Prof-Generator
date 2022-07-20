//Emnployee classes: name, id, email; getname, getid, getemail, and get role to return employee

class Emnployee {
    //Name, ID, and Email
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    //return[word]

    getName () {
        return this.name;
    }

    gitID () {
        return this.id;
    }

    getEmail () {
        return this.email;
    }

    getRole () {
        return "Employee";
    }
};

module.exports = Employee;