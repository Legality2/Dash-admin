var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var crypto = require('crypto');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var config = require('../../config/config.js');

var UserSchema = new Schema({
  username: {
        type: String,
        unique: true,
        required: true
    },
  email: String,
  fullName: {type: String},
  password: {
        type: String
    },
  profileImg: String,
  imgName: String,
  socketId: String,
  token: String,
  google: {
    profile_sub: String,
    refreshToken: String,
    accessToken: String
  },

  role:  {
        type: String,
        enum : ['Basic', 'Moderator', 'Admin'],
        default: 'Basic'
    },
  
});

// Bcrypt middleware on UserSchema
UserSchema.pre('save', function(next) {
  var self = this;
  var user = this;

  if (!user.isModified('password')) return next();

  bcrypt.genSalt(10, function(err, salt) {
    if (err) return next(err);

    bcrypt.hash(user.password, salt, function(err, hash) {
        if (err) return next(err);
        user.password = hash;
        next();
    });
  });
});

//Password verification
UserSchema.methods.comparePassword = function(password, cb) {
    bcrypt.compare(password, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(isMatch);
    });
};

UserSchema.methods.newPassword = function(password){
  var user = this;
  var newPass = password;
  bcrypt.genSalt(10, function(err, salt) {
    if (err) return next(err);

    bcrypt.hash(newPass, salt, function(err, hash) {
        if (err) return next(err);
        user.password = hash;
        next();
    });
  });
};


UserSchema.methods.generateJWT = function(){

    //set expiration to 60 days
    var today = new Date();
    var exp = new Date(today);
    exp.setDate(today.getDate() + 60);
    this.token = jwt.sign({
      userId: this.userId,
      username: this.username,
      imgName: this.imgName,
      profileImg: this.profileImg,
      _id: this._id,
      role: this.role,
      exp: parseInt(exp.getTime() / 1000),
    }, config.secret);
    return this.token;
};

module.exports = mongoose.model('User', UserSchema);
