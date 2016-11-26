import React from 'react'
import ReactDOM from 'react-dom'

let Map = require('google-maps-react').Map;
let InfoWindow = require('google-maps-react').InfoWindow;
let Marker = require('google-maps-react').Marker;
let GoogleApiWrapper = require('google-maps-react').GoogleApiWrapper;

export interface WaypointMapProps
{
    loaded:Boolean,
    google:any;
    waypoints : any[];
    initialCenter : any; //todo tz position
}

export interface WaypointMapState
{
}

export class WaypointMap extends React.Component<WaypointMapProps, WaypointMapState>  {
  constructor(props : WaypointMapProps, context : any) {
    super(props, context);
    this.state = {
    };

    this.onClick = this.onClick.bind(this);
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
  }

  onMarkerClick(props : any, marker : any, event : any){
    alert('onMarkerClick ' + props.name);
  }

  onMouseOver(props : any, map : any, event : any){
    alert('onMouseOver(' + event.latLng.lat() + ", " + event.latLng.lng() + ")");
  }

  onClick(props : any, map : any, event : any){
    alert('onClick(' + event.latLng.lat() + ", " + event.latLng.lng() + ")");
  }

  render() {
    //          initialCenter={{ lat: 44.5, lng: -88 }}
  return(
    this.props.loaded ?
      <Map google={this.props.google} 
          onClick={this.onClick}
          style={{width: '86%', height: '400px', position: 'relative'}}
          className={'map'}
          zoom={9} 
          initialCenter={this.props.initialCenter}
          >
        {this.props.waypoints.map((wp) =>
          <Marker key={wp.waypointId} 
            onClick={this.onMarkerClick}
            onMouseOver={this.onMouseOver}
            name={wp.name}
            position={wp.position} />
        )} 
      </Map>
      : <div>Map loading...</div>

    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCG_KuXMd6mrgAzrRcgXr91Yr6Ed03VNaw'
}
)(WaypointMap)


