// 1.
// import manager, engineer, intern files with require()
const manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// import inquirer with require()
const inquirer = require('inquirer');

// import path with require()
const path = require('path');

// import fs with require()
const fs = require('fs');

// import util with require()
const util = require('util');

// 2.
// import page-template.js from subfoler src with require and assign it to a variable to be called later to render html
const renderHTML = require('./src/page-template');
const Manager = require('./lib/Manager');
const { createConnection } = require('net');

// Async functions
const writeFileAsync = util.promisify(fs.writeFile);
const appendFileAsync = util.promisify(fs.appendFile);

// 4.
// create an empty employee memeber array variable to store the employee members, manager, engineers, and interns
// create an empty employee id array to store the employee ids

const teamArray = [];
const teamString = ``;

// 5.
// print user of usage

console.log('Welcome to the team profile generator')
// 6.
// make call to create manager function to start the main process
createManager();

// 7.
// create manager function
// - ask the questions for name, id, email, office number for manager using inquirer
// - in the .then callback function, create manager object by instantiating Manager class instance, passing in name, id, office number as arguments to constructor
// - push the manager object to the employee member array
// - push the manager id to the employee id array
// - make call to the create team function

function createManager() {
    inquirer.prompt([
        {
            name: 'managerName',
            type: 'input',
            message: 'Please enter the managers name.'
        },
        {
            name: 'managerId',
            type: 'input',
            message: 'Please enter the managers id.'
        },
        {
            name: 'managerEmail',
            type: 'input',
            message: 'Please enter the managers email.'
        },
        {
            name: 'managerOfficeNumber',
            type: 'input',
            message: 'Please enter the managers office number.'
        }
    ])
    .then(answers => {
        const manager = new Manager(answers.managerName, answers.manageId, answers.managerEmail, answers.managerOfficeNumber);
        teamArray.push(manager);
        createTeam();
    })
}

// 8.
// create team function
// - prompt user with the list of choices for Engineer, Intern, or End of adding employee for the team
// - in .then callback function check what the user choice is and make call to the corresponding functions respectively
// - make call to add-engineer-function if the choice is engineer
// - make call to add-intern-function if choice is intern
// - make call to build-team function if choice is end of adding employee

function createTeam() {
    inquirer.prompt([
        {
            name: 'addEmployeePrompt',
            type: 'list',
            message: 'Please choose the role that is needed for the team.',
            choices: ['Manager', 'Engineer', 'Intern', 'Exit']
        }
    ])
    .then((response) => {
        if (response.addEmployeePrompt === 'Manager') {
            createManager();
        } else if (response.addEmployeePrompt === 'Engineer') {
            addEngineer();
        } else if (response.addEmployeePropmt === 'Intern') {
            addIntern();
        }
    })
};

// 8.
// add engineer function
// - prompt user with questions for engineer name, id, email, and github name
// - in .then callback create engineer object by instantiating Engineer class instance passing name, id, email, and github as arguments to class constructor
// - push engineer object to employee member array
// - push engineer id to employee id array
// - make call to create team function

function addEngineer() {
    inquirer.prompt([
        {
            name: 'engineerName',
            type: 'input',
            message: 'Please enter the engineers name.'
        },
        {
            name: 'engineerId',
            type: 'input',
            message: 'Please enter the engineers id.'
        },
        {
            name: 'engineerEmail',
            type: 'input',
            message: 'Please enter the engineers email.'
        },
        {
            name: 'engineerGithub',
            type: 'input',
            message: 'Please enter the engineers github username.'
        }
    ])
    .then(answers => {
        const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
        teamArray.push(engineer);
        createTeam();
    })
}

// 9.
// add intern function
// - prompt user with questions for intern name, id, email, and school
// - in .then callback create intern object by instantiating Intern class instance passing name, id, email, and school as arguments to class constructor
// - push intern object to employee member array
// - push intern id to employee id array
// - make call to create team function

function addIntern() {
    inquirer.prompt([
        {
            name: 'internName',
            type: 'input',
            message: 'Please enter the interns name.'
        },
        {
            name: 'internId',
            type: 'input',
            message: 'Please enter the interns id.'
        },
        {
            name: 'internEmail',
            type: 'input',
            message: 'Please enter the interns email.'
        },
        {
            name: 'internSchool',
            type: 'input',
            message: 'Please enter the interns school.'
        }
    ])
    .then(answers => {
        const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
        teamArray.push(intern);
        createTeam();
    })
}

// 10.
// build team function
// - check existing of dist subfolder
// - if not exist, create the dist subfolder
// - make call to imported render function passing employee member array as argument and assign returned html to a variable
// - make call to fs write file function passing the html file path, html variable

function buildTeam() {
    console.log('Team has been built')
    fs.writeFileSync(outputPath, generateTeam(teamArray), 'UTF-8')
}


