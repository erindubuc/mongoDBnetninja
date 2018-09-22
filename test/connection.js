//Import the mongoose module
const mongoose = require('mongoose');

//Set up default mongoose connection
const mongoDB = 'mongodb://localhost/testaroo';
// const mongoDB = 'mongodb://test:testing1@ds153978.mlab.com:53978/testaroo';
mongoose.connect(mongoDB);

// ES6 promises vs. uisng mongoose 
mongoose.Promise = global.Promise;
//Get the default connection
var db = mongoose.connection;

// //Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));



// Connect to the db before tests run
before(function(done){
    // connect to mongoDB
    mongoose.connect('mongodb://localhost/testaroo', { useNewUrlParser: true });
    
    mongoose.connection.once('open', function(){
        console.log('Connection has been made, now make fireworks...');
        done();
    }).on('error', function(error){
        console.log('Connection error: ',error);
        done();
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

