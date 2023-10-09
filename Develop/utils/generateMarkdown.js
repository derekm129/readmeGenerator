function getLicenseBadgeUrl(license) {
    switch (license) {
        case 'MIT':
            return 'https://img.shields.io/badge/License-MIT-yellow.svg';
        case 'APACHE2.0':
            return 'https://img.shields.io/badge/License-Apache_2.0-blue.svg';
        case 'GPLv3':
            return 'https://img.shields.io/badge/License-LGPL_v3-blue.svg';
        default:
            return '';
    }
}

// Generates markdown content
function generateMarkdown(data) {
    const licenseBadgeUrl = getLicenseBadgeUrl(data.license);

    return `# ${data.title}
![License](${licenseBadgeUrl})
    
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
${data.contribution}

## Tests
${data.tests}

## Questions
If you have any questions, you can contact me at:

Github: https://github.com/${data.github}
Email: ${data.email}
    `
}

module.exports = {generateMarkdown};
