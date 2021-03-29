const copyAndPush = require('./copyAndPush');

describe('copy and push function', () => {
  it('function should return original array plus one new item at the end', () => {
    const originalArray = ['victor'];

    const newArray = copyAndPush(originalArray, 'michael');

    expect(newArray).toEqual(['victor', 'michael']);
  });

  it('test should show that original array is not modified', () => {
    const originalArray = ['victor'];

    const newArray = copyAndPush(originalArray, 'harry');

    expect(originalArray).not.toEqual(newArray);
  });
});
