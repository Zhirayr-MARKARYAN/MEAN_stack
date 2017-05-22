let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let bcrypt = require('bcryptjs');
let config = require('../config/database');

let UserSchema = new Schema({
  name: { 
    type: String 
  },
  email: { 
    type: String, 
    lowercase: true, 
    required: true, 
    unique: true 
  },
  username: { 
    type: String, 
    lowercase: true, 
    required: true },
  password: { 
    type: String, 
    required: true 
  }    
}); 

let User = module.exports = mongoose.model('User', UserSchema);

module.exports.getUserById = function(id, callback){
  User.findById(id, callback);
}

module.exports.getUserByUsername = function(username, callback){
const query = { username: username }
User.findOne(query.callback);
}

module.exports.addUser = function(newUser, callback){
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if(err) throw err;
      newUser.password = hash;
      newUser.save(callback);
    });
  });
}