import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import App from './index';
import configureStore from 'redux/configure-store'

const store = configureStore()

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <App fetchData={() => {}}/>
    </Provider>,
    div,
  );
});
