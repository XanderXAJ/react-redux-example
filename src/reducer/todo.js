import { combineReducers } from 'redux';
import visibilityFilter from './visibilityFilter';


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

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ];
    case 'TOGGLE_TODO':
      return state.map(t => todo(t, action));
    default:
      return state;
  }
};

const todoApp = combineReducers({
  todos,
  visibilityFilter
});

export default todoApp;
export { todos };
