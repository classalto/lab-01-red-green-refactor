const capitalizeAndFilter = require('./capitalizeAndFilter');

describe('capitalize and filter function', () => {
  it('should capitalize all strings and filter out any starting with F', () => {
    const str = ['hello', 'there', 'friend'];

    const test = ['Hello', 'There'];

    const expectation = capitalizeAndFilter(str);

    expect(test).toEqual(expectation);
  });
});
