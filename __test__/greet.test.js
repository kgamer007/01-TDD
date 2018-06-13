'use strict';

const greet = require('./../src/lib/greet');

describe('testing #greet', () => {
  describe('testing #greet.hi', () => {
    test('greet.hi should return Hello Kevin', () => {
      expect(greet.hi('Judy')).toBe('Hello Judy!');
    });

    test('testing #greet.hi returns null', () => {
      expect(greet.hi(null)).toBeNull();
    });
  });
});
