var test = require('tape');
var banr = require('./');
var spec = '/*! Banr v1.0.0 | MIT (c) 2016 José Luis Quintana */\n';

test('Test Suite', function(t) {
  t.plan(1);
  t.equal(banr(), spec, 'Ok when banner string is equal to expected.');
});
