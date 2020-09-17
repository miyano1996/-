import React from 'react';
import Home from './pages/Home';
import './assets/style/index.scss';
import { Provider } from 'react-redux';
import store from '../src/store/index';
function App() {
  return (
    <>
      <Provider store={store}>
        <Home />
      </Provider>
    </>
  );
}

export default App;
