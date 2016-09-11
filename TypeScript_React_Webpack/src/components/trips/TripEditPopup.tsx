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
import TripForm from './TripForm';

export interface TripEditPopupProps{
  trip:any;
  saveTrip(trip:any) : any;
}

export interface TripEditPopupState{
  trip?:any;
  modalIsOpen?: boolean;
  errors?: any,
  saving?: boolean;
  open? : boolean;
}

class TripEditPopup extends React.Component<TripEditPopupProps, TripEditPopupState> {
    constructor(props:TripEditPopupProps, context:any)
    {
        super(props, context);

        this.state = {
          modalIsOpen: false,
          trip: Object.assign({}, this.props.trip),
          errors: {},
          saving: false,
          open:false
        };

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);

        this.saveTrip = this.saveTrip.bind(this);
        this.updateTripState = this.updateTripState.bind(this);    

        this.updateTripDateTimeState = this.updateTripDateTimeState.bind(this);
        this.handleRequestClose = this.handleRequestClose.bind(this);
        this.handleRequestSave = this.handleRequestSave.bind(this);
        this.handleTouchTapEdit = this.handleTouchTapEdit.bind(this);
    }

  openModal() {
    this.setState(
        {modalIsOpen: true,
        trip: Object.assign({}, this.props.trip),
        errors: {},
        saving: false
        });
  }

  closeModal() {
    this.setState({open: false} as TripEditPopupState);
  }

  tripFormIsValid() {
    let formIsValid = true;
    let errors = { title : "", dateTime : "" };

    if (this.state.trip.title.length < 5) {
      errors.title = 'Title must be at least 5 characters.';
      formIsValid = false;
    }

    if (!(moment(this.state.trip.dateTime).isValid()))
    {
      // TODO TZ do we need better name than 'DateTime'  (TripDate?)?!?
      errors.dateTime = 'DateTime is not valid.'; // TODO TZ
      formIsValid = false;
    }
    this.setState({errors: errors});
    return formIsValid;
  }
      
  updateTripDateTimeState(event : any, dateTime:Date)
  {
    const field = 'dateTime';
    let trip = this.state.trip;
    //trip.dateTime = dateTime.toDateString();
    trip[field] = dateTime.toDateString();
    return this.setState({trip: trip});
  }      

  updateTripState(event : any) {
    const field = event.target.name;
    let trip = this.state.trip;
    trip[field] = event.target.value;
    return this.setState({trip: trip});
  }

  saveTrip(event : any) {
    event.preventDefault();
    if (!this.tripFormIsValid()) {
      return;
    }

    this.props.saveTrip(this.state.trip);
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
    this.saveTrip(event);
  }

  handleTouchTapEdit() {
    this.setState({
      open: true,
    });
  }

    getTripTitle()
    {
      if (this.props.trip.tripId)
      {
        return 'Edit Trip'
      }
      return 'Add Trip';
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
        {this.props.trip.tripId && <FlatButton label="edit" primary={true} onTouchTap={this.handleTouchTapEdit} />}
        {!this.props.trip.tripId && <FlatButton label="add" primary={true} onTouchTap={this.handleTouchTapEdit} />}
        <div>
          <Dialog
            open={this.state.open}
            title={this.getTripTitle()}
            actions={standardActions}
            onRequestClose={this.handleRequestClose}
          >

            <TripForm 
                trip={this.state.trip}
                onChange={this.updateTripState}
                onDateTimeChange={this.updateTripDateTimeState}
                onSave={this.saveTrip}
                errors={this.state.errors}
                saving={this.state.saving}
            />

          </Dialog>
   
        </div>
      </span>
    );
  }
}
export default TripEditPopup