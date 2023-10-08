function generateMarkdown(data) {
    // Generates markdown content
    return `# ${data.title}
    
    ## Description
    ${data.description}

    ## Installation
    ${data.installation}

    ## Usage
    ${data.usage}

    ## How to Contribute
    ${data.guidelines}

    ## Tests
    ${data.tests}
    `
}

module.exports = {generateMarkdown};
