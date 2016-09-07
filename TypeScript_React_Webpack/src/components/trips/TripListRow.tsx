import * as React from 'react';
import {PropTypes} from 'react';
import {Link} from 'react-router';
import TripEditPopup from './TripEditPopup';

export interface TripListRowProps {
  trip: any;
  onDeleteTrip(trip:any):any;
}

export interface TripListRowState {

}
class TripListRow extends React.Component<TripListRowProps, TripListRowState> {
    constructor(props:TripListRowProps, context : any)    {
        super(props, context);

        this.onLocalEdit = this.onLocalEdit.bind(this);
        this.onLocalDelete = this.onLocalDelete.bind(this);

    }

    onLocalEdit()
    {
      //this.props.onEdit(this.props.waypoint);
    }

    onLocalDelete()
    {
      this.props.onDeleteTrip(this.props.trip);
    }


    render() {
        return (
          <tr>
            <td><Link to={'/tripview/' + this.props.trip.tripId}>{this.props.trip.title}</Link></td>
            <td>{this.props.trip.description}</td>
            <td><TripEditPopup trip={this.props.trip}/></td>
          </tr>
        );
    }
}

// TripListRow.propTypes = {
//   trip: PropTypes.object.isRequired,
//   onDeleteTrip: PropTypes.func.isRequired
// };

export default TripListRow;