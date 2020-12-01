const connection = require("./connection");
const util  = require("util");

class db {
     constructor(connection) {
        this.connection = connection;
    }
    
    getEmployees() {
        const query = util.promisify(connection.query).bind(connection)
        query("SELECT * FROM employee").then((employees)=>{
            console.log(typeof employees)
            return employees
        })
    };



    viewEmployees() {
        return this.connection.query("SELECT * FROM employee", 
        
        function(err, res) {
            if (err) throw err;
            // Log all results of the SELECT statement
            console.table(res);
        })
    };

    viewDepartment() {
        return  connection.query("SELECT * FROM department", 
        
        function(err, res) {
            if (err) throw err;
            // Log all results of the SELECT statement
            console.table(res);
        })
        // init();
    };
 
    viewRole(role) {
        return connection.query("SELECT * FROM role", role, 
        
        function(err, res) {
            if (err) throw err;
            // Log all results of the SELECT statement
            console.table(res);
        })
        // init();
    };

    viewManager() {
        return connection.query("SELECT * FROM manager", 
        
        function(err, res) {
            if (err) throw err;
            // Log all results of the SELECT statement
            console.table(res);
        })
        // init();
    };
 


    addEmployee(employee) {
        console.log(employee);
        return connection.query(

            "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)",
            // employee,
            [employee.employeesFirstName.trim(), employee.employeesLastName.trim(), 1, 1],
        )
        // )
    };
  
    addRole(role) {
        return connection.query(
            
        "INSERT INTO role (title, salary, department_id) VALUES (?,?,?)", 
        // role,
        [[role.roleInput, role.roleSalary, depID]]
        )
    };

    addDepartment(department) {
        return db.query("INSERT INTO department (name) VALUES (?)", department,
         [answers.departmentName]);
    };


    
    updateRole(roleId, employeeId) {
        return connection.query("SELECT * FROM role", roleId, employeeId,
        
        function(err, res) {
            if (err) throw err;
            // Log all results of the SELECT statement
            console.log(res);
          })
    };
 
    updateManager(managerId, employeeId) {
        return connection.query("SELECT * FROM manager", managerId, employeeId,
        
        function(err, res) {
            if (err) throw err;
            // Log all results of the SELECT statement
            console.log(res);
        })
    };



    removeEmployee(employeeId) {
        return this.connection.query(
            "DELETE FROM products WHERE ?", employeeId,
           
            function(err, res) {
              if (err) throw err;
              console.log(res.affectedRows + " employee deleted!\n");
              // Call readProducts AFTER the DELETE completes
              readEmployee();
          })
    };

    removeRole(roleId) {
        return this.connection.query(
            "DELETE FROM products WHERE ?", roleId,
           
            function(err, res) {
              if (err) throw err;
              console.log(res.affectedRows + " employee deleted!\n");
              // Call readProducts AFTER the DELETE completes
              readEmployee();
          })
    };

    removeDepartment(departmentId) {
        return this.connection.query(
            "DELETE FROM products WHERE ?", departmentId,
           
            function(err, res) {
              if (err) throw err;
              console.log(res.affectedRows + " employee deleted!\n");
              // Call readProducts AFTER the DELETE completes
              readEmployee();
          })
    };

};


module.exports = new db (connection);