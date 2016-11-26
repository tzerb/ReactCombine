import * as React from 'react';
import {PropTypes} from 'react';
import TripListRow from './TripListRow';

export interface TripListProps
{
  trips : any[];
  onDeleteTrip(trip: any) : any;
  onSaveTrip(trip:any) : any;
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
            <th>Date</th>
            <th></th>
            <th></th>
          </tr>
          </thead>
          <tbody>
          {this.props.trips.map((trip: any) =>
            <TripListRow key={trip.tripId} trip={trip} onDeleteTrip={this.props.onDeleteTrip} onSaveTrip={this.props.onSaveTrip}/>
          )}
          </tbody>
        </table>       
      );
    }
}

