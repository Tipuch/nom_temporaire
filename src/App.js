import React from 'react';
import { Provider } from 'react-redux';
import { object } from 'prop-types';
import store from './store';

const App = ({ history }) => (
  <Provider store={store}>
  </Provider>
);

App.propTypes = {
  history: object.isRequired,
};

export default App;
