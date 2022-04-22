// pulls in required packages and utilities for this file
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// creates an array of questions / prompts for the user
const questions = [
  'What is the title of your project?',
  'Please provide a brief description of the project.',
  'What are the installation instructions?',
  'Please provide usage instructions for the project.',
  'How should other developers contribute to this project?',
  'Please provide test instructions for the project.',
  'Which license would you like to use for this project?',
  'Please provide your github profile url.',
  'If you would like other developers to reach out to you, please enter your email address.',
];

/**
 * function takes results from init function to use the file system package to create an md file with the formatted text
 * @param {string} fileName
 * @param {string} data
 */
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (err) {
    err ? console.error(err) : console.log('Success!');
  });
}

/**
 * Function to get user input from command line prompts using the inquirer package.
 */
function init() {
  inquirer
    .prompt([
      {
        type: 'input',
        message: questions[0],
        name: 'projTitle',
      },
      {
        type: 'input',
        message: questions[1],
        name: 'projDesc',
      },
      {
        type: 'input',
        message: questions[2],
        name: 'projInstall',
      },
      {
        type: 'input',
        message: questions[3],
        name: 'projUsage',
      },
      {
        type: 'input',
        message: questions[4],
        name: 'projContr',
      },
      {
        type: 'input',
        message: questions[5],
        name: 'projTest',
      },
      {
        type: 'list',
        message: questions[6],
        name: 'projLicense',
        choices: [
          'MIT License',
          'GNU GPL v3',
          'ISC License (ISC)',
          'Creative Commons Attribution 4.0 International License',
          'none',
        ],
      },
      {
        type: 'input',
        message: questions[7],
        name: 'githubProfile',
      },
      {
        type: 'input',
        message: questions[8],
        name: 'email',
      },
    ])
    .then(function (response) {
      let mdString = generateMarkdown(response);
      writeToFile(
        `${response.projTitle.split(' ').join('')}-README.md`,
        mdString
      );
    });
}

// Function call to initialize app
init();
