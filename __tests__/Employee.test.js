const Employee = require('../lib/Employee.js');
const id = 17;
const name = 'Kelly';
const email = 'kelwacker@gmail.com';

// create new employee / blank
test("create new employee", () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe("object");
});

// test create object / info
test('create new employee with info', () => {
    const employee = new Employee(id, name, email);
    
    expect(employee.id).toBe(id);
    expect(employee.name).toBe(name);
    expect(employee.email).toBe(email);
});

// get employee id
test('get employee id', () => {
    const employee = new Employee(id, name, email);
    expect(employee.getId()).toBe(id);
});

// get employee name
test('get employee name', () => {
    const employee = new Employee(id, name, email);
    expect(employee.getName()).toBe(name);
});

// get employee email
test('get employee email', () => {
    const employee = new Employee(id, name, email);
    expect(employee.getEmail()).toBe(email);
});

test('get employee name', () => {
    const employee = new Employee(id, name, email);
    expect(employee.getRole()).toBe('Employee');
});
