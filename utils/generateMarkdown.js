// Function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  
  let badge = "";

  switch (license) {
    case 'MIT':
      badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]';
      break;
    case 'WTFPL':
      badge = '[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)]';
      break;
    case 'GNU General Public License V3':
      badge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]';
      break;
    case 'ISC':
      badge = '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]';
      break;
    default:
      badge = ""; // an empty string
  }

  return badge;
}

// Function that returns the license link
function renderLicenseLink(license) {

  let link = "";

  switch (license) {
    case 'MIT':
      link = '(https://opensource.org/licenses/MIT)';
      break;
    case 'WTFPL':
      link = '(http://www.wtfpl.net/about/)';
      break;
    case 'GNU General Public License V3':
      link = '(https://www.gnu.org/licenses/gpl-3.0)';
      break;
    case 'ISC':
      link = '(https://opensource.org/licenses/ISC)';
      break;
    default:
      link = ""; // an empty string
  }

  return link;
}

// Function to generate markdown for README
function generateMarkdown(data) {
 
  return `# ${data.title}

  ## Descriptoin

  ${data.description}

  ${renderLicenseBadge(data.license)}${renderLicenseLink(data.license)}

  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Contributions](#contributions)
  - [Testing](#tests)
  - [Questions](#questions)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Credits 

  ${data.credits}

  ## License

  Covered under ${data.license} license.

  ## Contributions

  ${data.contributions}

  ## Tests

  ${data.test}

  ## Questions

  My github is https://github.com/${data.github}.  
  If you have questions please emal me at ${data.email}.  
`;
}

module.exports = generateMarkdown;