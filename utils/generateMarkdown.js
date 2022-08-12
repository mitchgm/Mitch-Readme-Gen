function renderbadge(data) {
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



function renderLicenseLink(data) {}


function renderLicenseSection(data) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
# Description
${data.description}
# Installation
${data.installation}
# Usage
${data.usage}
# License
${renderbadge(data)}
`;
}

module.exports = generateMarkdown;
