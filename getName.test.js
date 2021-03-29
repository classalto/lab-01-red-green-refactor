const getName = require('./getName');

describe('get name function', () => {
  it('should get and return the name property of an object', () => {
    const object = { name: 'victor' };

    const expectation = getName(object);

    expect(expectation).toEqual(object.name);
  });
});
