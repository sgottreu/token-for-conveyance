
/*
 * GET users listing.
 */

/*
var mongoose = require('mongoose')
, Schema = mongoose.Schema;
*/

var Train = require('../app/models/Train');


//var objTrain = mongoose.model('Train', Schema);


exports.list = function(req, res){

    //var BlogTopic = require('../app/models/BlogTopic'); 

    Train.find( {  }, function(err, data) {
        if(err) console.log('Error trying to find blog topics in collection!: ' + err);
        if(data) {
            console.log(data);
            res.render('train_list', { title: 'Chosen Trains', trains: data, count: data.length});
        } else {
          console.log('No Blog Topics found');
          //console.log(userData);
          return done(err, data)
        }
    });
   


};


exports.pick = function(req, res){
  //var Train = require('../app/models/Train');
  
  var objTrain = new Train({
        color: req.params.color, 
        trains:  45
    });
    

        objTrain.save(function(err) {
          if (err) throw err;
          res.set("Content-Type", "text/html");
          res.send("You have chosen "+req.params.color); 
        }); 

};