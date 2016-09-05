import * as Redux from 'redux';
import trips from './tripReducer';
import waypoints from './waypointReducer';
import pictures from './pictureReducer';
import logins from './loginReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';
import errors from './ajaxErrorReducer';

const rootReducer = Redux.combineReducers({
  logins,
  trips,
  waypoints,
  pictures,
  ajaxCallsInProgress,
  errors  
});

export default rootReducer;
