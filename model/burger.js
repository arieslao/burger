// #### Model setup
// * Inside your `burger` directory, create a folder named `models`.
//   * In `models`, make a `burger.js` file.
//     * Inside `burger.js`, import `orm.js` into `burger.js`
//     * Also inside `burger.js`, create the code that will call the ORM functions using burger specific input for the ORM.


// require the orm
var orm = require('../config/orm.js');


// get all the burgers -- an object is returned with uneaten and eaten burgers
function burgers(callBack) {
    var object = {};
    uneatenBurgers(function(data) {
        object.uneaten = data;
        eatenBurgers(function(data) {
            object.eaten = data;
            callBack(object);
        });
    });
}

// query the database for uneaten burgers
function uneatenBurgers(callBack) {
    orm.selectScoped('burgers', 'devoured', 'false', function(data) {
        callBack(data);
    });
}

// query the database for eaten burgers
function eatenBurgers(callBack) {
    orm.selectScoped('burgers', 'devoured', 'true', function(data) {
        callBack(data);
    });
}

// query the database for single burger
function singleBurger(burger, callBack) {
    orm.selectOne('burgers', burger, function(data) {
        callBack(data);
    });
}

// query the database to create a burger
function create(burger, callBack) {
    orm.insertOne('burgers', 'burger_name', burger, function() {
        callBack();
    });
}

// query the database to update a burger
function update(burger, callBack) {
    orm.updateOne('burgers', 'devoured', true, burger, function() {
        callBack();
    });
}


//* Export at the end of the `burger.js` file.

module.exports = {
    allBurgers   : burgers,
    create       : create,
    singleBurger : singleBurger,
    update       : update,
  
};