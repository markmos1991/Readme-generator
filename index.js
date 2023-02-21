
const generateMarkdown = require("./utils/generateMarkdown");

// External packages
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

// array of questions for user
const questions = [
    {
        type: 'input',
        message: "What is your project title?",
        name: 'title',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid project title is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "Write a description of your project.",
        name: 'description',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid project description is required.");
            }
            return true;
        }
    },
    
    {
      type: 'input',
      message: "What is your Github username?",
      name: 'github'
  },
    {
        type: 'input',
        message: "Describe the steps required to install your project for the Installation section.",
        name: 'installation'
    },
    {
        type: 'input',
        message: "Provide instructions and examples of your project in use for the Usage section.",
        name: 'usage'
    },
    {
        type: 'input',
        message: "Provide guidelines on how other developers can contribute to your project.",
        name: 'contributions'
    },
    {
        type: 'input',
        message: "Provide any tests written for your application and provide examples on how to run them.",
        name: 'tests'
    },
    {
        type: 'list',
        message: "Choose a license for your project.",
        choices: ['GNU AGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'No license'],
        name: 'license'
    }
];






// function call to initialize program
init = () => {
  inquirer.prompt(questions)
.then((answers) => {
  const readmeDoc = generateMarkdown(answers)


// function to write README file
fs.writeFile('readme.md', readmeDoc, (err) => {
  if (err) throw err;
  console.log('Done');
});
})
.catch((error) => {
console.log(error);
});


}

init();
