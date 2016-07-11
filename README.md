# Webpack unit tests

## Setup

Install node, etc. then run:

    npm install

## Usage

To build the make bundle:

    make

To run tests in headless electron:

    make test

To watch tests:

    make test-watch

Now you can rebuild either all the tests again, or you can build individual tests one by one:

    make src/module3/app_test.js

## Tests

This uses mocha, but you can use anything karma supports.

Notice the async test pattern in `module3/app_test.js`:

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

          // Assert
          var $rtn = app();
          should.equal($rtn.attr('data-foo'), '100');

          // Cleanup for next test
          container.remove();

          // Wait for completion and resolve test case
          setTimeout(function() {
            done();
          }, 1);
        }, 1);
      });
    });

This is just a mocha example, any any test should be similarly async.

## Electron, runners, etc.

Read the [Karma](https://karma-runner.github.io/1.0/index.html) documentation; if Electron doesn't float
your boat, use something else from https://www.npmjs.com/browse/keyword/karma-launcher

eg. Chrome, phantom, etc.
