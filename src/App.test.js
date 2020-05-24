import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

it ('renders without crashing', () => {
  const main = document.createElement('main');
  ReactDOM.render(<BrowserRouter> <App /> </BrowserRouter>, main);
  ReactDOM.unmountComponentAtNode(main);
});
