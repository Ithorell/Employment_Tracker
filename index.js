const inquirer = require('inquirer');
const fs = require ('fs')
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');
const generateHTML = require('./src/index.js');
const employee =  [];

const writeFile = (data) => {
    return new Promise ((resolve, reject) => {
        fs.writeFile('./dist/index.html', data, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    })
};

const init = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'What is the Managers name',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a name');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the Managers id?',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter a id');
                    return false;
                }
            }},
            {
                type: 'input',
                name: 'email',
                message: 'What is the Managers email?',
                validate: emailInput => {
                    if (emailInput) {
                        return true;
                    }
                    else {
                        console.log('Please enter a email');
                        return false;
                    }
                },
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: 'What is the Managers office number?',
                validate: officeNumberInput => {
                    if (officeNumberInput) {
                        return true;
                    }
                    else {
                        console.log('Please enter a office number');
                        return false;
                    }
                },
            },
            {
                type: 'list',
                name: 'addEmployee',
                message: 'Would you like to add an employee?',
                choices: ['Engineer', 'Intern', 'No'],
            },
        ]),
        then(data => {
            const manager = new Manager(data.name, data.id, data.email, data.officeNumber);
            employee.push(manager);
            if (data.addEmployee === 'Engineer') {
                return addEngineer();
            }
            else if (data.addEmployee === 'Intern') {
                return addIntern();
            }
            else {
                return employee;
            }
        })};

const addEngineer = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'What is the Engineers name',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a name');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the Engineers id?',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter a id');
                    return false;
                }
            }},
            {
                type: 'input',
                name: 'email',
                message: 'What is the Engineers email?',
                validate: emailInput => {
                    if (emailInput) {
                        return true;
                    }
                    else {
                        console.log('Please enter a email');
                        return false;
                    }
                },
            },
            {
                type: 'input',
                name: 'github',
                message: 'What is the Engineers github?',
                validate: githubInput => {
                    if (githubInput) {
                        return true;
                    }
                    else {
                        console.log('Please enter a github');
                        return false;
                    }
                },
            },
            {
                type: 'list',
                name: 'addEmployee',
                message: 'Would you like to add an employee?',
                choices: ['Engineer', 'Intern', 'No'],
            },
        ]),
        then(data => {
            const engineer = new Engineer(data.name, data.id, data.email, data.github);
            employee.push(engineer);
            if (data.addEmployee === 'Engineer') {
                return addEngineer();
            }
            else if (data.addEmployee === 'Intern') {
                return addIntern();
            }
            else {
                return employee;
            }
        })};

const addIntern = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'What is the Interns name',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a name');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the Interns id?',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter a id');
                    return false;
                }
            }},
            {
                type: 'input',
                name: 'email',
                message: 'What is the Interns email?',
                validate: emailInput => {
                    if (emailInput) {
                        return true;
                    }
                    else {
                        console.log('Please enter a email');
                        return false;
                    }
                },
            },
            {
                type: 'input',
                name: 'school',
                message: 'What is the Interns school?',
                validate: schoolInput => {
                    if (schoolInput) {
                        return true;
                    }
                    else {
                        console.log('Please enter a school');
                        return false;
                    }
                },
            },
            {
                type: 'list',
                name: 'addEmployee',
                message: 'Would you like to add an employee?',
                choices: ['Engineer', 'Intern', 'No'],
            },
        ]),
        then(data => {
            const intern = new Intern(data.name, data.id, data.email, data.school);
            employee.push(intern);
            if (data.addEmployee === 'Engineer') {
                return addEngineer();
            }
            else if (data.addEmployee === 'Intern') {
                return addIntern();
            }
            else {
                return employee;
            }
        })};

init()
    .then(employee => {
        return generateHTML(employee);
    })
    .catch(err => {
        console.log(err);
    });
