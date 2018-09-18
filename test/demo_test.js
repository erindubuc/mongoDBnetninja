const mocha = require('mocha');
// assert needs to be required from node
const assert = require('assert');

// have to describe tests to mocha and tell what they're about
// Describe tests
describe('some demo tests', function(){
    
    // Create tests
    it('adds two numbers together', function(){
        // need to predict what the result should be/what we WANT
        assert(2 + 3 === 5);
    });
});