const express = require("express");
const router = express.Router();
const db = require("../../db/connection");
// checks to verify user input for PUT
const inputCheck = require("../../utils/inputCheck");

// Get all employees alphabetized by last name
router.get("/employees", (req, res) => {
  const sql = `SELECT departments.dep_name, employees.first_name, employees.last_name, roles.title, roles.salary, CONCAT(managers.first_name," ",managers.last_name) as manager_name FROM employees LEFT JOIN roles ON employees.role_id = roles.id LEFT JOIN employees managers ON employees.manager_id = managers.id LEFT JOIN departments ON roles.department_id = departments.id `;

  db.query(sql, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: rows,
    });
  });
});

// Create a employee
router.post("/employees", ({ body }, res) => {
  // Data validation
  const errors = inputCheck(
    body,
    "first_name",
    "last_name",
    "role_id",
    "manager_id"
  );
  if (errors) {
    res.status(400).json({ error: errors });
    return;
  }

  const sql = `INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)`;
  const params = [
    body.first_name,
    body.last_name,
    body.role_id,
    body.manager_id,
  ];

  db.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: body,
    });
  });
});

// Update a voter's email
router.put("/employees/:id", (req, res) => {
  // Data validation
  const errors = inputCheck(req.body, "role_id");
  if (errors) {
    res.status(400).json({ error: errors });
    return;
  }

  const sql = `UPDATE employees SET role_id = ? WHERE id = ?`;
  const params = [req.body.role_id, req.params.id];

  db.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
    } else if (!result.affectedRows) {
      res.json({
        message: "employee not found",
      });
    } else {
      res.json({
        message: "success",
        data: req.body,
        changes: result.affectedRows,
      });
    }
  });
});

module.exports = router;
