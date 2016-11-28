//import 'babel-polyfill';
import * as React from 'react';
import {Component} from "react";
import {render} from 'react-dom';
import * as ReactDOM from "react-dom";
import {Router, browserHistory} from 'react-router';

import routes from './routes';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import {loadTrips} from './actions/tripActions';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.css'; //Webpack can import CSS files too!

let injectTapEventPlugin = require('react-tap-event-plugin');

const store = configureStore();
try
{
    injectTapEventPlugin();
}
catch(e)
{
    alert('error injectTapEventPlugin')
}

// Dispatch actions to load initial state.
try {
  store.dispatch(loadTrips());
}
catch(ex)
{
  // TODO TZ - Should handle this better.
  alert("issue loading initial data (is the server running)");
}

function onRouterError(error : any)
{
  alert('onRouterError');
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} onError={onRouterError}/>
  </Provider>,
  document.getElementById('app')
);
