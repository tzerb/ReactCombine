import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../reducers/index';
//import * as reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
let reduxImmutableStateInvariant = require('redux-immutable-state-invariant') as any;

export default function configureStore(initialState? : any) {

  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk, reduxImmutableStateInvariant()));
}
 