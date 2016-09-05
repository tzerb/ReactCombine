import * as types from '../actions/actionTypes';
import initialState from './initialState';


export default function ajaxErrorReducer(state = initialState.errors, action : any) {
  if (action.type == types.AJAX_CALL_ERROR) {
    if (!action.error)
      return [...'generic error'];
    else
      return [...action.error];
  }

  return state;
}
