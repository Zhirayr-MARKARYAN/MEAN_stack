const express = require('express');
const router  = express.Router();

//Register
router.get('/sign-up',(req, res, next) => {
	res.send('Register');
});

//Signin
router.post('/sign-in',(req, res, next) => {
	res.send('Sign-in');
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