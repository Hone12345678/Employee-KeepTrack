-- removes data currently stored
DROP TABLE IF EXISTS departments;
DROP TABLE IF EXISTS roles;
DROP TABLE IF EXISTS employees;

-- department schema 
CREATE TABLE departments (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  dep_name VARCHAR(30) NOT NULL
);

-- roles schema 
CREATE TABLE roles (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL NOT NULL,
  department_id INT NOT NULL,
  FOREIGN KEY (department_id) references departments(id)
);

-- employees schema 
CREATE TABLE employees (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT NOT NULL,
  FOREIGN KEY(role_id) references roles(id),
  manager_id INT,
  FOREIGN KEY(manager_id) references employees(id)
);
