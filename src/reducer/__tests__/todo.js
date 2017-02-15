import todo from '../todo';

test('adds todo', () => {
  const stateBefore = [];
  const action = {
    type: 'ADD_TODO',
    id: 0,
    text: 'Learn Redux'
  };
  const stateAfter = [
    {
      id: 0,
      text: 'Learn Redux',
      completed: false
    }
  ];

  expect(
    todo(stateBefore, action)
  ).toEqual(stateAfter);
});
