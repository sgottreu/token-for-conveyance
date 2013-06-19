
/*
 * GET users listing.
 */

/*
var mongoose = require('mongoose')
, Schema = mongoose.Schema;
*/

var Route = require('../app/models/Route');
var City = require('../app/models/City');

//var objTrain = mongoose.model('Train', Schema);


exports.list = function(req, res){

    console.log(City.getCities());
    
    res.render('route_list', { routes: Route.getRoutes() } );

   


};


