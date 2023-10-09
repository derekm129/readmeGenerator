function generateMarkdown(data) {
    // Generates markdown content
    return `# ${data.title}
    
## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## License
${data.license}

## Badges
${data.badges}

## How to Contribute
${data.guidelines}

## Tests
${data.tests}

## Questions
If you have any questions, you can contact me at:

Github: https://github.com/${data.github}
Email: ${data.email}
    `
}

module.exports = {generateMarkdown};
