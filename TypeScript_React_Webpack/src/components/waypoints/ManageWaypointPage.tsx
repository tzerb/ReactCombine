import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {Alerter} from './common/Alerter';

let moment = require('moment');

import * as waypointActions from '../../actions/waypointActions';
import WaypointForm from './WaypointForm';

export interface ManageWaypointPageProps
{
  waypoint:any;
}

export interface ManageWaypointPageState
{
      waypoint:any;
      errors:any[];
      saving: boolean;
  
}

export class ManageWaypointPage extends React.Component<ManageWaypointPageProps, ManageWaypointPageState>  {
  constructor(props : ManageWaypointPageProps, context : any) {
    super(props, context);
    this.state = {
      waypoint: Object.assign({}, this.props.waypoint),
      errors: {},
      saving: false
    } as ManageWaypointPageState;
    this.savewaypoint = this.savewaypoint.bind(this);
    this.updatewaypointState = this.updatewaypointState.bind(this);
    
  }

  // componentWillReceiveProps(nextProps) {
  //   if (this.props.waypoint.waypointId != nextProps.waypoint.waypointId) {
  //     // Necessary to populate form when existing waypoint is loaded directly.
  //     this.setState({waypoint: Object.assign({}, nextProps.waypoint)});
  //   }
  // }

  updatewaypointState(event:any) {
  //   const field = event.target.name;
  //   let waypoint = this.state.waypoint;
  //   waypoint[field] = event.target.value;
  //   return this.setState({waypoint: waypoint});
  // }

  // waypointFormIsValid() {
  //   let formIsValid = true;
  //   let errors = {};

  //   if (this.state.waypoint.name.length < 2) {
  //     errors.name = 'Name must be at least 2 characters.';
  //     formIsValid = false;
  //   }

  //   if (!(moment(this.state.waypoint.dateTime).isValid()))
  //   {
  //     // TODO TZ do we need better name than 'DateTime'  (TripDate?)?!?
  //     errors.dateTime = 'DateTime is not valid.';
  //     formIsValid = false;
  //   }

  //   this.setState({errors: errors});
  //   return formIsValid;
  }

  savewaypoint(event:any) {
    // event.preventDefault();
    // if (!this.waypointFormIsValid()) {
    //   return;
    // }

    // this.setState({saving: true});
    // this.props.actions.saveWaypoint(this.state.waypoint)
    //   .then(() => { 
    //     this.redirect();
    //   })
    //   .catch(error => {
    //     Alerter.error(error);
    //     this.setState({saving: false});
    //   });
  }

  redirect() {
    // this.setState({saving: false});
    // Alerter.success('waypoint saved.');

    // // TripId if we're coming from ManageWaypointPage'
    // let tripId = this.state.waypoint.tripId;

    // // TripId if we're coming from the map page' 
    // if (this.props.location.query.tripId)
    //   tripId = this.props.location.query.tripId;
    // this.context.router.push('/tripview/' + tripId);
  }

  render() {
    return(
      <div>ManageWaypointPage
      <WaypointForm
        waypoint={this.state.waypoint}
        onChange={this.updatewaypointState}
        onSave={this.savewaypoint}
        errors={this.state.errors}
        saving={this.state.saving}
      />
      </div>
      );
  }
}

// export class ManageWaypointPageOld extends React.Component {
//   constructor(props, context) {
//     super(props, context);

//     this.state = {
//       waypoint: Object.assign({}, this.props.waypoint),
//       errors: {},
//       saving: false
//     };
 
//     this.savewaypoint = this.savewaypoint.bind(this);
//     this.updatewaypointState = this.updatewaypointState.bind(this);
//   }

//   componentWillReceiveProps(nextProps) {
//     if (this.props.waypoint.waypointId != nextProps.waypoint.waypointId) {
//       // Necessary to populate form when existing waypoint is loaded directly.
//       this.setState({waypoint: Object.assign({}, nextProps.waypoint)});
//     }
//   }

//   updatewaypointState(event) {
//     const field = event.target.name;
//     let waypoint = this.state.waypoint;
//     waypoint[field] = event.target.value;
//     return this.setState({waypoint: waypoint});
//   }

//   waypointFormIsValid() {
//     let formIsValid = true;
//     let errors = {};

//     if (this.state.waypoint.name.length < 2) {
//       errors.name = 'Name must be at least 2 characters.';
//       formIsValid = false;
//     }

//     if (!(moment(this.state.waypoint.dateTime).isValid()))
//     {
//       // TODO TZ do we need better name than 'DateTime'  (TripDate?)?!?
//       errors.dateTime = 'DateTime is not valid.';
//       formIsValid = false;
//     }

//     this.setState({errors: errors});
//     return formIsValid;
//   }

//   savewaypoint(event) {
//     event.preventDefault();
//     if (!this.waypointFormIsValid()) {
//       return;
//     }

//     this.setState({saving: true});
//     this.props.actions.saveWaypoint(this.state.waypoint)
//       .then(() => { 
//         this.redirect();
//       })
//       .catch(error => {
//         Alerter.error(error);
//         this.setState({saving: false});
//       });
//   }

//   redirect() {
//     this.setState({saving: false});
//     Alerter.success('waypoint saved.');

//     // TripId if we're coming from ManageWaypointPage'
//     let tripId = this.state.waypoint.tripId;

//     // TripId if we're coming from the map page' 
//     if (this.props.location.query.tripId)
//       tripId = this.props.location.query.tripId;
//     this.context.router.push('/tripview/' + tripId);
//   }

//   render() {
//     );
//   }
// }

// ManageWaypointPage.propTypes = {
//   waypoint: PropTypes.object.isRequired,
//   actions: PropTypes.object.isRequired,
//   location: PropTypes.object
// };

// //Pull in the React Router context so router is available on this.context.router.
// ManageWaypointPage.contextTypes = {
//   router: PropTypes.object
// };

function getwaypointById(waypoints:any[], waypointId:number) {
  const waypoint = waypoints.filter(waypoint => waypoint.waypointId == waypointId);
  if (waypoint) return waypoint[0]; //since filter returns an array, have to grab the first.
  return null;
}

function mapStateToProps(state:any, ownProps:any) {
  const waypointId = ownProps.params.id; // from the path `/waypoint/:id`

  let tripId = ownProps.location.query.tripId;

// TODO TZ - refactor
  let waypoint = {
      // tripId: tripId, 
      // latitude: 43.905967197,
      // longitude: -88.428131393,
      // waypointId: null,
      // waypointFileId: 1,
      // dateTime: "2016-07-07T18:49:39",
      // description: "DEFAULT WAYPOINT",
      // name: "DEFAULT WAYPOINT",
      // depth: 0,
      // type: 0,
      // visible: false
    };
  if (waypointId && state.waypoints.length > 0) {
    waypoint = getwaypointById(state.waypoints, waypointId);
  }

  return {
    waypoint: waypoint
  };
}

function mapDispatchToProps(dispatch:any) {
  return {
    actions: bindActionCreators(waypointActions as any, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageWaypointPage);