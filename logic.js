//Create a SELECT - DELETE - UPDATE - INSERT
const inquirer = require("inquirer");
const mysql = require("mysql");
const connection = require("./db/connection")
const consoleTable = require("console.table");

async function init(){
     inquirer.prompt({
       type: "list",
             name: "options",
             message: "What would you like to do?",
             choices: [
             "View Employees", 
             "View All Employees by Department", 
             "View All Employees by Manager", 
             "Add Employee", 
             "Remove Employee", 
             "Update Employee Role", 
             "Update Employee Manager"
          ]
     }).then((choices) => {
          console.log(init)
          switch(choices.options) {
          case "View Employees":
               displayEmployees();
               break;
          case "View All Employees by Department":
               displayEmployeesByDept();
               break;
          case "View All Employees by Manager":
               displayEmployeesByManager();
               break;
          case "Add Employee":
               addNewEmployee();
               break;
          case "Remove Employee":
               removeCurrentEmployee();
               break;
          case "Update Employee Role":
               updateCurrentEmployeeRole();
               break;
          case "Update Manager Role":
               updateCurrentManagerRole();
               break;
          }
     });
 };

 async function viewEmployees() {
     console.log("Selecting all employees...\n");
     connection.query("SELECT * FROM employees", function(err, res) {
       if (err) throw err;
       // Log all results of the SELECT statement
       console.log(res);
       connection.end();
     }
)};

 async function viewDepartment() {
     console.log("Selecting all department...\n");
     connection.query("SELECT * FROM departments", function(err, res) {
       if (err) throw err;
       // Log all results of the SELECT statement
       console.log(res);
     }
 )};

 async function viewManager() {
     console.log("Selecting all manager...\n");
     connection.query("SELECT * FROM manager", function(err, res) {
       if (err) throw err;
       // Log all results of the SELECT statement
       console.log(res);
     }
)};

 async function addEmployee() {
     inquirer.prompt({
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
          choices: [
               "John Doe",
               "Mike Chan",
               "Ashley Rodriguez",
               "Kevin Tupik",
               "Malia Brown",
               "Sarah Lourd",
          ],
     })
 }

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
}
 //End Goal (Methods needed)
 //async function 
 //update method: 
 async function updateMethod(){
     //create const that calls the findallMethod
     const emplyeeAll = await db.findAllEmpMethod();

       //store the desired data in a reuseable "container"
     const clientOptions = employees.map(({id, first_name ,last})=> ({
         name: `${first_name} ${last}`,
         value: id
     }));

     //employee update method
     const {employeeID} = await prompt ([
         {
             type: "list",
             name: "employeeId",
             message: "which employee manager would you like to update? ",
             choices: clientOptions
         }
     ])

 }
 //delete method:

 

// class DB {
//      constructor(connec)
// }