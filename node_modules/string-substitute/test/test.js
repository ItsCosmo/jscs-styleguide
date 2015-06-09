var assert = require('assert');
var stringSubstitute = require('../index.js');

describe('string-substitute', function () {
  it('should not replace anything when didn\'t pass any parameters', function () {
  assert.equal(stringSubstitute('My name is Bruce Wayne'), 'My name is Bruce Wayne');
  });
  it('should replace values given in parameter', function () {
  assert.equal(stringSubstitute('My name is {0}', 'Bruce Wayne'), 'My name is Bruce Wayne');
  });
  it('should replace values given in multiple parameters', function () {
  assert.equal(stringSubstitute('{0}, my name is {1}', 'Hello', 'Bruce Wayne'), 'Hello, my name is Bruce Wayne');
  });
  it('should replace values given in multiple parameters multiple times', function () {
    assert.equal(stringSubstitute('{0}, my name is {1}. {0}, my name is {1}.', 'Hello', 'Bruce Wayne'), 'Hello, my name is Bruce Wayne. Hello, my name is Bruce Wayne.');
  });
  it('should not replace string when parameters are not passed', function () {
    assert.equal(stringSubstitute('{0}, my name is {1}.'), '{0}, my name is {1}.');
  });
});