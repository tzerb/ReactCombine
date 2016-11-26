import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import WaypointMap from '../map/waypointMap';

export interface TripMapProps
{
}

export interface TripMapState
{
}
var waypoints = [
  {waypointId:1, name:"Mom and Dad", position:{lat: 44.4854, lng:-87.9863}}, 
  {waypointId:2, name:"Depere Trumpeter", position:{lat: 44.436, lng:-88.033}}, 
  {waypointId:4, name:"44", position:{lat: 44.3, lng:-88.04}}, 
  {waypointId:5, name:"Brian and Sandy", position:{lat: 40.24738, lng:-76.959907}}, 
  {waypointId:6, name:"66", position:{lat: 44.45, lng:-88.0}}, 
  {waypointId:7, name:"Jon and Julie", position:{lat: 44.518262, lng:-87.70898}}, 
  {waypointId:3, name:"Linda and Ben", position:{lat: 44.49832, lng:-88.0659318}}];

export class TripMap extends React.Component<TripMapProps, TripMapState>  {
    constructor(props:TripMapProps, context : any)    {
        super(props, context);

    }
   
    render() {
        return(
                <WaypointMap
                style={{width: '100%', height: '100%'}}
                waypoints={waypoints}
                initialCenter ={{ lat: 44.5, lng: -88 }}
                />                
            );
    }
}

export default TripMap;