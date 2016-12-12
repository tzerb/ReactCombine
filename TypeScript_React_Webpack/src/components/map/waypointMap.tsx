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
    pictures : any[];
    initialCenter : any; //todo tz position
}

export interface WaypointMapState
{
    activeMarker?: any;
    newMarker?: any;
    showingInfoWindow?: boolean;
    activeWaypoint?: any;
    activePicture?: any;
}

export class WaypointMap extends React.Component<WaypointMapProps, WaypointMapState>  {
  constructor(props : WaypointMapProps, context : any) {
    super(props, context);
    this.state = {
      activeMarker:null, showingInfoWindow:false,activePicture:null, activeWaypoint:null 
    };

    this.onClick = this.onClick.bind(this);
    this.onWaypointMarkerClick = this.onWaypointMarkerClick.bind(this);
    this.onPictureMarkerClick = this.onPictureMarkerClick.bind(this);
  }

  onWaypointMarkerClick(props : any, marker : any, event : any){
    this.setState({
      activeMarker:marker, showingInfoWindow:true,activePicture:null, activeWaypoint:props.waypoint 
    });
  }

  onPictureMarkerClick(props : any, marker : any, event : any){
    this.setState({
      activeMarker:marker, showingInfoWindow:true,activePicture:props.picture, activeWaypoint:null 
    });
  }

  onClick(props : any, map : any, event : any)
  {
    alert('onClick(' + event.latLng.lat() + ", " + event.latLng.lng() + ")");

    // var newWaypoint = {
    //   latitude:event.latLng.lat(), longitude:event.latLng.lng() 
    // };

    // var newMarker = 
    //         <Marker key={0} 
    //           name={'new marker'} waypoint={newWaypoint}
    //           position={{ lat: newWaypoint.latitude, lng:newWaypoint.longitude }} />

    // this.setState({
    //   newMarker:newMarker, activeMarker:newMarker, showingInfoWindow:true,activePicture:null, activeWaypoint:newWaypoint 
    // });    
  }

  getWaypointInfoWindow(waypoint:any)
  {
    return (waypoint) ? <div>{waypoint.name}</div> : <div/>;
  }

  getPictureInfoWindow(picture:any)
  {
    return (picture) ? <div>{picture.description}</div> : <div/>;
  }

  getInfoWindow()
  {
      return (        
        <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}>
            {this.state.activeWaypoint ? this.getWaypointInfoWindow(this.state.activeWaypoint) : this.getPictureInfoWindow(this.state.activePicture)}
          </InfoWindow>);
  }

  render() {
    var i =0;
    return(
      this.props.loaded ?
        <Map google={this.props.google} 
            onClick={this.onClick}
            style={{width: '700px', height: '400px', position: 'relative'}}
            className={'map'}
            zoom={9} 
            initialCenter={this.props.initialCenter}
            >
          {this.props.pictures.map((pic) =>
            <Marker key={i++} 
              onClick={this.onPictureMarkerClick}
              onMouseOver={this.onMouseOver}
              name={pic.description} picture={pic}
              position={{ lat: pic.latitude, lng:pic.longitude }} />
          )}

          {this.props.waypoints.map((wp) =>
            <Marker key={i++} 
              onClick={this.onWaypointMarkerClick}
              onMouseOver={this.onMouseOver}
              name={wp.name} waypoint={wp}
              position={{ lat: wp.latitude, lng: wp.longitude }} />
          )}
          {this.getInfoWindow()}
        </Map>
        : <div>Map loading...</div>

      );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCG_KuXMd6mrgAzrRcgXr91Yr6Ed03VNaw',
  version: 3.26
}
)(WaypointMap)


