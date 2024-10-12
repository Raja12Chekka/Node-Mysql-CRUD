const db = require ('../db');

module.exports.getAllemployees = async () => {
    const [rows] = await db.query('SELECT * FROM employees')
    return rows;
};
module.exports.getEmployeeById = async (id) => {
    const [rows] = await db.query("SELECT * FROM employees where id = ?",[id]);
    return rows;
};
module.exports.deleteEmployee = async (id) => {
    const [{affectedRows}] = await db.query("DELETE  FROM employees where id = ?",[id]);
    return affectedRows;
};
module.exports.addOrUpdateEmployee = async (obj,id =0) => {
    const [[[{affectedRows}]]] = await db.query("CALL usp_employee_add_or_edit(?,?,?,?)",
        [id,obj.name,obj.employee_code,obj.salary]);
    return affectedRows;
};