import * as types from './actionTypes';
import ApiSelector from '../api/ApiSelector';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function createPictureSuccess(picture : any)
{
    return {type: types.CREATE_PICTURE_SUCCESS, picture};
}

export function updatePictureSuccess(picture : any)
{
    return {type: types.UPDATE_PICTURE_SUCCESS, picture};
}

export function loadPictureSuccess(pictures : any)
{
    return {type: types.LOAD_PICTURES_SUCCESS, pictures};
}

export function deletePictureSuccess(picture : any)
{
    return {type: types.DELETE_PICTURE_SUCCESS, picture};
}

export function deletePictureWaypointSuccess(picture : any, waypoint : any)
{
    return {type: types.DELETE_PICTURE_SUCCESS, picture, waypoint};
}

export function loadPictures() {
    return function (dispatch : any){
        let picApi = ApiSelector.PictureApi();
        return picApi.getAllPictures().then(pictures => {
            dispatch(loadPictureSuccess(pictures));
        }).catch (error => {
            throw(error);
        });
    };
}

export function savePicture(picture : any) {
  return function (dispatch : any, getState : any) {
    dispatch(beginAjaxCall());
    let pictureApi = ApiSelector.PictureApi();
    return pictureApi.savePicture(picture).then((picture:any) => {
        if (picture.pictureId)
        {
            dispatch(updatePictureSuccess(picture));
        }
        else
        {
            dispatch(createPictureSuccess(picture));
        }
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
 
}


export function deletePicture(picture : any) {
  return function (dispatch : any, getState : any) {
    dispatch(beginAjaxCall());
    return ApiSelector.PictureApi().deletePicture(picture.pictureId).then(t => {
        dispatch(deletePictureSuccess(picture));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
} 