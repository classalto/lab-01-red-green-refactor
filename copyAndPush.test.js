describe('copy and push function', () => {
  it('function should return a new array with original array plus one new item at the end', () => {
    const originalArray = ['victor'];

    originalArray.push('michael');

    expect(originalArray).toEqual(['victor', 'michael']);
  });
});
