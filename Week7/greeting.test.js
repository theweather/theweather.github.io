var utils  = require('course-utilities');
var greet = utils.load('./greeting.js', 'greet');

function greetAll(callback, name) {
  callback(name);
}

describe('greetAll', () => {
  test('greet is called', () => {
    const greet = jest.fn();
    greetAll(greet, 'JenErik');
    expect(greet).toHaveBeenCalled();
  });

  test('name is null', () => {
    const greet = jest.fn();
    greetAll(greet, null);
    expect.stringMatching('Hello there!');
  });

  test('name is Elizabeth', () => {
    const greet = jest.fn();
    greetAll(greet, 'Elizabeth');
    expect.stringMatching('Hello, Elizabeth');
  });

  test('name is all caps', () => {
    const greet = jest.fn();
    greetAll(greet, 'BARNABY');
    expect.stringMatching('HELLO, BARNABY!');
  });

  test('names can be two', () => {
    const greet = jest.fn();
    greetAll(greet, ['Elphaba','Galinda']);
    expect.stringMatching('Hello, Elphaba, Galinda')
  });

  test('names can be many', () => {
    const greet = jest.fn();
    greetAll(greet, ['One','Two', 'Three', 'Four']);
    expect.stringMatching('Hello, One, Two, Three, Four')
  });
});

//https://jestjs.io/docs/expect