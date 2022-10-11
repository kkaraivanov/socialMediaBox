import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './app/store';
import { load } from './app/slices/appSlice'
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
store.dispatch(load());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);