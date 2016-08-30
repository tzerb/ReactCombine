import React, {PropTypes} from 'react';
import PictureListRow from './PictureListRow';

export interface PictureListProps
{
  pictures:any[];
  onDelete(picture:any):any;
  onEdit(picture:any):any;
}

export interface PictureListState
{
}
export class PictureList extends React.Component<PictureListProps, PictureListState>  {
  constructor(props : PictureListProps, context : any) {
    super(props, context);
    this.state = {
    };
  }
  render() {
    return(
    <table className="table">
      <thead>
      <tr>
        <th>Title</th>
        <th>Description</th>
        <th></th>
      </tr>
      </thead>
      <tbody>
      {this.props.pictures.map((picture:any) =>
        <PictureListRow key={picture.pictureId} picture={picture} onDelete={this.props.onDelete} onEdit={this.props.onEdit}/>
      )}
      </tbody>
    </table>
    );
  }
}
// const PictureListOld = ({pictures, onDelete, onEdit}) => {
//   return (
//   );
// };
//
// PictureList.propTypes = {
//   pictures: PropTypes.array.isRequired,
//   onDelete : PropTypes.func.isRequired,
//   onEdit : PropTypes.func.isRequired
// };

export default PictureList;
