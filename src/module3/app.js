var $ = require('jquery');

function browser_level_test() {
  var $foo = $('#foo');
  console.log("Value");
  console.log($foo);
  $foo.attr('data-foo', '100');
  return $foo;
}

module.exports = browser_level_test;
