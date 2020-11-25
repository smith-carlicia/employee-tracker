//Create a SELECT - DELETE - UPDATE - INSERT
const inquirer = require("inquirer");
const mysql = require("mysql");
const connection = require("./db/connection")

require("console.table");

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
          case "View Employees";
               displayEmployees();
               break;
          case "View All Employees by Department";
               displayEmployeesByDept();
               break;
          case "View All Employees by Manager";
               displayEmployeesByManager();
               break;
          case "Add Employee";
               addNewEmployee();
               break;
          case "Remove Employee";
               removeCurrentEmployee();
               break;
          case "Update Employee Role";
               updateCurrentEmployeeRole();
               break;
          case "Update Manager Role";
               updateCurrentManagerRole();
               break;
          }
     });
 };

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