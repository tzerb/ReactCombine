import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function loginReducer(state = initialState.logins, action : any) {
        
    switch(action.type) {

        case types.LOGIN_SUCCESS:
            return Object.assign({}, action.loginInfo);

        case types.LOGOUT_SUCCESS:
            return Object.assign({}, action.loginInfo);

        default:
            return state;

    }

}