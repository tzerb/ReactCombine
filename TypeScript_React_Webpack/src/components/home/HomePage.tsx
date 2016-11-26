import * as React from 'react';
import { Link } from 'react-router';
import WaypointMap from '../map/waypointMap';


var waypoints = [
  {waypointId:1, name:"Mom and Dad", position:{lat: 44.4854, lng:-87.9863}}, 
  {waypointId:2, name:"Depere Trumpeter", position:{lat: 44.436, lng:-88.033}}, 
  {waypointId:4, name:"44", position:{lat: 44.3, lng:-88.04}}, 
  {waypointId:5, name:"Brian and Sandy", position:{lat: 40.24738, lng:-76.959907}}, 
  {waypointId:6, name:"66", position:{lat: 44.45, lng:-88.0}}, 
  {waypointId:7, name:"Jon and Julie", position:{lat: 44.518262, lng:-87.70898}}, 
  {waypointId:3, name:"Linda and Ben", position:{lat: 44.49832, lng:-88.0659318}}];

class HomePage extends React.Component<{}, {}> {
    render() {
        return (
            <div className="jumbotron">
                <WaypointMap
                style={{width: '900px', height: '900px'}}
                waypoints={waypoints}
                initialCenter ={{ lat: 44.5, lng: -88 }}
                />

                <h1>Waypoint Editor</h1>
                <p>React, Redux and React Router in ES6 for ultra-responsive web apps.</p>
                <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
            </div>
        );
    }
}

export default HomePage;
