const Engineer = require("../lib/engineer");

test("creates an engineer object", () => {
    const engineer = new Engineer('Jimbo Glover', 4, 'JG@gmail.com');

    expect(engineer.getName().toBe('Jimbo Glover'));
    expect(engineer.getId().toBe(4));
    expect(engineer.getEmail().toBe('JG@gmail.com'));
    expect(engineer.getGithub().toBe('JGlover'));
});
