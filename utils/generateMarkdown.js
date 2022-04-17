// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;

// the below template literal is my first attempt at building out the Readme template.  I used the README.md from a previous project as a starting point.
/*

`# PROJECT_TITLE

## Purpose and Functionality

DESCRIPTION_TEXT

---

## Key Learnings

KEY_LEARNING_TEXT

---

## Deployed Site

The deployed site is hosted on github pages at the following link:

DEPLOYED_SITE_LINK

---

## Screenshots

SCREENSHOT_DESCRIPTION

![SCREENSHOT_ALT_TEXT](SCREENSHOT_PATH)

---

## Known Bugs

BUG_LIST

---

## Future Improvements

IMPROVEMENT_LIST

---

## License

LICENSE_INFO

---
`;

*/
