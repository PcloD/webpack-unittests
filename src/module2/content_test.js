var should = require('chai').should();
var content = require('./content');

describe('content', function() {
  it('should return value', function() {
    should.equal(content(), "Hello World");
  });
});
