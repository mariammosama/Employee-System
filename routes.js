const express = require('express');
const router = express.Router();
const employeeController = require('./employeeController');

router.get('/employees', employeeController.getAllEmployees);
router.get('/employees/:id', employeeController.getEmployee);
router.post('/employees', employeeController.addEmployee);
router.put('/employees/:id', employeeController.updateEmployee);
router.delete('/employees/:id', employeeController.deleteEmployee);

module.exports = router;
