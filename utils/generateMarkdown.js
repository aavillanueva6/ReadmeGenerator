/**
 * if no license was selected this returns an empty string.  Otherwise, it pulls a formatted string for the correct license out of the licenseBadgeObj object.
 * @param {string} license
 * @returns
 */
function renderLicenseBadge(license) {
  if (license === 'none') {
    return '';
  } else {
    const licenseBadgeObj = {
      'MIT License': `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`,
      'GNU GPL v3': `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`,
      'ISC License (ISC)': `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`,
      'Creative Commons Attribution 4.0 International License': `[![License: CC BY 4.0](https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)`,
    };
    return licenseBadgeObj[license];
  }
}

/**
 * if no license was selected this returns an empty string.  Otherwise, it pulls a formatted string for the correct license out of the licenseLinkObj object.
 * @param {string} license
 * @returns
 */
function renderLicenseLink(license) {
  if (license === 'none') {
    return '';
  } else {
    const licenseLinkObj = {
      'MIT License': `https://opensource.org/licenses/MIT`,
      'GNU GPL v3': `https://www.gnu.org/licenses/gpl-3.0`,
      'ISC License (ISC)': `https://opensource.org/licenses/ISC`,
      'Creative Commons Attribution 4.0 International License': `https://creativecommons.org/licensesby/4.0/`,
    };
    return licenseLinkObj[license];
  }
}

/**
 * Builds the Table of Contents link for the License, if a license was selected.
 * @param {string} license
 * @returns string
 */
function renderLicenseTableOfContents(license) {
  if (license === 'none') {
    return '';
  } else {
    return `
  - [License](#license)`;
  }
}

/**
 * if no license was selected this returns an empty string.  Otherwise, it builds a formatted string for the correct license by calling the previous two functions, and using their result in a string template.
 * @param {string} license
 * @returns string
 */
function renderLicenseSection(license) {
  if (license === 'none') {
    return '';
  } else {
    const licenseLink = renderLicenseLink(license);
    return `
---
  ## License

  This project is licensed under a [${license}](${licenseLink}).
`;
  }
}

/**
 * Create a function to generate markdown for README
 * @param {Object} data
 * @returns string
 */
function generateMarkdown(data) {
  // const licenseSection = renderLicenseSection(data.projLicense);

  // returns formatted text string for use in markdown file.
  return `
  # ${data.projTitle}

${renderLicenseBadge(data.projLicense)}

  ## Description

  ${data.projDesc}

---
  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)${renderLicenseTableOfContents(data.projLicense)}
  - [Questions](#questions)

---
  ## Installation

  ${data.projInstall}

---
  ## Usage

  ${data.projUsage}

---
  ## Contributing

  ${data.projContr}

---
  ## Tests

  ${data.projTest}
  ${renderLicenseSection(data.projLicense)}
---
  ## Questions

  Check out my [GitHub profile](https://github.com/${data.githubProfile}).

  For additional questions about this project, please reach out to me at <${
    data.email
  }>`;
}

// exports the generateMarkdown function for use in other js files
module.exports = generateMarkdown;
