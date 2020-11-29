const connection = require("./connection")

class db {
     constructor(connection) {
        this.connection = connection;
    }
    
    viewEmployees() {
        return this.connection.query("SELECT * FROM employee", 
        
        function(err, res) {
            if (err) throw err;
            // Log all results of the SELECT statement
            console.table(res);
            init();
          })
    };

    viewDepartment() {
        return  connection.query("SELECT * FROM department", 
        
        function(err, res) {
            if (err) throw err;
            // Log all results of the SELECT statement
            console.table(res);
            init();
          })
    };
 
    viewRole(role) {
        return connection.query("SELECT * FROM role", role, 
        
        function(err, res) {
            if (err) throw err;
            // Log all results of the SELECT statement
            console.table(res);
            init();
          })
    };

    viewManager() {
        return connection.query("SELECT * FROM manager", 
        
        function(err, res) {
            if (err) throw err;
            // Log all results of the SELECT statement
            console.table(res);
            init();
          })
    };
 
    addEmployee(employee) {
        return db.query(
            "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?)", employee,
            [[answers.employeeFirstName.trim(), answers.employeeLastName.trim(), positionDetails.id, manager.id]]
        )
    };
  
    addRole(role) {
        return db.query("INSERT INTO role (title, salary, department_id) VALUES (?)", role,
        [[answers.roleInput, answers.roleSalary, depID]]);

    };

    addDepartment(department) {
        return db.query("INSERT INTO department (name) VALUES (?)", department,
         [answers.departmentName]);
    };
    
    removeEmployee(employeeId) {
        return connection.query(
            "DELETE FROM products WHERE ?", employeeId,
           
            function(err, res) {
              if (err) throw err;
              console.log(res.affectedRows + " employee deleted!\n");
              // Call readProducts AFTER the DELETE completes
              readEmployee();
          })
    };
 
    updateRole(roleId) {
        return connection.query("SELECT * FROM role", roleId,
        
        function(err, res) {
            if (err) throw err;
            // Log all results of the SELECT statement
            console.log(res);
          })
    };
 
    updateManager(managerId) {
        return connection.query("SELECT * FROM manager", managerId,
        
        function(err, res) {
            if (err) throw err;
            // Log all results of the SELECT statement
            console.log(res);
        })
    };

};

module.exports = new db (connection);