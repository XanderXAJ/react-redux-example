import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';
import Store from './Store';

const render = () => {
  ReactDOM.render(
    <Counter
      value={Store.getState()}
      onIncrement={() =>
        Store.dispatch({
          type: 'INCREMENT'
        })
      }
      onDecrement={() =>
        Store.dispatch({
          type: 'DECREMENT'
        })
      }
    />,
  document.getElementById('root')
  );
};

Store.subscribe(render);
document.addEventListener('DOMContentLoaded', function() {
  render();
});
