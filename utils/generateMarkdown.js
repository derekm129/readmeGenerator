function generateMarkdown(data) {
    return 
    `# ${data.title}
    
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
    `;
}