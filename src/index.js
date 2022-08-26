import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Link } from "react-router-dom";
import AppContext from "./contexts/AppContext";
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <AppContext>
      <Router>
        <App />
      </Router>
    </AppContext>
  </React.StrictMode>
);