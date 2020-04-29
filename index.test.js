const sum = require('./index');

test('adds 1 + 2 equals 3', () => {
    expect(sum(1, 2)).toBe(3);
})