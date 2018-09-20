const mongoose = require('mongoose');

// ES6 promises vs. uisng mongoose 
mongoose.Promise = global.Promise;

// Connect to the db before tests run
// create a before hook
before(function(done){
    // connect to mongoDB
    mongoose.connect('mongodb://localhost/testaroo', { useNewUrlParser: true });
    
    mongoose.connection.once('open', function(){
        console.log('Connection has been made, now make fireworks...');
        done();
    }).on('error', function(error){
        console.log('Connection error: ',error);
    });
});

// before every test - empty the database so every test can run in isolation
// Drop the characters collection before each test (drop = delete)
beforeEach(function(done){
    // drop the collection
    mongoose.connection.collections.mariochars.drop(function(){
        done();
    });
});

