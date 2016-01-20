/**
 * Created by Yash on 11/01/16.
 */

// set up ======================================================================
// get all the tools we need
var express = require('express');
var mongoose = require('mongoose');
var flash = require('connect-flash');
var morgan = require('morgan');
var cookieParser = require('cookie-parser'); // the session is stored in a cookie, so we use this to parse it
var bodyParser = require('body-parser'); // for reading POSTed form data into `req.body`
var session = require('express-session');
var port = process.env.PORT || 8083;

//=======DB connection=======//
var configDB = require('./config/database.js');
mongoose.connect(configDB.url); // connect to our database


//=======App config=======//
var app = express();

app.engine('jsx', require('express-react-views').createEngine());

app.set('port', port);
app.set('view engine', 'jsx'); // Set View engine for templating

app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // must use cookieParser before cookie session
app.use(bodyParser.json());// instruct the app to use the `bodyParser()` middleware for all routes
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({ //The cookieSession middleware is dependent on the cookieParser middlware because it uses a cookie for storing the session data.
  key: 'node-auth',
  secret: 'ilovhscoch',
  resave: true,
  saveUninitialized: false
}));
app.use(function (req, res, next) {
  GLOBAL.navigator = {
    userAgent: req.headers['user-agent']
  };
  next();
});
app.use(express.static(__dirname + '/public'));

//=======Passport configuration
var passport = require('passport');
require('./config/passport')(passport); // pass passport for configuration

app.use(passport.initialize()); //In a Connect or Express-based application, passport.initialize() middleware is required to initialize Passport.
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

// routes ======================================================================
require('./app/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport

// launch ======================================================================
app.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});
