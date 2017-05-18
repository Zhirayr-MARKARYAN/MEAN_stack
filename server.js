// server.js

// ----------------------------------------- Required Modules -------------------------------------

//express for MVC
let express    = require('express');
//morgan for request logging,
let morgan     = require('morgan');
//body-parser for simulating post request handling in NodeJS
let bodyParser = require('body-parser');
//jsonwebtoken for creating JWT tokens by using our User model
let jwt        = require('jsonwebtoken');
// mongoose for our ORM framework to connect to MongoDB,
let mongoose   = require('mongoose');

let passport   = require('passport');
let cors       = require('cors');
let path       = require('path');

let User       = require('./app/models/user');
let config     = require('./app/config/database') 
let users      = require('./app/routes/users');
//--------------------------------------------------------------------------------------------------

//Create the application with express
let app = express();

// Set the port
// let port 	   = process.env.PORT || 8000;
let port = 3000;

//Connect to Database
mongoose.connect(config.database, function(err) {
	if(err){
		console.log("Not connected to the database " + err)
	}else{
		console.log("Successfully connected to " + config.database)
	}
});

//http://localhost:8000/
app.get('/users', function (req, res) {
  res.send('Hello World!');
});

//http://localhost:8000/users
// app.post('/users', function(req, res){
// 	// let user = new User();
// 	// user.username = req.username;
// 	// user.password = req.password;
// 	// user.email = req.email;
// 	// user.save();
// 	// res.send("user created");
// })

//set static folder
app.use(express.static(path.join(__dirname, '/app/public')));

app.use(morgan('dev'))
//CORS Middleware
app.use(cors());

app.use('/users', users)
//--------------------------------- app.use(bodyParser.urlencoded({ extended: true })); ----------------------------------
//bodyParser.urlencoded() - Parses the text as URL encoded data 
//(which is how browsers tend to send form data from regular forms set to POST) 
//and exposes the resulting object (containing the keys and values) on req.body.

//Now, true is the default value for this middleware in express. 
//So, what's the use of this middleware. Here, when you fire POST request it gets encoded in form of object that only 
//contains {key:value} pairs only or can contain a simple string in json format only.
app.use(bodyParser.urlencoded({ extended: true }));
//------------------------------------------------------------------------------------------------------------------------

//bodyParser.json(): Parses the text as JSON and exposes the resulting object on req.body.
app.use(bodyParser.json());

app.use(morgan("dev"));

//Index Route
app.get('/', (req, res) => {
	res.send('Invalid Endpoint');
})

// startup our server at http://localhost:8081
app.listen(port);
console.log("App listening on port : " + port);

 

