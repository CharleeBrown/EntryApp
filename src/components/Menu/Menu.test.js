import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './Menu';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Menu />, div);
  ReactDOM.unmountComponentAtNode(div);
});