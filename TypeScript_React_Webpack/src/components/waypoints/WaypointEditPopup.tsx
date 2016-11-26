import * as React from 'react';
import {PropTypes} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {bindActionCreators} from 'redux';

let moment = require('moment'); 

// Material UI
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

// Local includes
import {Alerter} from '../common/Alerter';
import WaypointForm from './WaypointForm';

export interface WaypointEditPopupProps{
  Waypoint:any;
  saveWaypoint(Waypoint:any) : any;
}

export interface WaypointEditPopupState{
  Waypoint?:any;
  modalIsOpen?: boolean;
  errors?: any,
  saving?: boolean;
  open? : boolean;
}

class WaypointEditPopup extends React.Component<WaypointEditPopupProps, WaypointEditPopupState> {
    constructor(props:WaypointEditPopupProps, context:any)
    {
        super(props, context);

        this.state = {
          modalIsOpen: false,
          Waypoint: Object.assign({}, this.props.Waypoint),
          errors: {},
          saving: false,
          open:false
        };

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);

        this.saveWaypoint = this.saveWaypoint.bind(this);
        this.updateWaypointState = this.updateWaypointState.bind(this);    

        this.updateWaypointDateTimeState = this.updateWaypointDateTimeState.bind(this);
        this.handleRequestClose = this.handleRequestClose.bind(this);
        this.handleRequestSave = this.handleRequestSave.bind(this);
        this.handleTouchTapEdit = this.handleTouchTapEdit.bind(this);
    }

  openModal() {
    this.setState(
        {modalIsOpen: true,
        Waypoint: Object.assign({}, this.props.Waypoint),
        errors: {},
        saving: false
        });
  }

  closeModal() {
    this.setState({open: false} as WaypointEditPopupState);
  }

  WaypointFormIsValid() {
    alert('need better waypoint validation');
    let formIsValid = true;
    let errors = { title : "", dateTime : "" };

    if (this.state.Waypoint.description.length < 5) {
      errors.title = 'Title must be at least 5 characters.';
      formIsValid = false;
    }

    // if (!(moment(this.state.Waypoint.dateTime).isValid()))
    // {
    //   // TODO TZ do we need better name than 'DateTime'  (WaypointDate?)?!?
    //   errors.dateTime = 'DateTime is not valid.'; // TODO TZ
    //   formIsValid = false;
    // }
    this.setState({errors: errors});
    return formIsValid;
  }
      
  updateWaypointDateTimeState(event : any, dateTime:Date)
  {
    const field = 'dateTime';
    let Waypoint = this.state.Waypoint;
    //Waypoint.dateTime = dateTime.toDateString();
    Waypoint[field] = dateTime.toDateString();
    return this.setState({Waypoint: Waypoint});
  }      

  updateWaypointState(event : any) {
    const field = event.target.name;
    let Waypoint = this.state.Waypoint;
    Waypoint[field] = event.target.value;
    return this.setState({Waypoint: Waypoint});
  }

  saveWaypoint(event : any) {
    event.preventDefault();
    if (!this.WaypointFormIsValid()) {
      return;
    }

    this.props.saveWaypoint(this.state.Waypoint);
    this.closeModal();

  }

  handleRequestClose() {
    this.setState({
      open: false,
    });
  }

  handleRequestSave(event : any) {
    this.setState({
      open: false,
    });
    this.saveWaypoint(event);
  }

  handleTouchTapEdit() {
    this.setState({
      open: true,
    });
  }

    getWaypointTitle()
    {
      if (this.props.Waypoint.WaypointId)
      {
        return 'Edit Waypoint'
      }
      return 'Add Waypoint';
    }

  render() {
    const standardActions = (
      <div>
        <FlatButton
          label="Cancel"
          primary={true}
          onTouchTap={this.handleRequestClose}
        />   
        <FlatButton
          label="Ok"
          primary={true}
          onTouchTap={this.handleRequestSave}
        />
      </div>   
    );
    
    return (
      <span>
        {this.props.Waypoint.waypointId && <FlatButton label="edit" primary={true} onTouchTap={this.handleTouchTapEdit} />}
        {!this.props.Waypoint.waypointId && <FlatButton label="add" primary={true} onTouchTap={this.handleTouchTapEdit} />}
        <div>
          <Dialog
            open={this.state.open}
            title={this.getWaypointTitle()}
            actions={standardActions}
            onRequestClose={this.handleRequestClose}
          >

            <WaypointForm 
                waypoint={this.state.Waypoint}
                onChange={this.updateWaypointState}
                onSave={this.saveWaypoint}
                errors={this.state.errors}
                saving={this.state.saving}
            />

          </Dialog>
   
        </div>
      </span>
    );
  }
}
export default WaypointEditPopup