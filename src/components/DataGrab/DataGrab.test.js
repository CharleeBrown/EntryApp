import React from 'react';
import ReactDOM from 'react-dom';
import DataGrab from './DataGrab';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DataGrab />, div);
  ReactDOM.unmountComponentAtNode(div);
});