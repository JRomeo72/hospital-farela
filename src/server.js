const express = require('express');
// const sphp = require('sphp');
const path = require('path');
const exphbs = require('express-handlebars');
const router = require('./routes')

// ? Initializations 
const port = 4001;
const app = express();

// ? Settings 
// app.set('port', process.env.PORT || 4000);
app.set('port', port);
app.set('views', path.join(__dirname, 'views'));
app.engine('hbs', exphbs({
    defaultLayout: 'main',
    layoutDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', 'hbs');

// ? Routes 
app.use(router);

// ? Statics 
app.use(express.static(path.join(__dirname, 'public')));
// app.use(sphp.express(path.join(__dirname, 'public')));

module.exports = app;