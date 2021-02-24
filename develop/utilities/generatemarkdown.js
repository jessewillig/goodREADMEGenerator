// If there is no license, return an empty string
function renderLicenseBadge (license) {
  if (license !== "None") {
    return `![License](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }; 
    return " ";
};

// If there is no license, return an empty string
function renderLicenseLink (license) {
  if (license !== "None") {
    return `[License](#license)`;
  };
    return " ";
};

// If there is no license, return an empty string
function renderLicenseSection (license) {
  if (license !== "None") {
    return `This project is licensed under ${license} license`;
  };
    return " ";
};

function generatemarkdown (data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Desciption 
  ${data.description}

  ## Table of contents
  * [Installation](#installation)
  * [Usage]()
  * [Contrubuting]()
  ${renderLicenseLink(data.license)}
  * [Tests]()
  * [Questions]()

  ## Installation 
  ${data.install}

  ## Usage
  ${data.usage}

  ## Contrubuting
  ${data.contributing}

  ## License
  ${renderLicenseSection(data.license)}

  ## Tests
  ${data.test}

  ## Questions
  * [${data.github}](https://github.com/${data.github})
  * [${data.email}](mailto:${data.email})
  `;
  };
  
  module.exports = generatemarkdown;