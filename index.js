const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [


];


inquirer.prompt([
  {
    type: 'input',
    name: 'Description',
    message: 'What is your name?',
  },
  {
    type: 'input',
    name: 'Installation',
    message: 'How can your application be installed',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'What is the usage of your application',
  },
  {
    type: 'input',
    name: 'Licsence',
    message: 'Do you have a licsence for your application?',
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'What extneral contributions were made to your application?',
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'What extneral contributions were made to your application?',
  },
])



// function to write README file
function writeToFile(fileName, data) {
}



// function to initialize program
function init() {

}

// function call to initialize program
init();


// copied code

// // importing the fs file system node module
// const fs = require('fs');

// // log.txt name of the file being processed
// // process argv adds to the file
// // (err) 
// fs.appendFile('readme.md', `${process.argv[2]}\n`, (err) =>
//   // if error logs error, if not error logs message
//   err ? console.error(err) : console.log('Commit logged!')
// );