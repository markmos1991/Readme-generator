// function to generate markdown for README
// link to license?

function generateMarkdown(data) {
  return `# ${data.title}
  
  ${renderBadge(data.license)}

  ### Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributions](#contributions)
* [Tests](#tests)
* [Questions](#questions)
* [Github Email](#Github_Profile)
  
  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributions
  ${data.contributions}

  ## Tests
  ${data.tests}


  <a href="https://github.com/${data.github}">${data.github}</a>

`;
}

function renderBadge(license){
  switch (license){
    case 'GNU AGPLv3':
      return '![License: AGPL v3](https://img.shields.io/badge/GNU-Licsence-blue)'
      case 'Mozilla Public License 2.0':
        return '![License: GPL v3](https://img.shields.io/badge/Mozilla-Licsence-yellow)'
      case 'MIT License':
        return '![License: MIT](https://img.shields.io/badge/MIT-Licsence-green)'
      case 'No licesne':
        return ''
  }
}


module.exports = generateMarkdown;

