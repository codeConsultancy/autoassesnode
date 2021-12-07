const assignment = require('./assignment');

global.knownPrimes=[
  2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97
];
global.testInput=knownPrimes[Math.floor(Math.random()*knownPrimes.length)];

test('Can check valid value', () => {
  expect(assignment()).toBe("Invalid Value!");
});

test('Can handle 1', () => {
  expect(assignment(1)).toBe("Neither Prime nor Composite!");
});

test('Can trace vaild prime number', () => {
  expect(assignment(testInput)).toBe("Prime!");
  expect(assignment(testInput+"")).toBe("Prime!");
});

test('Can trace vaild Composite number', () => {
  testInput++;
  expect(assignment(testInput)).toBe("Composite!");
  expect(assignment(testInput+"")).toBe("Composite!");
});
