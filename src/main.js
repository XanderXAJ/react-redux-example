import React from 'react';
import ReactDOM from 'react-dom';
import Store from './Store';

const render = () => {
  ReactDOM.render(
    <div />,
    document.getElementById('root')
  );
};

Store.subscribe(render);
document.addEventListener('DOMContentLoaded', function() {
  render();
});
