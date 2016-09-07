import * as React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as tripActions from '../../actions/tripActions';
import TripForm from './TripForm';
import {Alerter} from './common/Alerter';

export interface TripEditorProps {
  trip:any;
  actions?: any;
} 

export interface TripEditorState {
  trip? : any;
  errors? : any;
  saving? : boolean;
} 

export interface TripEditorContext {
  router: any;
}

class TripEditor extends React.Component<TripEditorProps, TripEditorState> {
  constructor(props:TripEditorProps, context:TripEditorContext) {
    super(props, context);

    this.state = {
      trip: Object.assign({}, this.props.trip),
      errors: {},
      saving: false
    } as TripEditorState;
 
    this.saveTrip = this.saveTrip.bind(this);
    this.updateTripState = this.updateTripState.bind(this);
  }

  componentWillReceiveProps(nextProps:TripEditorProps) {
    if (this.props.trip.tripId != nextProps.trip.tripId) {
      // Necessary to populate form when existing trip is loaded directly.
      this.setState({trip: Object.assign({}, nextProps.trip)});
    }
  }

  updateTripState(event : any) {
    const field = event.target.name;
    let trip = this.state.trip;
    trip[field] = event.target.value;
    return this.setState({trip: trip});
  }

  tripFormIsValid() {
    let formIsValid = true;
    let errors = {title:""};

    if (this.state.trip.title.length < 5) {
      errors.title = 'Title must be at least 5 characters.';
      formIsValid = false;
    }

    this.setState({errors: errors});
    return formIsValid;
  }

  saveTrip(event:any) {
    event.preventDefault();
    if (!this.tripFormIsValid()) {
      return;
    }

    this.setState({saving: true});
    this.props.actions.saveTrip(this.state.trip)
      .then(() => { 
        this.redirect();
      })
      .catch((error : any) => {
        Alerter.error(error);
        this.setState({saving: false});
      });
  }

  onDateTimeChange(event : any, dateTime:Date) {
    
  }


  redirect() {
    this.setState({saving: false});
    Alerter.success('Trip saved.');
    ((this.context) as TripEditorContext).router.push('/trips');
  }
    
  render() {
    return (
      <TripForm
        trip={this.props.trip}
        onChange={this.updateTripState}
        onDateTimeChange={this.onDateTimeChange}
        onSave={this.saveTrip}
        errors={this.state.errors}
        saving={this.state.saving}
      />
    );
  } 
}

// TripEditor.propTypes = {
//   trip: PropTypes.object.isRequired,
//   actions: PropTypes.object.isRequired
// };

//Pull in the React Router context so router is available on this.context.router.
// TripEditor.contextTypes = {
//   router: PropTypes.object
// };

export default TripEditor;