import * as React from 'react';
import { Link } from 'react-router';
import WaypointMap from '../map/waypointMap';

class HomePage extends React.Component<{}, {}> {
    render() {
        return (
            <div className="jumbotron">
                <h1>Random Wayfarer</h1>
                <p>
                Manage your fishing data here.  Easily upload your depth finder data and pictures to
                stitch together a rich history of your favorite hobby.<br/>
                <br/>
                Make the most of your fishing information.  
                Did you ever think that you're not getting enough from your expensive depth finder?
                Sure, it helps you find fish.  That's it's job.
                Do you really know what that mark is that you created two years ago.   
                </p>
                <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
            </div>
        );
    }
}

export default HomePage;
