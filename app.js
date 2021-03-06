'use strict';
require('newrelic');

/*
 * Global Vars
 */
var express     = require('express'),
    hbs         = require('express-hbs'),
    serveStatic = require('serve-static'),
    compression = require('compression'),
    riotKey 		= require('./apikey'),
    app         = express(),
    port        = 3000;

require('./routes/nexus_route.js')(app, riotKey);
// For gzip compression
app.use(compression());

app.engine('hbs', hbs.express3({
  partialsDir: __dirname + '/views/partials',
  defaultLayout: __dirname +'/views/layouts/main.hbs',
}));

app.get('/riot.html', function(req, res, next) {
	res.render('riot.hbs', {
		layout: null
	});
});

app.use(express.static(__dirname + '/assets'));

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