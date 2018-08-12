

const sum  = require('./sum');

test("adding two nums", () => {
  expect(sum(3, 4)).toBe(7);
});