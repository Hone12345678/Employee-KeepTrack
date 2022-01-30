const express = require("express");
const router = express.Router();
const db = require("../../db/connection");
// checks to verify user input
const inputCheck = require("../../utils/inputCheck");

// Get all departments
router.get("/departments", (req, res) => {
  const sql = `SELECT * FROM departments`;

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

// Create a department
router.post("/departments", ({ body }, res) => {
  // Data validation
  const errors = inputCheck(body, "dep_name");
  if (errors) {
    res.status(400).json({ error: errors });
    return;
  }

  const sql = `INSERT INTO departments (dep_name) VALUES (?)`;
  const params = [body.dep_name];

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

module.exports = router;
