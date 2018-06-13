'use strict';

const arithmetic = require('./../src/lib/arithmetic');

describe('testing #arithmetic', () => {
  describe('testing arithmetic.add function', () => {
    test('add values and negative values', () => {
      expect(arithmetic.add(4, 2)).toEqual(6);
      expect(arithmetic.add(4, -2)).toEqual(2);
      expect(arithmetic.add(0, 0)).toEqual(0);
      expect(arithmetic.add(-4, 2)).toEqual(-2);
      expect(arithmetic.add(-4, -2)).toEqual(-6);
    });
    test('values that are non-number should return null', () => {
      expect(arithmetic.add('2', 2)).toBeNull();
      expect(arithmetic.add('2', '2')).toBeNull();
      expect(arithmetic.add(2, '2')).toBeNull();
    });
  });
  describe('testing arithmetic.sub function', () => {
    test('subtract values and negative values', () => {
      expect(arithmetic.sub(4, 2)).toEqual(2);
      expect(arithmetic.sub(4, -2)).toEqual(6);
      expect(arithmetic.sub(0, 0)).toEqual(0);
      expect(arithmetic.sub(-4, 2)).toEqual(-6);
      expect(arithmetic.sub(-4, -2)).toEqual(-2);
    });
    test('values that are non-number should return null', () => {
      expect(arithmetic.sub('2', 2)).toBeNull();
      expect(arithmetic.sub('2', '2')).toBeNull();
      expect(arithmetic.sub(2, '2')).toBeNull();
    });
  });
});
