// assert needs to be required from node
const assert = require('assert');
const MarioChar = require('../models/mariochar');

// Describe tests
describe('Deleting records', function(){
    
    var char;
    
    beforeEach(function(done){
       char = new MarioChar({
           name: 'Mario'
       });
  
       char.save().then(function(){
           assert(char.isNew === false); 
           done();
       });
    });
    
    // Create tests
    it('Delete one record from the database', function(done){
    // use then b/c find and remove is a promise
        MarioChar.findOneAndRemove({name: 'Mario'}).then(function(){
            MarioChar.findOne({name: 'Mario'}).then(function(result){
                assert(result === null);
                done();
            });
        });
       
    });
});
    
    
