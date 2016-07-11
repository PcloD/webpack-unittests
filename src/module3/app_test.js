var should = require('chai').should();
var app = require('./app');

describe('content', function() {
  it('should return value', function(done) {

    // Setup
    var content = "<div id='foo'>Foo</div>";
    var container = document.createElement('div');
    container.innerHTML = content;
    document.body.appendChild(container);

    // Wait for dom update
    setTimeout(function() {
      var $rtn = app();
      should.equal($rtn.attr('data-foo'), '100');
      container.remove();

      // Wait for completion
      setTimeout(function() {
        done();
      }, 1);
    }, 1);
  });
});
