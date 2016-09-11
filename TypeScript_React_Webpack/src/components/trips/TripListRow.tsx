import * as React from 'react';
import {PropTypes} from 'react';
import {Link} from 'react-router';

// Local imports
import TripEditPopup from './TripEditPopup';
import TripDeletePopup from './TripDeletePopup';

export interface TripListRowProps {
  trip: any;
  onDeleteTrip(trip:any):any;
  onSaveTrip(trip:any):any;
}

export interface TripListRowState {
}

class TripListRow extends React.Component<TripListRowProps, TripListRowState> {
    constructor(props:TripListRowProps, context : any)    {
        super(props, context);

    }
   
    render() {
        return (
          <tr>
            <td><Link to={'/tripview/' + this.props.trip.tripId}>{this.props.trip.title}</Link></td>
            <td>{this.props.trip.description}</td>
            <td>{this.props.trip.dateTime}</td>
            <td><TripEditPopup trip={this.props.trip} saveTrip={this.props.onSaveTrip}/></td>
            <td><TripDeletePopup trip={this.props.trip} deleteTrip={this.props.onDeleteTrip} /></td>
          </tr>
        );
    }
}

export default TripListRow;