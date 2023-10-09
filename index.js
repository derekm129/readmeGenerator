const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown").generateMarkdown;

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
    {
      type: 'input',
      name: 'github',
      message: 'What is your github username?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
    },

    {
      type: 'input',
      name: 'badges',
      message: 'What badges, if any, does your project have? Press ENTER to skip.',
    },

    {
      type: 'list',
      name: 'license',
      message: 'What license does your project have?',
      choices: ["MIT", "APACHE2.0", "GPLv3", "None"]
    },
  ];

  // Write README.md file
 function writeToFile(questions) {
  const markdown = generateMarkdown(questions);
  fs.writeFileSync("./dist/README.md", markdown);
 };

//  InitializeApp
function generateREADME() {
  inquirer.prompt(questions)
  .then((response) => {
    console.log("Creating README file...");
    writeToFile(response);
  });
};

generateREADME();


