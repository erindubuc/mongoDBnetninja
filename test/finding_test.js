// assert needs to be required from node
const assert = require('assert');
const MarioChar = require('../models/mariochar');

// Describe tests
describe('Finding records', function(){
    
    var char;
    
    beforeEach(function(done){
       char = new MarioChar({
           name: 'Mario'
       });
    //   will grab character and save it to the database
    // save is asynchronous request so you can save and return promise -add then()
       char.save().then(function(){
           assert(char.isNew === false); 
           done();
       });
    });
    
    // Create tests
    it('Finds one record from the database', function(done){
    
        MarioChar.findOne({name: 'Mario'}).then(function(result){
            assert(result.name === 'Mario');
            done();
        });
       
    });
    
    it('Finds one record by ID from the database', function(done){
    
        MarioChar.findOne({_id: char._id}).then(function(result){
            assert(result._id.toString() === char._id.toString());
            done();
        });
       
    });
});
    
    
