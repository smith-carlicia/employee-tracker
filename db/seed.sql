USE employeetracker_db;

INSERT INTO department(name)
VALUES ('sales'), ('engineering'), ('finance'), ('legal');

INSERT INTO role (title, salary, depertment, id)
VALUES ('Sales Lead'), ('Salesperson'), ('Lead Engineer'), ('Software Engineer'), ('Account Manager'), ('Accountant'), ('Legal Team Lead');

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Carlicia', 'Smith', 12, NULL), ('Carly', 'Smith', 16, NULL), ('Madeline', 'Smith', 06, NULL), ('Maddie', 'Smith', 20, 08);