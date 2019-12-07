import React from 'react';
import logo from './logo.svg';
import './App.css';
import Test from './Test';
import AppRouter from './Approuter';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;
