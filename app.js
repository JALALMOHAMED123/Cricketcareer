const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const careerRoutes = require('./routes/careerRoutes');
const sequelize = require('./util/database');

const app = express();
// const expressLayouts = require('express-ejs-layouts');

app.set('view engine', 'ejs');
app.set('views', 'views');

// app.use(expressLayouts);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use(careerRoutes);

sequelize
    .sync()
    .then(result => {
        console.log('Database and tables synced');
        app.listen(4000);
    })
    .catch(err => {
        console.log(err);
    });