'use strict';

const swap = require('./case-swapping');

test('Should return swapped phrase', () => {
  expect(swap('HelloWorld'))
    .toBe('hELLOwORLD');
});

test('Should return swapped long phrase', () => {
  expect(swap('lfTm704Unwfis-0acqfnO31 7 _ImaU7-,um.0SIia7.55MJ9'))
    .toBe('LFtM704uNWFIS-0ACQFNo31 7 _iMAu7-,UM.0siIA7.55mj9');
});

test('Should work with empty string', () => {
  expect(swap(''))
    .toBe('');
});

test('Should work with space symbol', () => {
  expect(swap(' '))
    .toBe(' ');
});

test('Should work with different characters', () => {
  expect(swap('h_e_L-L_0 wo|||rLD'))
    .toBe('H_E_l-l_0 WO|||Rld');
});
