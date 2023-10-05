const inquirer = require('inquirer');
const fs = require('fs');

const generateReadme = ({ title, description, installation, usage, guidelines, testInstructions }) => 
  `#{title}

  // ## Description

  // ## Table of Contents
  
  // ## Installation
  
  // ## Usage
  
  // ## License
  
  // ## Contributing

  // ## Tests
  
  // ## Questions

  // ';

inquirer
  .prompt([
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
      message: 'Enter contrbution guidelines.',
    },
    {
      type: 'input',
      name: 'testInstructions',
      message: 'Enter test instructions.',
    },
  ])

  .then((answers) => {
    const readmePageContent = generateReadme(answers);

    fs.writeFile('readme.md', readmePageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README!')
    );
  });
