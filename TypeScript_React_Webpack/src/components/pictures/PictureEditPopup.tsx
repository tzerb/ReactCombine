import React, {PropTypes} from 'react';
import  Modal from 'react-modal';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {bindActionCreators} from 'redux';

let toastr = require('toastr');
let moment = require('moment');

import PictureForm from './PictureForm';
import * as pictureActions from '../../actions/pictureActions';

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

export interface PictureEditPopupProps
{
  picture:any;
}

export interface PictureEditPopupState
{
    modalIsOpen:boolean;
    picture: any;
    errors: any;
    saving: boolean;
}

export class PictureEditPopup extends React.Component<PictureEditPopupProps, PictureEditPopupState>  {
  constructor(props : PictureEditPopupProps, context : any) {
    super(props, context);
    this.state = {
          modalIsOpen: false,
          picture: Object.assign({}, this.props.picture),
          errors: {},
          saving: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

    this.savePicture = this.savePicture.bind(this);
    this.updatePictureState = this.updatePictureState.bind(this);        
    
  }

  openModal() {
    // this.setState(
    //     {modalIsOpen: true,
    //     picture: Object.assign({}, this.props.picture),
    //     errors: {},
    //     saving: false
    //     });
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    //this.refs.subtitle.style.color = '#f00';
  }

  closeModal() {
    // this.setState({modalIsOpen: false});
  }

  pictureFormIsValid() {
    // let formIsValid = true;
    // let errors = {};

    // if (this.state.picture.name.length < 2) {
    //   errors.name = 'Name must be at least 2 characters.';
    //   formIsValid = false;
    // }

    // if (!(moment(this.state.picture.dateTime).isValid()))
    // {
    //   // TODO TZ do we need better name than 'DateTime'  (TripDate?)?!?
    //   errors.dateTime = 'DateTime is not valid.';
    //   formIsValid = false;
    // }

    // this.setState({errors: errors});
    // return formIsValid;
  }
      
  updatePictureState(event:any) {
    // const field = event.target.name;
    // let picture = this.state.picture;
    // picture[field] = event.target.value;
    // return this.setState({picture: picture});
  }

  savePicture(event:any) {
    // event.preventDefault();
    // if (!this.pictureFormIsValid()) {
    //   return;
    // }

    // this.setState({saving: true});
    // this.props.pictureActions.savePicture(this.state.picture)
    //   .then(() => { 
    //     this.closeModal();
    //     this.setState({saving: false});
    //     toastr.success('Picture saved');

    //   })
    //   .catch(error => {
    //     toastr.error(error);
    //     this.setState({saving: false});
    //   });
  }  
  render() {
  return(<div/>);
  }
}

// class PictureEditPopupOLD extends React.Component {
//     constructor(props, context)
//     {
//         super(props, context);

//         this.state = {
//           modalIsOpen: false,
//           picture: Object.assign({}, this.props.picture),
//           errors: {},
//           saving: false
//         };

//         this.openModal = this.openModal.bind(this);
//         this.afterOpenModal = this.afterOpenModal.bind(this);
//         this.closeModal = this.closeModal.bind(this);

//         this.savePicture = this.savePicture.bind(this);
//         this.updatePictureState = this.updatePictureState.bind(this);        
//     }

//   openModal() {
//     this.setState(
//         {modalIsOpen: true,
//         picture: Object.assign({}, this.props.picture),
//         errors: {},
//         saving: false
//         });
//   }

//   afterOpenModal() {
//     // references are now sync'd and can be accessed.
//     //this.refs.subtitle.style.color = '#f00';
//   }

//   closeModal() {
//     this.setState({modalIsOpen: false});
//   }

//   pictureFormIsValid() {
//     let formIsValid = true;
//     let errors = {};

//     if (this.state.picture.name.length < 2) {
//       errors.name = 'Name must be at least 2 characters.';
//       formIsValid = false;
//     }

//     if (!(moment(this.state.picture.dateTime).isValid()))
//     {
//       // TODO TZ do we need better name than 'DateTime'  (TripDate?)?!?
//       errors.dateTime = 'DateTime is not valid.';
//       formIsValid = false;
//     }

//     this.setState({errors: errors});
//     return formIsValid;
//   }
      
//   updatePictureState(event) {
//     const field = event.target.name;
//     let picture = this.state.picture;
//     picture[field] = event.target.value;
//     return this.setState({picture: picture});
//   }

//   savePicture(event) {
//     event.preventDefault();
//     if (!this.pictureFormIsValid()) {
//       return;
//     }

//     this.setState({saving: true});
//     this.props.pictureActions.savePicture(this.state.picture)
//       .then(() => { 
//         this.closeModal();
//         this.setState({saving: false});
//         toastr.success('Picture saved');

//       })
//       .catch(error => {
//         toastr.error(error);
//         this.setState({saving: false});
//       });
//   }

//     render() {
//         return (
//             <span>
//                 <a onClick={this.openModal}>Edit</a>
//                 <Modal
//                     isOpen={this.state.modalIsOpen}
//                     onAfterOpen={this.afterOpenModal}
//                     onRequestClose={this.closeModal}
//                     style={customStyles} >

//                     <PictureForm 
//                         picture={this.state.picture}
//                         onChange={this.updatePictureState}
//                         onSave={this.savePicture}
//                         errors={this.state.errors}
//                         saving={this.state.saving}
//                     />
//                 </Modal>                
//             </span>
//         );
//     }
// }

// PictureEditPopup.propTypes = {
//   picture: PropTypes.object.isRequired,
//   pictureActions: PropTypes.object.isRequired
// };

function mapStateToProps(state:any, ownProps:any) {
  return {
  };
}

function mapDispatchToProps(dispatch:any) {
  return {
    pictureActions: bindActionCreators(pictureActions as any, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PictureEditPopup);