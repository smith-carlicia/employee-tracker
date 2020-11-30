USE employeetracker_db;

INSERT INTO department(name)
VALUES ('sales'), ('engineering'), ('finance'), ('legal');

INSERT INTO role (title, salary, department_id)
VALUES ('Sales Lead', 70000, 1), ('Salesperson', 50000, 1), ('Lead Engineer', 80000, 2), ('Software Engineer', 90000, 2), ('Account Manager', 60000, 3), ('Accountant', 40000, 3), ('Legal Team Lead', 80000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Carlicia', 'Smith', 1, NULL), ('Carly', 'Smith', 2, NULL), ('Madeline', 'Smith', 3, NULL), ('Maddie', 'Smith', 4, NULL);

INSERT INTO manager (first_name, last_name, role_id, manager_id, department_id)
VALUES ('Daria', 'Morgendorffer', 1, NULL, 1),('Meredith', 'Grey', 2, NULL, 2), ('Christina', 'Yang', 3, NULL, 3), ('Chad', 'Hugo', 4, NULL, 4);