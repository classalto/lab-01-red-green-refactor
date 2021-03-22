describe('get name function', () => {
  it('should get and return the name property of an object', () => {
    const object = { name: 'victor' };

    expect(object.name).toEqual('victor');
  });
});
