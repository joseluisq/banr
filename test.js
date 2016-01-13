var test = require('tape');
var banr = require('./');

test('Test Suite', function(t) {
  t.plan(3);
  t.ok(banr('./package.json'), 'Ok when path param does exist.');
  t.notOk(banr('./unknown_package.json'), 'Not ok when path param does not exist.');
  t.notOk(banr(123), 'Not ok when path param is not valid path.');
});
