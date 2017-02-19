const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        completed: false,
        id: action.id,
        text: action.text
      };
    case 'TOGGLE_TODO':
      if (state.id === action.id) {
        return Object.assign({}, state, {
          completed: !state.completed
        });
      }
      return state;
    default:
      return state;
  }
};

export default todo;
