// assert needs to be required from node
const assert = require('assert');
const MarioChar = require('../models/mariochar');

// have to describe tests to mocha and tell what they're about
// Describe tests
describe('Saving records', function(){
    
    // Create tests
    it('Saves a record to the database', function(done){
    //   create new instance of making new character
       var char = new MarioChar({
           name: 'Mario'
       });
    //   will grab character and save it to the database
    // save is asynchronous request so you can save and return promise -add then()
       char.save().then(function(){
           assert(char.isNew === false); 
           done();
       });
       
    });
});