import * as types from './actionTypes';
import ApiSelector from '../api/ApiSelector';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function createTripSuccess(trip : any)
{
    return {type: types.CREATE_TRIP_SUCCESS, trip};
}

export function updateTripSuccess(trip : any)
{
    return {type: types.UPDATE_TRIP_SUCCESS, trip};
}

export function loadTripSuccess(trips : any)
{
    return {type: types.LOAD_TRIPS_SUCCESS, trips};
}

export function deleteTripSuccess(trip : any)
{
    return {type: types.DELETE_TRIP_SUCCESS, trip};
}

export function deleteTripWaypointSuccess(trip : any, waypoint : any)
{
    return {type: types.DELETE_TRIP_SUCCESS, trip, waypoint};
}

export function loadTrips() {
    return function (dispatch : any){
        return ApiSelector.TripApi().getAllTrips().then(trips => {
            dispatch(loadTripSuccess(trips));
        }).catch (error => {
            dispatch(ajaxCallError(error));
            throw(error);
        });
    };
}

export function saveTrip(trip : any) {
  return function (dispatch : any, getState : any) {
    dispatch(beginAjaxCall());
    return ApiSelector.TripApi().saveTrip(trip).then((trip : any) => {
        if (trip.tripId)
        {
            dispatch(updateTripSuccess(trip));
        }
        else
        {
            dispatch(createTripSuccess(trip));
        }
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
 
}

export function deleteTrip(trip : any) {
  return function (dispatch : any, getState : any) {
    dispatch(beginAjaxCall());
    return ApiSelector.TripApi().deleteTrip(trip.tripId).then(t => {
        dispatch(deleteTripSuccess(trip));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
} 
  