const Manager = require('../lib/Manager.js');
const office = 1

// create manager
test('create new manager', () => {
    const manager = new Manager(17, 'Kelly', 'kelwacker@gmail.com', office);
    expect(manager.office).toBe(office);
});

// gets office
test('gets school', () => {
    const manager = new Manager(17, 'Kelly', 'kelwacker@gmail.com', office);
    expect(manager.getOfficeNumber()).toBe(office);
});

// gets role
test('gets role', () => {
    const manager = new Manager(17, 'Kelly', 'kelwacker@gmail.com', office);
    expect(manager.getRole()).toBe('Manager');
});