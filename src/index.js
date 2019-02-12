import { render } from 'react-dom';
import { Provider } from 'react-redux';
import React from 'react';
import store from './store/index';
import App from './App';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
