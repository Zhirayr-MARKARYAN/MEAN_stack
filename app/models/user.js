let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let bcrypt = require('bcrypt-nodejs')

let UserSchema = new Schema({
    username: { type: String, lowercase: true, required: true },
    password: { type: String, required: true },
    email: { type: String, lowercase: true, required: true, unique: true }
}); 

UserSchema.pre('save', function(next){
  bcrypt = this;
  bcript.hash(user.password, null, null, function(err, hash){
    if(err) return next(err);
    user.password = hash;
    next();
  })
})

module.exports = mongoose.model('User', UserSchema);