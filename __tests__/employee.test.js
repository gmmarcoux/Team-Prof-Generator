const Employee = require('../lib/employee');

//creates an object
test('creates an employee object', () => {
    const employee = new Employee('Gracie', 22, 'gmmarcoux@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

//name from getName
test('gets employee name', () => {
    const employee = new Employee('Gracie', 22, 'gmmarcoux@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

//id from getID
test('gets employee ID', () => {
    const employee = new Employee('Gracie', 22, 'gmmarcoux@gmail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

//email from getEmail
test('gets employee email', () => {
    const employee = new Employee('Gracie', 22, 'gmmarcoux@gmail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

//role from getRole //returns 'employee'
test('gets employee role', () => {
    const employee = new Employee('Gracie', 22, 'gmmarcoux@gmail.com');

    expect(employee.getRole()).toEqual(Employee);
});