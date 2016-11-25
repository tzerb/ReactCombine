import React from 'react'
import ReactDOM from 'react-dom'

let Map = require('google-maps-react').Map;
let InfoWindow = require('google-maps-react').InfoWindow;
let Marker = require('google-maps-react').Marker;
let GoogleApiWrapper = require('google-maps-react').GoogleApiWrapper;

var waypoints = [
  {waypointId:1, name:"11", position:{lat: 44.3, lng:-88}}, 
  {waypointId:2, name:"22", position:{lat: 44.4, lng:-88.04}}, 
  {waypointId:4, name:"44", position:{lat: 44.3, lng:-88.04}}, 
  {waypointId:3, name:"33", position:{lat: 44.4, lng:-88}}];

export interface WaypointMapProps
{
    loaded:Boolean,
    google:any;
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
    //debugger;
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
          style={{width: '90%', height: '90%', position: 'relative'}}
          className={'map'}
          zoom={9} 
          initialCenter={{ lat: 44.5, lng: -88 }}
          >
        {waypoints.map((wp) =>
          <Marker key={wp.waypointId} 
            onClick={this.onMarkerClick}
            onMouseOver={this.onMouseOver}
            name={wp.name}
            position={wp.position} />
        )} 
      </Map>
      : <div>here</div>

    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCG_KuXMd6mrgAzrRcgXr91Yr6Ed03VNaw'
}
)(WaypointMap)


