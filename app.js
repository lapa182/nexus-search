'use strict';

/*
 * Global Vars
 */
var express     = require('express'),
    hbs         = require('express-hbs'),
    serveStatic = require('serve-static'),
    compression = require('compression'),
    app         = express(),
    port        = 3000;

// For gzip compression
app.use(compression());

app.engine('hbs', hbs.express3({
  partialsDir: __dirname + '/views/partials',
  defaultLayout: __dirname +'/views/layouts/main.hbs',
}));

// Set Handlebars
app.set('view engine', 'hbs');

/*
 * Routes
 */
// Index Page
app.get('/', function(request, response, next) {
    response.render('index');
});


/*
 * Start it up
 */
app.listen(process.env.PORT || port);
console.log('Express started on port ' + port);