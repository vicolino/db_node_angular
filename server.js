var express        = require('express');
var app            = express();
var mongoose       = require('mongoose');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var config         = require('./config');
var routes         = require('./app/routes');
var port = 8080;

app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(express.static(__dirname + '/public'));

routes.init(app);

app.listen(port, "0.0.0.0");
console.log('Server started on port: ' + port);
exports = module.exports = app;
