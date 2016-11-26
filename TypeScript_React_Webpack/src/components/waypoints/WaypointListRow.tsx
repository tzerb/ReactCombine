import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import WaypointEditPopup from './WaypointEditPopup';

export interface WaypointListRowProps
{
  waypoint:any;
  onEdit(waypoint:any) : any;
  onDelete(waypoint:any) : any;
}

export interface WaypointListRowState
{

}

class WaypointListRow extends React.Component<WaypointListRowProps, WaypointListRowState> {
    constructor(props:WaypointListRowProps, context:any)    {
        super(props, context);

        this.onLocalEdit = this.onLocalEdit.bind(this);
        this.onLocalDelete = this.onLocalDelete.bind(this);
        this.saveWaypoint = this.saveWaypoint.bind(this);
    }

    saveWaypoint ()
    {
      alert('saveWaypoint.  Probably needs to propagate up.');
    }
    onLocalEdit()
    {
      this.props.onEdit(this.props.waypoint);
    }

    onLocalDelete()
    {
      this.props.onDelete(this.props.waypoint);
    }

    // <WaypointEditPopup waypoint={this.props.waypoint}/> <a onClick = {this.onLocalEdit}>edit</a> <a onClick = {this.onLocalDelete}>delete</a> 
    render() {
        return (
          <tr>
            <td><WaypointEditPopup Waypoint={this.props.waypoint} saveWaypoint={this.saveWaypoint} />

            </td>
            <td>{this.props.waypoint.name}</td>
          </tr>
        );
    }
}

// WaypointListRow.propTypes = {
//   waypoint: PropTypes.object.isRequired,
//   onEdit : PropTypes.func.isRequired,
//   onDelete : PropTypes.func.isRequired
// };

export default WaypointListRow;