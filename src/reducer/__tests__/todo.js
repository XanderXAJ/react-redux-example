import todoApp from '../todo';
import { todos } from '../todo';

test('initial app state', () => {
  const expectedState = {
    todos: [],
    visibilityFilter: 'SHOW_ALL'
  };

  expect(
    todoApp(undefined, {})
  ).toEqual(expectedState);
});

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
    todos(stateBefore, action)
  ).toEqual(stateAfter);
});

test('adds todo', () => {
  const stateBefore = [
    {
      id: 0,
      text: 'Learn Redux',
      completed: false
    },
    {
      id: 1,
      text: 'Go shopping',
      completed: false
    }
  ];
  const action = {
    type: 'TOGGLE_TODO',
    id: 1
  };
  const stateAfter = [
    {
      id: 0,
      text: 'Learn Redux',
      completed: false
    },
    {
      id: 1,
      text: 'Go shopping',
      completed: true
    }
  ];

  expect(
    todos(stateBefore, action)
  ).toEqual(stateAfter);
});
