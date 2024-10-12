const express = require('express');
const router = express.Router();
const db = require('../db');
const service = require('../services/employeeServices');
router.get('/', async (req, res) => {
   const employees = await service.getAllemployees()
       .catch(error=> console.log(error));
       res.send(employees);
});
router.get('/:id', async (req, res) => {
    const employee = await service.getEmployeeById(req.params.id)
       if(employee.length === 0) return res.status(404).send(`Employee not found with id ${req.params.id}`);
        res.send(employee);
 });
 router.delete('/:id', async (req, res) => {
    const afftectedEmp = await service.deleteEmployee(req.params.id)
    //console.log(employee);
       if(afftectedEmp === 0) return res.status(404).send(`Employee not found with id ${req.params.id}`);
        res.send('employee deleted successfully');
 });
 router.post('/', async (req, res) => {
    console.log('*********',req.body);
    await service.addOrUpdateEmployee(req.body)
    
        res.status(201).send('employee added successfully');
 });
 router.put('/:id', async (req, res) => {
    //console.log('*********',req.body);
    const affectedRows =await service.addOrUpdateEmployee(req.body,req.params.id)
    if(affectedRows === 0) return res.status(404).send(`Employee not found with id ${req.params.id}`);
        res.send('employee updated successfully');
 });
module.exports = router;