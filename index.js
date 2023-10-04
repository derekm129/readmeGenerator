const inquirer = require('inquirer');
const fs = require('fs');

// const generateREADME = ({ name, location, github, linkedin }) =>
 

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
//   .then((answers) => {
//     const htmlPageContent = generateHTML(answers);

//     fs.writeFile('index.html', htmlPageContent, (err) =>
//       err ? console.log(err) : console.log('Successfully created index.html!')
//     );
//   });
