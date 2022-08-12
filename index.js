// TODO: Include packages needed for this application
const fs = require("fs")
const inquirer = require("inquirer")
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    name: "title",
    message: "What is the title of your project?"
},
{
    type: "input",
    name: "description",
    message: "Give a detailed description on your project?"
},
{
    type: "input",
    name: "installation",
    message: "What dependancies did you install for this project?"
},
{
    type: "input",
    name: "usage",
    message: "What are the steps to get this project running?"
},
{
    type: "list",
    name: "license",
    message: "which license does your project use?",
    choices: ["None", "MIT", "Apache", "Boost"]
},
{
    type: "input",
    name: "contribution",
    message: "Who contributed to this project?"
},
{
    type: "input",
    name: "test",
    message: "What did you use to test your project?"
},
{
    type: "input",
    name: "github",
    message: "What is your github username?"
},
{
    type: "input",
    name: "email",
    message: "What is your email address?"
}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        console.log(data)
        if (err) {
            console.log(err)
        } else {
            console.log("README succesfully created")
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        writeToFile("README.md", generateMarkdown(data));
        console.log(data)
    })
}

// Function call to initialize app
init();
