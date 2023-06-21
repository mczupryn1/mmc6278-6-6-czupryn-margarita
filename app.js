const express = require('express');
const apiRoutes = require('./routes/api-routes');
const htmlRoutes = require('./routes/html-routes');
const exphbs = require('express-handlebars'); // Require express-handlebars here

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Handlebars setup
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.use('/', htmlRoutes);
app.use('/api', apiRoutes);

module.exports = app;
