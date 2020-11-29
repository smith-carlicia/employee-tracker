//Create a SELECT - DELETE - UPDATE - INSERT
const inquirer = require("inquirer");
const figlet = require("figlet");
const db = require("./db/index");
const consoleTable = require("console.table");
const employeeInput = [];


figlet("Employee Manager", function (err, data) {
     if (err) {
       console.log("figlet error");
       console.dir(err);
       return;
     }
     console.log(data);
     init();
});

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
          case "Update Role":
               updateRole;
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
     // console.log("Selecting all employee...\n");
     //   // Log all results of the SELECT statement
     // //   console.table(choices);

     db.viewEmployees();
     // init();
};

// Async functions to view data
 async function viewDepartment() {
     // console.log("Selecting all department...\n");
     //   console.table(choices);
     db.viewDepartment();
};

 async function viewRole() {
     // console.log("Selecting all role...\n");
     //   console.table(choices);
     db.viewRole();
};


 async function viewManager() {
     // console.log("Selecting all manager...\n");
     //   // Log all results of the SELECT statement
     //   console.table(choices);
     db.viewManager();
};




 async function addEmployee() {
     //  call db for roles, depts, employees
     // dynamically create choices arrays with name and value
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
               {name:"role name from db", value:"role id from db"},
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
               {name:"employee manager from db", value:"manager id from db"},
               "John Doe",
               "Mike Chan",
               "Ashley Rodriguez",
               "Kevin Tupik",
               "Malia Brown",
               "Sarah Lourd",
          ],
     }]).then((answers) => {
          console.log(answers);
        
          console.log(`${answers.firstName} was added to the employee database!`);
          console.log(`${answers.lastName} was added to the employee database!`);
          db.addEmployee();
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
                    {name:"role department from db", value:"role id from db"},
                    "Sales",
                    "Engineering",
                    "Finance",
                    "Legal",
               ]
          }
     ]).then((answers) => {
          console.log(`${answers.roleInput} was added. Department: ${answers.addEmployeeOptions}`);
          db.addRole();
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
          // db.query("INSERT INTO department (name) VALUES (?)", [answers.departmentName]);
          console.log(`${answers.departmentName} was added to departments.`);
          db.addDepartment();
     })
};


 async function removeEmployee() {
     // console.log("Deleting employee...\n");
          db.removeEmployee();
};




// async function readEmployee() {
//      // console.log("Selecting all employee...\n");
//      //   console.log(choices);
//           db.removeEmployee();
// };


 async function updateMethod(){

     const emplyeeAll = await db.findAllEmpMethod();

     const clientOptions = employees.map(({id, first_name ,last})=> ({
         name: `${first_name} ${last}`,
         value: id
     }));
};
async function updateEmployee () {
     const {employeeId} = await prompt ([
          {
               type: "list",
               name: "employeeId",
               message: "Which employee manager would you like to update? ",
               choices: clientOptions
          }
     ])
};
 async function updateRole() {
      const {roleId} = await prompt ([
          {
               type: "list",
               name: "roleId",
               message: "Which employee role would you like to update? ",
               choices: clientOptions
          }
      ])
     // console.log("Selecting all role..\n");
     // const employeeRole = role.map(({id, title, salary, department_id})) =>
     // ({
     //      name: `${title} ${salary} ${department_id}`,
     //      value: id
     // });
     // connection.query("SELECT * FROM role", function(err, res) {
     //   if (err) throw err;
     //   // Log all results of the SELECT statement
     //   console.log(res);
     // })
};

async function updateManager() {
     const {managerId} = await prompt ([
          {
               type: "list",
               name: "managerId",
               message: "Which employee manager would you like to update? ",
               choices: clientOptions 
          }
     ])
     console.log("Selecting all manager...\n");
     // connection.query("SELECT * FROM manager", function(err, res) {
     //   if (err) throw err;
     //   // Log all results of the SELECT statement
     //   console.log(res);
     // })
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

 
