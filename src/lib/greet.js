'use strict';

const greet = module.exports = {};

greet.hi = (name) => {
  if (name === '' || typeof name !== 'string') {
    return null;
  }
  return `Hello ${name}!`;
}

greet.bye = (name) => {
  if (name === '' || typeof name !== 'string') {
    return null;
  }
  return `Bye ${name}!`;
};

