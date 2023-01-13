const Employee = require("../lib/employee");

test('creates an employee object', () => {
    const employee = new Employee('Joseph Hodges', 6, 'JoHodge@gmail.com');

    expect(employee.getName().toBe('Joseph Hodges'));
    expect(employee.getId().toBe(6));
    expect(employee.getEmail().toBe('JoHodge@gmail.com'));

});
