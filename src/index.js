import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Importing bootstrap
import bootstrap from 'bootstrap'; // eslint-disable-line
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// Custom Stylesheets
import './styles/scss/common.scss';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

// Register and unregister service worker
serviceWorker.unregister();
