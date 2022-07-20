//officeNumber + getRole
const Manager = require('../lib/manager');

//create object/manager's office number
test('create manager object', () => {
    const manager = new Manager('Gracie', 22, 'gmmarcoux@gmail.com');

    expect(manager.officeNumber).toEqual(expect.any(Number));
});

//getRole
test('gets role', () => {
    const manager = new Manager('Gracie', 22, 'gmmarcoux@gmail.com');

    expect(manager.getRole()).toEqual("Manager");
});