const express = require('express');
const app = express();
const db = require('./db');
const bodyparser = require('body-parser');
require('express-async-errors');

emplyeeRoute = require('./controllers/employee controller');

app.use('/api/employees', emplyeeRoute);
app.use(bodyparser.json());
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send('Something went wrong!');
});
db.query('select 1')
    .then(() => {console.log('Connected to MySQL')
        app.listen(3000, () => {
            console.log('Server started on http://localhost:3000');
        });
    })
    .catch(err => console.error('Error connecting to MySQL:', err));
