INSERT INTO departments (dep_name)
VALUES
('Sales'),
('Engineering'),
('Finance'),
('Legal');

INSERT INTO roles (title, salary, department_id)
VALUES
('Sales Manager', '95000.00',1),
('Salesman', '65000.00',1),
('Sales Intern', '45000.00',1),
('Engineering Manager', '90000.00',2),
('Engineer', '60000.00',2),
('Engineer Intern', '40000.00',2),
('Finance Manager', '100000.00',3),
('Financial Analyst', '70000.00',3),
('Finance Intern', '50000.00',3),
('Legal Manager', '100000.00',4),
('Lawyer', '70000.00',4),
('Paralegal', '50000.00',4);

INSERT INTO employees (first_name, role_id, manager_id)
VALUES
('Lina G', 1, NULL),
('Bill W',2,1),
('Tom R',3,1),
('David Cooper',4, NULL),
('Laura Palmer',5,4),
('David Lynch',6,4),
('Mike Gurera',7, NULL),
('John Dwyer',8,7),
('Blixa Bargeld',9,7),
('Jonas Kahnwald', 10, NULL),
('Claudia Tiedemann',11,10),
('Martha Nielsen',12,10);


