import * as React from 'react';
import {PropTypes} from 'react';
import TripListRow from './TripListRow';

export interface TripListProps
{
  trips : any[];
  onDeleteTrip(trip: any) : void;

} 

export interface TripListState
{

}

export default class TripList extends React.Component<TripListProps, TripListState> 
{
    constructor(props:TripListProps, context:any)    {
        super(props, context);
    }
    render() {
      return(
        <table className="table">
          <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th></th>
          </tr>
          </thead>
          <tbody>
          {this.props.trips.map((trip: any) =>
            <TripListRow key={trip.tripId} trip={trip} onDeleteTrip={this.props.onDeleteTrip}/>
          )}
          </tbody>
        </table>       
      );
    }
}

// const TripListx = ({trips, onDeleteTrip}) => {
//   return (
//     <table className="table">
//       <thead>
//       <tr>
//         <th>Title</th>
//         <th>Description</th>
//         <th></th>
//       </tr>
//       </thead>
//       <tbody>
//       {trips.map((trip: any) =>
//         <TripListRow key={trip.tripId} trip={trip} onDeleteTrip={onDeleteTrip}/>
//       )}
//       </tbody>
//     </table>
//   );
// };
//
// TripList.propTypes = {
//   trips: PropTypes.array.isRequired,
//   onDeleteTrip : PropTypes.func.isRequired
// };

//export default TripList;
