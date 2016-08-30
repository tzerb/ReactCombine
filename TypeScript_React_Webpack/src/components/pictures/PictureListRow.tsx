import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import ApiSelector from '../../api/ApiSelector';
import PictureEditPopup from './PictureEditPopup';

export interface PictureListRowProps
{
  picture:any;
  onEdit(picture:any):any;
  onDelete(picture:any):any;
}

export interface PictureListRowState
{
}

export class PictureListRow extends React.Component<PictureListRowProps, PictureListRowState>  {
  constructor(props : PictureListRowProps, context : any) {
    super(props, context);

    this.state = {
    };

    this.onLocalEdit = this.onLocalEdit.bind(this);
    this.onLocalDelete = this.onLocalDelete.bind(this);
    
  }

    onLocalEdit()
    {
      this.props.onEdit(this.props.picture);
    }

    onLocalDelete()
    {
      this.props.onDelete(this.props.picture);
    }
  
  render() {
  return(
          <tr>
            <td><PictureEditPopup picture={this.props.picture}/>  <a onClick = {this.onLocalEdit}>edit</a> <a onClick = {this.onLocalDelete}>delete</a></td>
            <td>{this.props.picture.description}<img width="100" src={ApiSelector.Picture(this.props.picture.pictureId)}/></td>
          </tr>    
    );
  }
}
// class PictureListRowOld extends React.Component {
//     constructor(props, context)    {
//         super(props, context);

//         this.onLocalEdit = this.onLocalEdit.bind(this);
//         this.onLocalDelete = this.onLocalDelete.bind(this);

//     }

//     onLocalEdit()
//     {
//       this.props.onEdit(this.props.picture);
//     }

//     onLocalDelete()
//     {
//       this.props.onDelete(this.props.picture);
//     }
// //"http://localhost:15989//Pictures/Image?pictureId="+
//     render() {
//         return (

//         );
//     }
// }

// PictureListRow.propTypes = {
//   picture: PropTypes.object.isRequired,
//   onEdit : PropTypes.func.isRequired,
//   onDelete : PropTypes.func.isRequired
// };
 
export default PictureListRow;