import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Alerter} from '../common/Alerter';

//import Map5 from  '../common/Map5';
// import LightboxView from  '../common/LightboxView';

import * as tripActions from '../../actions/tripActions';
import * as waypointActions from '../../actions/waypointActions';
import * as pictureActions from '../../actions/pictureActions';

import TripHeader from './TripHeader';

import WaypointList from '../waypoints/WaypointList';
import PictureList from '../pictures/PictureList';
import ApiConfig from '../../api/ApiConfig';
import ApiHelpers from '../../api/ApiHelpers';
import TripEditPopup from './TripEditPopup';

export interface TripViewProps
{
  trip : any;
  params: any;
  tripActions:any;
  pictureActions:any;
  waypointActions:any;
} 

export interface TripViewState
{

}
export class TripView extends React.Component<TripViewProps, TripViewState>  {
  constructor(props : TripViewProps, context : any) {
    super(props, context);
    // alert('TripView ctor');
    this.state = {
      trip: Object.assign({}, this.props.trip),
      errors: {},
      saving: false
    };
    this.onEditWaypoint = this.onEditWaypoint.bind(this);
    this.onDeleteWaypoint = this.onDeleteWaypoint.bind(this);

    this.onEditPicture = this.onEditPicture.bind(this);
    this.onDeletePicture = this.onDeletePicture.bind(this);

    this.saveTrip = this.saveTrip.bind(this);
    this.deleteTrip = this.deleteTrip.bind(this);
  }

  componentWillReceiveProps(nextProps : TripViewProps) {
    if (this.props.trip.tripId != nextProps.trip.tripId) {
      // Necessary to populate form when existing trip is loaded directly.
      this.setState({trip: Object.assign({}, nextProps.trip)});
    }
  }

  onEditWaypoint(waypoint : any) : void
  {
    alert('edit waypoint-' + waypoint.waypointId);
  }


  onEditPicture(picture : any) : any
  {
    alert('edit picture-' + picture.pictureId);
    return 0;
  }

  onDeletePicture(picture : any)
  {
    this.props.pictureActions.deletePicture(picture)
      .then(() => { 
              Alerter.success('Picture deleted');
            })
            .catch((error:any) => {
                Alerter.error(error);
                //this.setState({saving: false});
            });    
  }

 
    deleteTrip(trip : any)
    {
        this.props.tripActions.deleteTrip(trip)
            .then(() => { 
                Alerter.success('Trip deleted');
            })
            .catch((error :any) => {
                // Alerter.error(error);
                Alerter.error('Failed to delete trip.');
                
                //this.setState({saving: false});
            });
    }

    saveTrip(trip : any)
    {
        this.props.tripActions.saveTrip(trip)
            .then(() => { 
                Alerter.success('Trip saved');
            })
            .catch((error :any) => {
                Alerter.error('Failed to save trip.');
            });
    }

    onDeleteWaypoint(waypoint : any)
    {
      this.props.waypointActions.deleteWaypoint(waypoint)
        .then(() => { 
                Alerter.success('Waypoint deleted');
              })
              .catch((error:any) => {
                  Alerter.error(error);
                  //this.setState({saving: false});
              });
    }

  render() {
    try {
      return (
        <div className="container">
           <div className="row">
            <TripHeader trip={this.props.trip}/>
            <div><TripEditPopup trip={this.props.trip} saveTrip={this.saveTrip}/></div>
            <div>&nbsp;</div>
            <div className="col-md-5 well">
              <WaypointList waypoints={this.props.trip.waypoints} onEdit={this.onEditWaypoint} onDelete={this.onDeleteWaypoint}/>
              <Link to={'/waypoint/?tripId=' + this.props.trip.tripId}>Add Waypoint</Link>
            </div>
            <div className="col-md-5 well">
              <PictureList pictures={this.props.trip.pictures} onEdit={this.onEditPicture} onDelete={this.onDeletePicture}/>
            </div>          
          </div>
        </div>   
      );
    }
    catch(ex)
    {
      return (<div>error in TripView</div>);
    }
  }
  
}

/*

          {!ApiConfig.SimulateMap && 
          <div className="row">
            <div className="col-md-12">
              <Map5 waypoints={this.props.trip.waypoints} onEdit={this.onEditWaypoint} onDelete={this.onDeleteWaypoint}/>
            </div>
          </div>
          }
          {ApiConfig.SimulateMap && 
          <div className="row">
            <div className="col-md-12 well">
              <div>map simulation</div>
              <WaypointList waypoints={this.props.trip.waypoints} onEdit={this.onEditWaypoint} onDelete={this.onDeleteWaypoint}/>
            </div>
          </div>
          }  
*/

function getTripById(trips : any, tripId : any) {
  const trip = trips.filter((trip:any) => trip.tripId == tripId);
  if (trip) return trip[0]; //since filter returns an array, have to grab the first.
  return null;
}

function mapStateToProps(state : any, ownProps : TripViewProps) {
  //alert('mapStateToProps');
  const tripId = ownProps.params.id; // from the path `/trip/:id`

  // TODO TZ - Clear these up, have a new Trip() or something like that.
  let trip = {id: '', title: '' };

  if (tripId && state.trips.length > 0) {
    trip = getTripById(state.trips, tripId);
  }

  return {
    trip: trip
  };
}

function mapDispatchToProps(dispatch : any) {
  //alert('mapDispatchToProps');
  return {
    tripActions: bindActionCreators(tripActions as any, dispatch),
    waypointActions: bindActionCreators(waypointActions as any, dispatch),
    pictureActions: bindActionCreators(pictureActions as any, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TripView);