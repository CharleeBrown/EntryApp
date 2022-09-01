import React from 'react';
import ReactDOM from 'react-dom';
import ClearBtn from './ClearBtn';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ClearBtn />, div);
  ReactDOM.unmountComponentAtNode(div);
});