const Employee = require('../lib/employee');

//creates an object
test('creates an employee object', () => {
    const employee = new Employee('Gracie', 22, 'gmmarcoux@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

//name from getName

//id from getID

//email from getEmail

//role from getRole