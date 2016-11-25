import * as React from 'react';
import { Link } from 'react-router';
import MapX from '../map/map';
class HomePage extends React.Component<{}, {}> {
    render() {
        return (
            <div className="jumbotron">
            <MapX
            style={{width: '900px', height: '900px'}}
            />

                <h1>Waypoint Editor</h1>
                <p>React, Redux and React Router in ES6 for ultra-responsive web apps.</p>
                <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
            </div>
        );
    }
}

export default HomePage;
