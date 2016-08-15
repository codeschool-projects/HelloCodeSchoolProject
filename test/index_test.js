var jsdom = require('jsdom'),
    fs = require('fs'),
    assert = require('chai').assert,
    file = fs.readFileSync('index.html').toString();

describe('Your HTML Page', function() {
  var window;
  before(function(next) {
    jsdom.env(
      file,
      ["http://code.jquery.com/jquery.js"],
      function (err, w) {
        if(err) { next(err); }
        window = w;
        next();
      }
    );
  });

  it('should have a different title', function() {
    assert.notEqual(window.$('title').text(), 'Hello Code School');
  });

  it('should have a different h1', function() {
    assert.notEqual(window.$('h1').length, 0);
  });

  it('should have a ul', function() {
    assert.notEqual(window.$('ul').length, 0);
  });

  it('should have at least 2 li elements', function() {
    assert.isAtLeast(window.$('li').length, 2);
  });
});
