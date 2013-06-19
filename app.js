
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , train = require('./routes/train')
  , route = require('./routes/route')
  , http = require('http')
  , path = require('path');

var app = express();

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/tfc');

var Schema = mongoose.Schema
  , ObjectId = Schema.ObjectId;



// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);

app.get('/routes/list', route.list);

app.get('/trains/list', train.list);
app.get('/trains/:id/:color', train.pick);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
