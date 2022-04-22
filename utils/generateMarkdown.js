// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
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

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
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

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'none') {
    return '';
  } else {
    const licenseBadge = renderLicenseBadge(license);
    const licenseLink = renderLicenseLink(license);
    return `
---
  ## License

  This project is licensed under a [${license}](${licenseLink}).
  ${licenseBadge}
`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseSection = renderLicenseSection(data.projLicense);
  let tocLicense = '';
  if (data.projLicense !== 'none') {
    tocLicense = `
  - [License](#license)`;
  }
  return `
  # ${data.projTitle}

  ## Description

  ${data.projDesc}

---
  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)${tocLicense}
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
  ${licenseSection}
---
  ## Questions

  Check out my [GitHub profile](${data.githubProfile}).

  For additional questions about this project, please reach out to me at <${data.email}>`;
}

module.exports = generateMarkdown;
