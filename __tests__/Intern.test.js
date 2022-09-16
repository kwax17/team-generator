const Intern = require('../lib/Intern.js');
const school = 'Rutgers';

// create intern
test('create new intern', () => {
    const intern = new Intern(17, 'Kelly', 'kelwacker@gmail.com', school);
    expect(intern.school).toBe(school);
});

// gets school
test('gets school', () => {
    const intern = new Intern(17, 'Kelly', 'kelwacker@gmail.com', school);
    expect(intern.getSchool()).toBe(school);
});

// gets role
test('gets role', () => {
    const intern = new Intern(17, 'Kelly', 'kelwacker@gmail.com', school);
    expect(intern.getRole()).toBe('Intern');
});