const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();


// copied code

// importing the fs file system node module
const fs = require('fs');

// log.txt name of the file being processed
// process argv adds to the file
// (err) 
fs.appendFile('readme.md', `${process.argv[2]}\n`, (err) =>
  // if error logs error, if not error logs message
  err ? console.error(err) : console.log('Commit logged!')
);