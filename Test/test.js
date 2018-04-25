// 
const should = require('chai').should;
should();

describe('Test CI', function(){
  it('should alert with Hello World', function(){
      let result = "Hello World";

      result.should.equal("Hello World");
  })
})