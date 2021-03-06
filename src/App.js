import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

const App = () => (
  <Provider store={store} />
);

App.propTypes = {
};

export default App;
