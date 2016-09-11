import * as React from 'react';

// Material UI
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';

export interface TripDeletePopupProps{
  trip:any;
  tripActions?:any;
  deleteTrip(trip : any) : any; 
}

export interface TripDeletePopupState{
  trip?:any;
  modalIsOpen?: boolean;
  errors?: any,
  saving?: boolean;
  open? : boolean;
}

class TripDeletePopup extends React.Component<TripDeletePopupProps, TripDeletePopupState> {
    constructor(props:TripDeletePopupProps, context:any)
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

        this.handleRequestClose = this.handleRequestClose.bind(this);
        this.handleRequestDelete = this.handleRequestDelete.bind(this);

        this.handleTouchTapDelete = this.handleTouchTapDelete.bind(this);
        this.deleteTrip = this.deleteTrip.bind(this);
    }
        
    openModal() {
        this.setState(
            {modalIsOpen: true,
            trip: Object.assign({}, this.props.trip),
            errors: {},
            saving: false
            });
    }

    handleRequestClose() {
        event.preventDefault();
        this.setState({
            open: false,
        });
    }

    handleRequestDelete(event : any) {
        event.preventDefault();
        this.setState({
            open: false,
        });
        this.props.deleteTrip(this.props.trip);
    }

    handleTouchTapDelete() {
        this.setState({
            open: true,
        });
    }

    deleteTrip(event : any) {
        event.preventDefault();
        alert('deleteTrip not done yet');
    }

    render()
    {
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
            onTouchTap={this.handleRequestDelete}
            />
        </div>   
        );        
        return (     
        <span>
            <FlatButton label="delete" primary={true} onTouchTap={this.handleTouchTapDelete} />
          <Dialog
            open={this.state.open}
            title="Delete Trip"
            actions={standardActions}
            onRequestClose={this.handleRequestClose}
          >
            Are you sure you want to delete this trip?  This cannot be undone.
          </Dialog>            
        </span>);
    }    
}

export default TripDeletePopup; 
