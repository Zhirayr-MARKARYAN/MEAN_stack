const express = require('express');
const router  = express.Router();
const User = require('../models/user');
const passport = require('passport');
const jwt = require('jsonwebtoken');

// Register
router.post('/register', (req, res, next) => {
	// console.log("User est ", req.body)

	// console.log("req est ", req)
	let newUser = new User({
		name: req.body.name,
		email: req.body.email,
		username: req.body.username,
		password: req.body.password
	});
	// console.log("req.body est ", req.body)
	// console.log("newUser est ", newUser)

	User.addUser(newUser, (err, user) => {
		if(err){
			res.json({ success: false, msg: 'Failed to register user'});
		} else {
			res.json({ success: true, msg: 'User registered'});
		}
	})
});

// Authenticate
router.post('/authenticate', (req, res, next) => {
  res.send('AUTHENTICATE');
});

//Profile
router.get('/profile',(req, res, next) => {
	res.send('Profile');
});

//Validate
router.get('/validate',(req, res, next) => {
	res.send('Validate');
});

module.exports = router; 