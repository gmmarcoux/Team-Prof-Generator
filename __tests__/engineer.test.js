//name, id, email, getName, GetId, getEmail, getRole + github, getGithub
const Engineer = require('../lib/Engineer');

//object
test('creates engineer object', () => {
    const engineer = new Engineer('Gracie', 22, 'gmmarcoux@gmail.com');

    expect(engineer.github).toEqual(expect.any(String));
});

//github from github()
test('gets the github value of an engineer', () => {
    const engineer = new Engineer('Gracie', 22, 'gmmarcoux@gmail.com');
    
    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

//overrides role
test('gets role of employee', () => {
    const engineer = new Engineer('Gracie', 22, 'gmmarcoux@gmail.com');

    expect(engineer.getRole()).toEqual("Engineer");
});
