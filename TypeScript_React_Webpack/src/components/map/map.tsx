import React from 'react'
import ReactDOM from 'react-dom'
//import {GoogleApiWrapper} from 'google-maps-react'
import {WaypointMap} from '../map/waypointMap'

let   GoogleApiWrapper = require('google-maps-react').GoogleApiWrapper;

export interface MapXProps
{
  loaded?:Boolean,
  google?:any
}

export interface MapXState
{
}

export class MapX extends React.Component<MapXProps, MapXState>  {
  constructor(props : MapXProps, context : any) {
      //alert(WithMarkers);
    super(props, context);
    this.state = {
    };
  }
  render() {
  return(
      <WaypointMap loaded={this.props.loaded} google={this.props.google} />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCG_KuXMd6mrgAzrRcgXr91Yr6Ed03VNaw'
}
)(MapX)