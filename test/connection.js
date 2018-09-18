const mongoose = require('mongoose');

// connect to mongoDB
mongoose.connect('mongodb://localhost/testaroo');

// once is an event listener for just once connection has been made
mongoose.connection.once('open', function(){
    console.log('Connection has been made, now make fireworks...');
}).on('error', function(){
    console.log('Connection error:',error);
});