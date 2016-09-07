import * as React from 'react';
import {PropTypes} from 'react';
import * as Modal from 'react-modal';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {bindActionCreators} from 'redux';
import {Alerter} from '../common/Alerter';

let moment = require('moment'); 

import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import {deepOrange500} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Popover from 'material-ui/Popover';

import TripForm from './TripForm';
import * as tripActions from '../../actions/tripActions';
const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 0,
  },
};
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  },
  overlay : {
    backgroundColor : 'rgba(127, 127, 127, 0.7'
  }
};
const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});
export interface TripEditPopupProps{
  trip:any;
  tripActions?:any;
}

export interface TripEditPopupState{
  trip?:any;
  modalIsOpen?: boolean;
  errors?: any,
  saving?: boolean;
  open? : boolean;
  anchorEl? : any;
  openPopOver? : boolean;

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
        this.handleTouchTapDelete = this.handleTouchTapDelete.bind(this);
              
    }

  openModal() {
    this.setState(
        {modalIsOpen: true,
        trip: Object.assign({}, this.props.trip),
        errors: {},
        saving: false
        });
  }

  // afterOpenModal() {
  //   // references are now sync'd and can be accessed.
  //   this.refs.subtitle.style.color = '#f00';
  // }

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
    const field = 'DateTime';
    let trip = this.state.trip;
    trip[field] = dateTime;
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
    this.setState({saving: true});
    this.props.tripActions.saveTrip(this.state.trip)
      .then(() => { 
        this.closeModal();
        this.setState({saving: false});
        Alerter.success('Trip saved');
      })
      .catch((error : any) => {
        Alerter.error(error);
        this.setState({saving: false});
      });
  }

  handleRequestClose() {
    this.setState({
      open: false,
    });
  }

  handleRequestSave(event : Event) {
    this.setState({
      open: false,
    });
    this.saveTrip(event);
    //alert('save is not done')
  }

  handleTouchTapEdit() {
    this.setState({
      open: true,
    });
  }

  handleTouchTapDelete() {
  }

  render() {
    const standardActions = (
      <div>
        <FlatButton
          label="Cancel"
          primary={false}
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
        <FlatButton label="edit" primary={true} onTouchTap={this.handleTouchTapEdit} />
        <FlatButton label="delete" primary={true} onTouchTap={this.handleTouchTapDelete} />
        <div style={styles.container}>
     
          <Dialog
            open={this.state.open}
            title="Edit Trip"
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

  /*
          <RaisedButton
            label="Super Secret Password"
            secondary={true}
            onTouchTap={this.handleTouchTap}
          />  
  */
    // render() {
    //     return (
    //         <span>TripEditPopup
    //             <a onClick={this.openModal}>Edit</a>
    //              <Modal
    //                 isOpen={this.state.modalIsOpen}
    //                 onRequestClose={this.closeModal}
    //                 style={customStyles} >

    //                 <TripForm 
    //                     trip={this.state.trip}
    //                     onChange={this.updateTripState}
    //                     onSave={this.saveTrip}
    //                     errors={this.state.errors}
    //                     saving={this.state.saving}
    //                 />
    //             </Modal>               
            
    //         </span>
    //     );
    // }
}

// TripEditPopup.propTypes = {
//   trip: PropTypes.object.isRequired,
//   tripActions: PropTypes.object.isRequired
// };

function mapStateToProps(state : any, ownProps : any) {
  return {
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    tripActions: bindActionCreators(tripActions as any, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TripEditPopup);