const todo = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          completed: false,
          id: action.id,
          text: action.text
        }
      ];
    case 'TOGGLE_TODO':
      return state.map(todo => {
        if (todo.id === action.id) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          });
        }
        return todo;
      });
    default:
      return state;
  }
}

export default todo;
