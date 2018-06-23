// #### App Setup

// 1. Create a GitHub repo called `burger` and clone it to your computer.
// 2. Make a package.json file by running `npm init` from the command line.
// 3. Install the Express npm package: `npm install express`.
// 4. Create a server.js file.

// 5. Install the Handlebars npm package: `npm install express-handlebars`.
// 6. Install the body-parser npm package: `npm install body-parser`.
// 7. Install MySQL npm package: `npm install mysql`.

// 8. Require the following npm packages inside of the server.js file:
//    * express
//    * body-parser

// ***************** DEPENDANCIES*********************

var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');

// set up server
var app = express();
var port = process.env.PORT || 8889;
app.listen(port);

// set up handlebars engine
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

// Serve static content for the app from the 'public' directory in the
// application directory.
app.use(express.static(__dirname + '/public'));

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}));

// Override with POST having ?_method=DELETE
app.use(methodOverride('_method'));

// get them routes
require('./controllers/burger_controller.js')(app);