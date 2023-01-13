function eCard(employee) {
    let role = employee.getRole();
    let roleInfo = "";
    if (role === "Manager") {
        roleInfo = `Office Number: ${employee.getOfficeNumber()}`;
    } else if (role === "Engineer") {
        roleInfo = `Github: <a href="https://github.com/${employee.getGithub()}" target=_"blank">${employee.getGithub()} </a>`
};
    return `
    <div class="card" style="width: 18rem;">
        <div class="card-header">
            <h2>${employee.getName()}</h2>
            <h3>${employee.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group list-group-flush">
                <li class="list-group">
                    ID: ${employee.getId()}
                </li>
                <li class="list-group>
                    Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a>
                </li>
                <li class="list-group
                    ${roleInfo}
                </li>
            </ul>
        </div>
    </div>
    `
}
const Employee = require("./employee");
const Manager = require("./manager");
const Engineer = require("./engineer");
const Intern = require("./intern");


function generateHTML(data) {
    const cards = [];
    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();
        if (role === "Manager") {
            const managerCard = eCard(employee);
            cards.push(managerCard);
        } else if (role === "Engineer") {
            const engineerCard = eCard(employee);
            cards.push(engineerCard);
        } else if (role === "Intern") {
            const internCard = eCard(employee);
            cards.push(internCard);
        }
    }
    const employeeCards = cards.join("")
    const generateTeam = generateTeamPage(employeeCards);
    return generateTeam;
}
