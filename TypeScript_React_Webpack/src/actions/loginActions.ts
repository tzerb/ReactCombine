import * as types from './actionTypes';
import ApiSelector from '../api/ApiSelector';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

// import { isTokenExpired } from './jwtHelper'
import Auth0Lock from "auth0-lock";

export function loginSuccess(loginInfo : any)
{
    return {type: types.LOGIN_SUCCESS, loginInfo};
}

export function logoutSuccess()
{
    return {type: types.LOGOUT_SUCCESS, loginInfo: { userName: "xxx"}};
}

function _doAuthentication(authResult : any){
    debugger;
}

function _authorizationError(error : any){
    // Unexpected authentication error
    console.log('Authentication Error', error)
}

export function login() {

    let options = {};

    let lock = new Auth0Lock("2L6x1LYWdXKxsjZg67CKEPzMJH4YctE4", "tzerb.auth0.com", options);

    //   additionalSignUpFields: [{
    //     name: "address",                              // required
    //     placeholder: "enter your address",            // required
    //     validator: function(value) {                  // optional
    //       // only accept addresses with more than 10 chars
    //       return value.length > 10;
    //     }
    //   }]
    // } as Auth0LockConstructorOptions)
    // Add callback for lock `authenticated` event
    lock.on('authenticated', _doAuthentication.bind(this))
    lock.on('authorization_error', _authorizationError.bind(this))
    lock.show();

    return function (dispatch : any)
    {
        dispatch(loginSuccess({userName:'Tim Zirbel'}));
    };
}
