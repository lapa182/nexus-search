'use strict';
require('newrelic');

/*
 * Global Vars
 */
var express     = require('express'),
    hbs         = require('express-hbs'),
    serveStatic = require('serve-static'),
    riotKey			= '17a15899-76bb-4317-8227-baa1ad50bc1b',
    compression = require('compression'),
    app         = express(),
    port        = 3000;

require('./routes/nexus_route.js')(app);
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