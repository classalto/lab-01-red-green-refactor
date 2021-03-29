const fetchQuotes = require('./fetchQuotes');

jest.mock('node-fetch', () => () =>
  Promise.resolve({
    json: () =>
      Promise.resolve([
        {
          character: 'Mark',
          quote: 'I am mark',
          image: 'http://markimage.png',
        },
      ]),
  })
);

describe('fetch quote function', () => {
  it('should return a quote with character, quote, image properties', async () => {
    const quote = await fetchQuotes();

    expect(quote).toEqual({
      name: expect.any(String),
      text: expect.any(String),
      image: expect.any(String),
    });
  });
});
