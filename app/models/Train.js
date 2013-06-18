var mongoose = require('mongoose')
, Schema = mongoose.Schema;

//User schema
var trainSchema = new Schema({
    color: String,
      trains: Number
    });


//bind the Topic schema to a Model
module.exports = mongoose.model('Train', trainSchema);