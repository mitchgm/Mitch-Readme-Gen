function renderLicenseBadge(data) {
  const dsiredLicenseForProj = data.license;
  let badge = "";
  if (dsiredLicenseForProj === 'None') {
    return badge;
  }
  if (dsiredLicenseForProj === "MIT") {
    badge = "[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    return badge;
  }
  if (dsiredLicenseForProj === "Apache") {
    badge =
      "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      return badge;
  }
  if (dsiredLicenseForProj === "Boost") {
    badge =
      "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
      return badge;
  }
};

function renderLicenseSection(data) {
  const dsiredLicenseForProj = data.license;
  if(dsiredLicenseForProj === 'None') {
    return "";
  } else {
    return `# License
${renderLicenseBadge(data)}`;
  }
};
 
function renderLicenseTableOfContents(data) {
   const dsiredLicenseForProj = data.license;
   if(dsiredLicenseForProj === 'None') {
     return "";
   } else {
     return "* [License](#license)";
   }
};
 

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## https://github.com/${data.github}/${data.title}
# Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
${renderLicenseTableOfContents(data)}
* [Contributing](#contributions)
* [Tests](#test)
* [Questions](#questions)
# Description
${data.description}
# Installation
${data.installation}
# Usage
In order to use this app ${data.usage}
${renderLicenseSection(data)}
# Contributions
Contribtions ${data.contribution}
# Tests
${data.test}
# Questions
If you have any questions about tge repository contact ${data.contribution} at: ${data.email}
`;
};

module.exports = generateMarkdown;
