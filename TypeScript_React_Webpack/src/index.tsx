import 'babel-polyfill';
import * as React from 'react';
import {Component} from "react";
import {render} from 'react-dom';
import * as ReactDOM from "react-dom";

import {Router, browserHistory} from 'react-router';
import routes from './routes';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import {loadTrips} from './actions/tripActions';
import {alertSuccess} from './actions/alerterActions';

// import {loadWaypoints} from './actions/waypointActions';
// import {loadPictures} from './actions/pictureActions';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.css'; //Webpack can import CSS files too!
// import '../node_modules/toastr/build/toastr.min.css';
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
  // let trips = loadTrips();
  // TODO TZ - Use the server to load initial state?
  store.dispatch(loadTrips());
  // store.dispatch(loadWaypoints());
  // store.dispatch(loadPictures());
}
catch(ex)
{
  // TODO TZ - Should handle this better.
  alert("issue loading initial data (is the server running)");
}

//store.dispatch(alertSuccess('App Started'));

// export interface MainProps {  }
// export interface MainState { open:boolean; }
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

// class Main extends Component<MainProps, MainState> {
//   constructor(props: MainProps, context: any) {
//     super(props, context);

//     this.state = {
//       open: false,
//     };
//   }

//   render() {
//     alert('here');
//     return (<div>hello</div>);

//   }
// }
