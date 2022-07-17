const Intern = require('../lib/intern');

//creates object
test('creates Intern object', () => {
    const intern = new Intern('Gracie', 22, 'gmmarcoux@gmail.com');

    expect(intern.school).toEqual(expect.any(String));
});

//gets school from getSchool
test('gets school', () => {
    const intern = new Intern('Gracie', 22, 'gmmarcoux@gmail.com');

    expect(intern.getSchool()).toEqual(expect.stringContaining(inter.school.toString()));
});

//gets role from getRoles
test('gets role', () => {
    const intern = new Intern('Gracie', 22, 'gmmarcoux@gmail.com');

    expect(intern.getRole()).toEqual(expect.any(Intern));
});
