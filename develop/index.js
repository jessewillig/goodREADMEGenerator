const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generatemarkdown = require('./utilities/generatemarkdown.js');

const questions = [
    {
        type: 'input',
        message: 'What is the name of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Write a description on your project.',
        name: 'description',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
    },
    {
        type: 'input',
        name: 'install',
        message: 'What command should be run to install dependencies?',
        default: "npm i",
    },
    {
        type: 'input',
        name: 'test',
        message: "What command should be run to run tests?",
        default: "npm test",
    },
    {
        type: 'input',
        name: 'usage',
        message: "What does the user need to know about using the repo?",
    },
    {
        type:'input',
        name: 'contributing',
        message: "What does the user need to know about contributing to the repo?",
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'github',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    }
];

function writeFile (fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
};

function init () {
    inquirer.prompt(questions)
    .then(res => {
        writeFile("README.md", generatemarkdown({...res}))
    });
};

init();