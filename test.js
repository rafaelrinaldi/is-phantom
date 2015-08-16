'use strict';

var isPhantom = require('./');
var test = require('tape');

test('is phantom', function(t) {
  t.deepEqual(isPhantom(), true, 'result should be true when current running context is phantom');
  t.end();
});
