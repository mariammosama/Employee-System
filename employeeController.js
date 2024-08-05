const Employee = require('./models');

function getAllEmployees(req, res) {
    Employee.find()
        .then(employees => res.json(employees))
        .catch(error => res.status(500).json({ error: 'Internal server error' }));
}

function getEmployee(req, res) {
    const { id } = req.params;
    Employee.findById(id)
        .then(employee => {
            if (!employee) {
                return res.status(404).json({ error: 'Employee not found' });
            }
            return res.json(employee);
        })
        .catch(error => res.status(500).json({ error: 'Internal server error' }));
}

function addEmployee(req, res) {
    const employeeData = req.body;
    Employee.create(employeeData)
        .then(employee => res.status(201).json(employee))
        .catch(error => res.status(400).json({ error: 'Invalid data' }));
}

function updateEmployee(req, res) {
    const { id } = req.params;
    const employeeData = req.body;
    Employee.findByIdAndUpdate(id, employeeData, { new: true })
        .then(employee => {
            if (!employee) {
                return res.status(404).json({ error: 'Employee not found' });
            }
            return res.json(employee);
        })
        .catch(error => res.status(400).json({ error: 'Invalid data' }));
}

function deleteEmployee(req, res) {
    const { id } = req.params;
    Employee.findByIdAndDelete(id)
        .then(employee => {
            if (!employee) {
                return res.status(404).json({ error: 'Employee not found' });
            }
            return res.sendStatus(204);
        })
        .catch(error => res.status(500).json({ error: 'Internal server error' }));
}

module.exports = { getAllEmployees, getEmployee, addEmployee, updateEmployee, deleteEmployee };
