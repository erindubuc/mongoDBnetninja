const mongoose = require('mongoose');

// ES6 promises vs. uisng mongoose 
mongoose.Promise = global.Promise;

// Connect to the db before tests run
// create a before hook
before(function(done){
    // connect to mongoDB
    mongoose.connect('mongodb://localhost/testaroo');
    mongoose.connection.once('open', function(){
        console.log('Connection has been made, now make fireworks...');
        done();
    }).on('error', function(error){
        console.log('Connection error:',error);
    });
});

