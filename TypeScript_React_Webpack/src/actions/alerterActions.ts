import * as types from './actionTypes';
import {ajaxCallError} from './ajaxStatusActions';

function alerterSuccess(msg : any)
{
    return {type: types.ALERTER_SUCCESS, msg};
}

function alerterError(msg : any)
{
    return {type: types.ALERTER_ERROR, msg};
}

function alerterPoplast()
{
    return {type: types.ALERTER_POPLAST};
}

export function alertSuccess(msg:any) {
    return function (dispatch : any){
        dispatch(alerterSuccess({msg}));
        dispatch(ajaxCallError('success error'));
    };
}

export function alertError(msg:any) {
    return function (dispatch : any){
        dispatch(alerterError({msg}));
        dispatch(ajaxCallError('error error'));
    };
}

export function alertPoplast() {
    return function (dispatch : any){
        dispatch(alerterPoplast());
        dispatch(ajaxCallError('removed error'));
    };
}