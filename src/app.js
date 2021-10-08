// Core
import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter as Router } from 'connected-react-router';

// Theme
import './theme/index.scss';

// Routes
import { Routes } from './navigation';

// Other
import { history } from './init/middleware';
import { store } from './init/store';

// Libraries
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

export const App = () => {
  return (
      <Provider store={store}>
          <Router history={history}>
              <Routes />
          </Router>
      </Provider>
  );
};
