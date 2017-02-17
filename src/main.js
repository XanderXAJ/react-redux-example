import React from 'react';
import ReactDOM from 'react-dom';
import Store from './Store';
import TodoApp from './component/TodoApp';

const render = () => {
  ReactDOM.render(
    <TodoApp
      todos={Store.getState().todos}
    />,
    document.getElementById('root')
  );
};

Store.subscribe(render);
document.addEventListener('DOMContentLoaded', function() {
  render();
});
