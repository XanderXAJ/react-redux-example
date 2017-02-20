import todos from '../todos';

test('add todo', () => {
  const startState = [];
  const action = {
    type: 'ADD_TODO',
    id: 0,
    text: 'Todo'
  };
  const expectedState = [
    {
      completed: false,
      id: 0,
      text: 'Todo'
    }
  ];

  expect(
      todos(startState, action)
  ).toEqual(expectedState);
});

test('add todo', () => {
  const startState = [
    {
      completed: false,
      id: 0,
      text: 'Todo0'
    }
  ];
  const action = {
    type: 'ADD_TODO',
    id: 1,
    text: 'Todo1'
  };
  const expectedState = [
    {
      completed: false,
      id: 0,
      text: 'Todo0'
    },
    {
      completed: false,
      id: 1,
      text: 'Todo1'
    }
  ];

  expect(
      todos(startState, action)
  ).toEqual(expectedState);
});

test('toggle todo complete', () => {
  const startState = [
    {
      completed: false,
      id: 0,
      text: 'Todo0'
    }
  ];
  const action = {
    type: 'TOGGLE_TODO',
    id: 0
  };
  const expectedState = [
    {
      completed: true,
      id: 0,
      text: 'Todo0'
    }
  ];

  expect(
      todos(startState, action)
  ).toEqual(expectedState);
});

test('toggle todo incomplete', () => {
  const startState = [
    {
      completed: true,
      id: 0,
      text: 'Todo0'
    }
  ];
  const action = {
    type: 'TOGGLE_TODO',
    id: 0
  };
  const expectedState = [
    {
      completed: false,
      id: 0,
      text: 'Todo0'
    }
  ];

  expect(
      todos(startState, action)
  ).toEqual(expectedState);
});
