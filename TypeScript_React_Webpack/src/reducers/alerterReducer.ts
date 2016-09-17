import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function alerterReducer(state = initialState.alerter, action : any) {

    switch(action.type) {
        case types.ALERTER_SUCCESS:
        case types.ALERTER_ERROR:
        return [
            ...state,
            Object.assign({}, action.msg)
        ];     
        case types.ALERTER_POPLAST:
        return [
            ...state.slice(1)
        ];
    }
    return state;
}
