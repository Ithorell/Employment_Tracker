const manager = require ('../lib/manager');

test('creates a manager object', () => {
    const manager = new Manager('John', 1, 'Johnsemail@gmail.com', '01');

    expect(manager.getName().toBe('John'));
    expect(manager.getId().toBe(1));
    expect(manager.getEmail().toBe('Johnsemail@gmail.com'));
    expect(manager.getOfficeNumber().toBe('01'));
});