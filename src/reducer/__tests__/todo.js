import todo from '../todo';

test('returns same state on recognised action', () => {
  expect(todo(undefined, {})).toEqual(undefined);
  expect(todo(null, {type: 'MADE_UP'})).toEqual(null);
});

test('todo created with correct id and text', () => {
  const action = {
    type: 'ADD_TODO',
    id: 1,
    text: 'Do a thing'
  };
  const expectedState = {
    completed: false,
    id: 1,
    text: 'Do a thing'
  };

  expect(
      todo(undefined, action)
  ).toEqual(expectedState);
});
