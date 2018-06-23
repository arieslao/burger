// #### Controller setup
// 1. Inside your `burger` directory, create a folder named `controllers`.
// 2. In `controllers`, create the `burgers_controller.js` file.
// 3. Inside the `burgers_controller.js` file, import the following:
//    * Express
//    * `burger.js`

var express = require('express');
var burgers = require('../models/burger.js');


// 4. Create the `router` for the app, and export the `router` at the end of your file.

module.exports = function(app) {
    // get the root route
    app.get('/', function(request, response) {
        burgers.allBurgers(function(data) {
            response.render('index', {
                uneatenBurgers: data.uneaten,
                eatenBurgers: data.eaten
            });
        });
    });

    // define the get api/burgers route - for all burger data
    app.get('/api/burgers', function(request, response) {
        burgers.allBurgers(function(data) {
            response.json(data);
        });
    });

    // define post for creating a burger
    app.post('/', function(request, response) {
        var newBurger = request.body.burger;
        // if no burger is defined just return
        if (newBurger === '') {
            response.redirect('/');
            return;
        }
        // create that burger
        burgers.create(newBurger, function() {
            response.redirect('/');
        });
    });

    // define the get api/burgers/:id route - for single burger data
    app.get('/api/burgers/:id', function(request, response) {
        burgers.singleBurger(request.params.id, function(data) {
            response.json(data);
        });
    });

    // define put for updating a burger
    app.put('/:id', function(request, response) {
        burgers.update(request.params.id, function() {
            response.redirect('/');
        });
    });

    // app.put('/order/:id', function(request, response) {
    //     burgers.reOrder(request.params.id, function() {
    //         response.redirect('/');
    //     });
    // });
};