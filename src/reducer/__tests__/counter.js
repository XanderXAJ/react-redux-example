import { counter } from '../counter';

test('increments with INCREMENT action', () => {
  expect( counter(0, {type: 'INCREMENT'}) ).toEqual(1);
  expect( counter(-1, {type: 'INCREMENT'}) ).toEqual(0);
  expect( counter(1, {type: 'INCREMENT'}) ).toEqual(2);
  expect( counter(-2, {type: 'INCREMENT'}) ).toEqual(-1);
});

test('decrements with DECREMENT action', () => {
  expect( counter(1, {type: 'DECREMENT'}) ).toEqual(0);
  expect( counter(0, {type: 'DECREMENT'}) ).toEqual(-1);
  expect( counter(2, {type: 'DECREMENT'}) ).toEqual(1);
  expect( counter(-1, {type: 'DECREMENT'}) ).toEqual(-2);
});

test('unknown action returns same state', () => {
  expect( counter(3, {type: 'WHOOPS'}) ).toEqual(3);
});

test('default state is 0', () => {
  expect( counter(undefined, {type: 'INCREMENT'}) ).toEqual(1);
  expect( counter(undefined, {type: 'DECREMENT'}) ).toEqual(-1);
  expect( counter(undefined, {type: 'UNKNOWN'}) ).toEqual(0);
});
