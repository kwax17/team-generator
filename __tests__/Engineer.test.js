const Engineer = require('../lib/Engineer.js');
const github = 'kwax17';

// create engineer
test('create new engineer', () => {
    const engineer = new Engineer(17, 'Kelly', 'kelwacker@gmail.com', github);
    expect(engineer.github).toBe(github);
});

// gets github
test('gets github', () => {
    const engineer = new Engineer(17, 'Kelly', 'kelwacker@gmail.com', github);
    expect(engineer.getGithub()).toBe(github);
});

// gets role
test('gets role', () => {
    const engineer = new Engineer(17, 'Kelly', 'kelwacker@gmail.com', github);
    expect(engineer.getRole()).toBe('Engineer');
});