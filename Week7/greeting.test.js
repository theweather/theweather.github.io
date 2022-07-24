var utils  = require('course-utilities');
var greet = utils.load('./greeting.js', 'greet');

function greetAll(callback, name) {
  if (name !== 'Elizabeth') {
    callback(name);
  }
}

describe('outputs the correct string', () => {
  test('should be called', function () {
    const greet = jest.fn();
    greetAll(greet, 'Elizabeth'); 
  });
});

//https://jestjs.io/docs/expect#tohavebeencalled