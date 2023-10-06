const inquirer = require('inquirer');
const fs = require('fs');
// import build-in path module
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

// Questions for user
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is your project Title?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter a Description for your project.',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Enter installation instructions for your project.',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Enter usage information.',
    },
    {
      type: 'input',
      name: 'guidelines',
      message: 'Enter contribution guidelines.',
    },
    {
      type: 'input',
      name: 'testInstructions',
      message: 'Enter test instructions.',
    },
  ];

  // Write README.md file
 function writeToFile(filename, data) {
  return fs.writeFileSync(path.join(process.cwd(), filename), data);
 }

//  InitializeApp
function init() {
  inquirer.prompt(questions).then((responses) => {
    console.log("Creating README file...");
    writeToFile("./dist/README.md", generateMarkdown({...responses}));
  });
};

init();