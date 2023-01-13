const intern = require('../lib/intern');

test('creates an intern object', () => {
    const intern = new Intern('James hoover', 1, 'JamesH@gmail.com', 'Utah Valley university');

    expect(intern.getName().toBe('James hoover'));
    expect(intern.getId().toBe(1));
    expect(intern.getEmail().toBe('JamesH@gmail.com'));
    expect(intern.getSchool().toBe('Utah Valley university'));
});

