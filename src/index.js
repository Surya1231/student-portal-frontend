import React from 'react';
import ReactDOM from 'react-dom';
import Provider from 'react-redux';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Importing bootstrap
import bootstrap from 'bootstrap'; // eslint-disable-line
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// Custom Stylesheets
import './styles/scss/common.scss';
import store from './store/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// Register and unregister service worker
serviceWorker.unregister();
