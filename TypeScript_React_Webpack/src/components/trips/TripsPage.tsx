import * as React from 'react';
import {PropTypes} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Alerter} from '../common/Alerter';

import * as tripActions from '../../actions/tripActions';
import TripList from './TripList';
import TripEditor from './TripEditor';

import TripEditPopup from './TripEditPopup';

export interface TripsPageProps
{
    trips : any[];
    actions: any;
}

export interface TripsPageState
{
    trips? : any[];
}

class TripsPage extends React.Component<TripsPageProps, TripsPageState> {
    constructor(props:TripsPageProps, context:any)    {
        super(props, context);

        this.deleteTrip = this.deleteTrip.bind(this);
        this.saveTrip = this.saveTrip.bind(this);
    }
 
    deleteTrip(trip : any)
    {
        this.props.actions.deleteTrip(trip)
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
        this.props.actions.saveTrip(trip)
            .then(() => { 
                Alerter.success('Trip saved');
            })
            .catch((error :any) => {
                // Alerter.error(error);
                Alerter.error('Failed to save trip.');
                
                //this.setState({saving: false});
            });
    }

    getDefaultTrip()
    {
        return {
            title: 'title',
            description: 'description',
            dateTime: new Date().toDateString()
        };
    }
    render() {
        return (
            <div className="container">
                <h1>Trips</h1>
                <TripList trips={this.props.trips} onDeleteTrip={this.deleteTrip} onSaveTrip={this.saveTrip}/>
                <TripEditPopup trip={this.getDefaultTrip()} saveTrip={this.saveTrip}/>
            </div>
        );
    }
}

// TripPage.propTypes = {
//     trips: PropTypes.array.isRequired,
//     actions: PropTypes.object
// };

function mapStateToProps(state : any, ownProps:any)
{
    return {
        trips: state.trips
    };
}
 
function mapDispatchToProps(dispatch:any) {
    return {
        // createTrip: trip => dispatch(tripActions.createTrip(trip))
        actions: bindActionCreators(tripActions as any, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps) (TripsPage);