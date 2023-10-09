function generateMarkdown(data) {
    // Generates markdown content
    return `# ${data.title}
    
## Description
${data.description}

## Table of Contents

- *[Description](#description)
- *[Installation](#installation)
- *[Usage](#usage)
- *[License](#license)
- *[Badges](#badges)
- *[Contribution](#contribution)
- *[Tests](#tests)
- *[Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${data.license}

## Badges
${data.badges}

## Contribution
${data.contributi}

## Tests
${data.tests}

## Questions
If you have any questions, you can contact me at:

Github: https://github.com/${data.github}
Email: ${data.email}
    `
}

module.exports = {generateMarkdown};
