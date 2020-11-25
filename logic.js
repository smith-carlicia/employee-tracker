//Create a SELECT - DELETE - UPDATE - INSERT
const inquirer = require("inquirer");
const mysql = require("mysql");
const connection = require("./db/connection");
// const db = require("./db/db");
const consoleTable = require("console.table");
const employeeInput = [];




async function init(){
     inquirer.prompt({
       type: "list",
             name: "options",
             message: "What would you like to do?",
             choices: [
             "View Employees", 
             "View All Employees by Department", 
             "View All Employees by Role",
             "View All Emplyees by Manager",
             "Add Employee", 
             "Add Role",
             "Add Department",
             "Remove Employee", 
             "Update Employee Role", 
             "Update Employee Manager"
          ]
     }).then((choices) => {
          console.log(init)
          switch(choices.options) {
          case "View Employees":
               viewEmployees();
               break;
          case "View All Employees by Department":
               viewDepartment();
               break;
          case "View All Employees by Role":
               viewRole();
               break;
          case "View All Employees by manager":
               viewManager();
               break;
          case "Add Employee":
               addEmployee();
               break;
          case "Add Role":
               addRole();
               break;
          case "Add Department":
               addDepartment();
               break;
          case "Remove Employee":
               removeEmployee();
               break;
          case "Update Employee Role":
               updateRole();
               break;
          case "Update Manager Role":
               updateManager();
               break;
          }
     });
 };




 async function viewEmployees() {
     console.log("Selecting all employee...\n");
     connection.query("SELECT * FROM employee", function(err, res) {
       if (err) throw err;
       // Log all results of the SELECT statement
       console.table(res);
       init();
     }
)};

 async function viewDepartment() {
     console.log("Selecting all department...\n");
     connection.query("SELECT * FROM department", function(err, res) {
       if (err) throw err;
       // Log all results of the SELECT statement
       console.table(res);
       init();
     }
 )};

 async function viewRole() {
     console.log("Selecting all role...\n");
     connection.query("SELECT * FROM role", function(err, res) {
       if (err) throw err;
       // Log all results of the SELECT statement
       console.table(res);
       init();
     }
)};


 async function viewManager() {
     console.log("Selecting all manager...\n");
     connection.query("SELECT * FROM manager", function(err, res) {
       if (err) throw err;
       // Log all results of the SELECT statement
       console.table(res);
       init();
     }
)};




 async function addEmployee() {
     inquirer.prompt([{
          type:"input",
          message:"What is the employee's id?",
          name:"addEmployeeOptions",
     },
     {
         type:"input",
         message:"What is the employees first name?",
         name:"employeeFirstName", 
     },
     {
          type:"input",
          message:"What is the employees last name?",
          name: "employeeLastName",
     },
     {
          type:"list",
          message:"What is the employees role?",
          name: "employeeRole",
          choices: [
               "Sales Lead",
               "Salesperson",
               "Lead Engineer",
               "Software Engineer",
               "Account Manager",
               "Accountant",
               "Legal Team Lead",
          ],
     },
     {
          type:"list",
          message:"Who is the employees manager?",
          name: "employeeManager",
          choices: [
               "John Doe",
               "Mike Chan",
               "Ashley Rodriguez",
               "Kevin Tupik",
               "Malia Brown",
               "Sarah Lourd",
          ],
     }]).then(answers => {
          console.log(answers);
          let role = role.find(obj => obj.title === answers.employee);
          let manager = managers.find(obj => obj.Manager === answers.manager);
          db.query("INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?)", [[answers.firstName.trim(), answers.lastName.trim(), positionDetails.id, manager.id]]);
          console.log(`${answers.firstName} was added to the employee database!`);
          console.log(`${answers.lastName} was added to the employee database!`);
          addEmployee();
     })
};

async function addRole() {
     inquirer.prompt([
     {
          type:"input",
          message:"Add role.",
          name:"roleInput",
     },
     {
          type:"input",
          message:"Add role salary",
          name:"roleSalary",
     },
     {
          type:"list",
          message:"Select role department",
          name:"addEmployeeOptions",
          choices: [
               "Sales",
               "Engineering",
               "Finance",
               "Legal",
          ]
     },
     ]).then(answers => {
          // let depID = department.find(obj => obj.name === answers.addEmployeeOptions).id
          db.query("INSERT INTO role (title, salary, department_id) VALUES (?)", [[answers.roleInput, answers.roleSalary, depID]]);
          console.log(`${answers.roleInput} was added. Department: ${answers.addEmployeeOptions}`);
          addRole();

     })
};

async function addDepartment() {
     inquirer.prompt([
     {
          type:"input",
          message:"Enter department name.",
          name:"departmentName",
     }
     ]).then(answers => {
          db.query("INSERT INTO department (name) VALUES (?)", [answers.departmentName]);
          console.log(`${answers.departmentName} was added to departments.`);
          addDepartment();
     }).then(answers => {
          db.query("INSERT INTO department (name) VALUES (?)", [answers.depName]);
          console.log(`${answers.depName} was added to departments.`);
          addDepartment();
     })
};


 async function removeEmployee() {
     console.log("Deleting employee...\n");
     connection.query(
       "DELETE FROM products WHERE ?",
      
       function(err, res) {
         if (err) throw err;
         console.log(res.affectedRows + " employee deleted!\n");
         // Call readProducts AFTER the DELETE completes
         readEmployee();
     })
};




async function readEmployee() {
     console.log("Selecting all employee...\n");
     connection.query("SELECT * FROM employee", function(err, res) {
       if (err) throw err;
       // Log all results of the SELECT statement
       console.log(res);
       removeEmployee();
     })
};




 async function updateRole() {
     console.log("Selecting all role..\n");
     connection.query("SELECT * FROM role", function(err, res) {
       if (err) throw err;
       // Log all results of the SELECT statement
       console.log(res);
     })
};

async function updateManager() {
     console.log("Selecting all manager...\n");
     connection.query("SELECT * FROM manager", function(err, res) {
       if (err) throw err;
       // Log all results of the SELECT statement
       console.log(res);
     })
};

init();
 //End Goal (Methods needed)
 //async function 
 //update method: 
//  async function updateMethod(){
     //create const that calls the findallMethod
     // const emplyeeAll = await db.findAllEmpMethod();

       //store the desired data in a reuseable "container"
     // const clientOptions = employees.map(({id, first_name ,last})=> ({
     //     name: `${first_name} ${last}`,
     //     value: id
     // }));

     //employee update method
//      const {employeeID} = await prompt ([
//          {
//              type: "list",
//              name: "employeeId",
//              message: "which employee manager would you like to update? ",
//              choices: clientOptions
//          }
//      ])

//  }
 //delete method:

 
