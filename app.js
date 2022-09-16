const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "index.html");

const render = require("./src/generateHTML.js");

const teamMembers = [];
const idArray = [];

function questions() {
    function createManager() {
      console.log("Please create your team");
      inquirer.prompt([
        {
            type: "input",
            name: "managerName",
            message: "What is the manager's name?",
            validate: answer => {
            if (answer !== "") {
                return true;
            }
            return "Please enter a name";
            }
        },
        {
            type: "input",
            name: "managerId",
            message: "What is the manager's id?",
            validate: answer => {
            const pass = answer.match(
                /^[1-9]\d*$/
            );
            if (pass) {
                return true;
            }
            return "Please enter a number";
            }
        },
        {
            type: "input",
            name: "managerEmail",
            message: "What is the manager's email?",
            validate: answer => {
            const pass = answer.match(
                /\S+@\S+\.\S+/
            );
            if (pass) {
                return true;
            }
            return "Please enter an email address.";
            }
        },
        {
            type: "input",
            name: "managerOffice",
            message: "What is the manager's office number?",
            validate: answer => {
            const pass = answer.match(
                /^[1-9]\d*$/
            );
            if (pass) {
                return true;
            }
            return "Please enter a number";
            }
        }
    ]).then(answers => {
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOffice);
        teamMembers.push(manager);
        idArray.push(answers.managerId);
        createTeam();
      });
    };

    function createTeam() {

        inquirer.prompt([
          {
            type: "list",
            name: "teamMember",
            message: "Which type of team member would you like to add?",
            choices: [
              "Engineer",
              "Intern",
              "None"
            ]
          }
        ]).then(userChoice => {
          switch (userChoice.teamMember) {
            case "Engineer":
              addEngineer();
              break;
            case "Intern":
              addIntern();
              break;
            default:
              buildTeam();
          }
        });
    };

    function addEngineer() {
        inquirer.prompt([
          {
            type: "input",
            name: "engineerName",
            message: "What is theengineer's name?",
            validate: answer => {
              if (answer !== "") {
                return true;
              }
              return "Please a name";
            }
          },
          {
            type: "input",
            name: "engineerId",
            message: "What is the engineer's id?",
            validate: answer => {
              const pass = answer.match(
                /^[1-9]\d*$/
              );
              if (pass) {
                if (idArray.includes(answer)) {
                  return "Please enter a different number.";
                } else {
                  return true;
                }
    
              }
              return "Please enter a number";
            }
          },
          {
            type: "input",
            name: "engineerEmail",
            message: "What is the engineer's email?",
            validate: answer => {
              const pass = answer.match(
                /\S+@\S+\.\S+/
              );
              if (pass) {
                return true;
              }
              return "Please enter an email address.";
            }
          },
          {
            type: "input",
            name: "engineerGithub",
            message: "What is the engineer's GitHub?",
            validate: answer => {
              if (answer !== "") {
                return true;
              }
              return "Please enter a valid username";
            }
          }
        ]).then(answers => {
          const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
          teamMembers.push(engineer);
          idArray.push(answers.engineerId);
          createTeam();
        });
    };

    function addIntern() {
        inquirer.prompt([
          {
            type: "input",
            name: "internName",
            message: "What is the intern's name?",
            validate: answer => {
              if (answer !== "") {
                return true;
              }
              return "Please enter a name";
            }
          },
          {
            type: "input",
            name: "internId",
            message: "What is the intern's id?",
            validate: answer => {
              const pass = answer.match(
                /^[1-9]\d*$/
              );
              if (pass) {
                if (idArray.includes(answer)) {
                  return "Please enter a different number.";
                } else {
                  return true;
                }
    
              }
              return "Please enter a number";
            }
          },
          {
            type: "input",
            name: "internEmail",
            message: "What is the intern's email?",
            validate: answer => {
              const pass = answer.match(
                /\S+@\S+\.\S+/
              );
              if (pass) {
                return true;
              }
              return "Please enter an email address.";
            }
          },
          {
            type: "input",
            name: "internSchool",
            message: "What is the intern's school?",
            validate: answer => {
              if (answer !== "") {
                return true;
              }
              return "Please enter a school";
            }
          }
        ]).then(answers => {
          const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
          teamMembers.push(intern);
          idArray.push(answers.internId);
          createTeam();
        });
    };

    function buildTeam() {
        // Create the output directory if the output path doesn't exist
        if (!fs.existsSync(OUTPUT_DIR)) {
          fs.mkdirSync(OUTPUT_DIR)
        }
        fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
    };
    
    createManager();
};

questions();