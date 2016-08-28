import * as React from 'react';
import {PropTypes} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Alerter} from '../common/Alerter';

import * as tripActions from '../../actions/tripActions';
import TripList from './TripList';
import TripEditor from './TripEditor';

export interface TripPageProps
{
    trips : any[];
    actions: any;
}

export interface TripPageState
{
    trips? : any[];
}

class TripPage extends React.Component<TripPageProps, TripPageState> {
    constructor(props:TripPageProps, context:any)    {
        super(props, context);
        this.deleteTrip = this.deleteTrip.bind(this);
    }
 
    deleteTrip(trip : any)
    {
        this.props.actions.deleteTrip(trip)
            .then(() => { 
                Alerter.success('trip deleted');
            })
            .catch((error :any) => {
                Alerter.error(error);
                //this.setState({saving: false});
            });
    }

    render() {
        return (
            <div>
                <h1>Trips</h1>
                <TripList trips={this.props.trips} onDeleteTrip={this.deleteTrip}/>
                <Link to={'/trip'}>Add Trip</Link>
            </div>
        );
    }
}
/*
                <TripList trips={this.props.trips} onDeleteTrip={this.deleteTrip}/>
                <Link to={'/trip'}>Add Trip</Link>
*/
// TripPage.propTypes = {
//     trips: PropTypes.array.isRequired,
//     actions: PropTypes.object
// };

function mapStateToProps(state : TripPageState, ownProps:TripPageProps)
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

export default connect(mapStateToProps, mapDispatchToProps) (TripPage);