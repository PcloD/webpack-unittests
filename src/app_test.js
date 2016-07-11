var should = require('chai').should();
var app = require('./app');

describe('foo', function() {
  it('should not be null', function() {
    should.not.equal(app, null);
  });
});
