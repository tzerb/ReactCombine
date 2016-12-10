import React, {PropTypes} from 'react';
import WaypointListRow from './WaypointListRow';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

import IconButton from 'material-ui/IconButton';
import SvgIcon from 'material-ui/SvgIcon';

import DeleteForeverIcon from '../svg/DeleteForever'
import EditIcon from '../svg/Edit'
import AddIcon from '../svg/Add'

const iconWidth = {
    width: '20px'
};

export interface WaypointListProps
{
  waypoints: any[];
  onEdit : any;
  onDelete : any;
}

export interface WaypointListState
{
}

export class WaypointList extends React.Component<WaypointListProps, WaypointListState>  {
    constructor(props:WaypointListProps, context : any)    {
        super(props, context);

    }
   
    addClicked(event:any)
    {
        event.preventDefault();
        alert('addClicked');
    }   
   
    deleteClicked(event:any)
    {
        event.preventDefault();
        alert('deleteClicked');
    }   

    editClicked(event:any)
    {
        event.preventDefault();
        alert('editClicked');
    }

    render() {
  return (
    <div>

    {this.props.waypoints===null &&
      <span>The list is null.</span>
    }

    {this.props.waypoints && (this.props.waypoints.length===0) &&
      <span>The list is empty.</span>
    }

    {this.props.waypoints && (this.props.waypoints.length>0) &&
      <Table
          height={"300px"}
          fixedHeader={true}
          fixedFooter={true}  
      >
        <TableHeader 
          displaySelectAll={false}
          adjustForCheckbox={false}
        >
          <TableRow>
            <TableHeaderColumn style={{width: '50px', paddingRight:4, paddingLeft:4}}><IconButton onClick={this.addClicked}><AddIcon color="rgb(0, 0, 0)" /></IconButton></TableHeaderColumn>
            <TableHeaderColumn style={{width: '50px', paddingRight:4, paddingLeft:4}}></TableHeaderColumn>
            <TableHeaderColumn style={{width: '15%'}}>ID</TableHeaderColumn>
            <TableHeaderColumn style={{width: '15%'}}>Name</TableHeaderColumn>
            <TableHeaderColumn>Description</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody
          displayRowCheckbox={false}
        >
          {this.props.waypoints.map((waypoint:any) =>
            <TableRow key={waypoint.waypointId}>
              <TableRowColumn style={{width: '50px', paddingRight:4, paddingLeft:4}}><IconButton onClick={this.editClicked}><EditIcon color="rgb(0, 0, 0)" /></IconButton></TableRowColumn>
              <TableRowColumn style={{width: '50px', paddingRight:4, paddingLeft:4}}><IconButton onClick={this.deleteClicked}><DeleteForeverIcon color="rgb(0, 0,0)" /></IconButton></TableRowColumn>
              <TableRowColumn style={{width: '15%'}}>{waypoint.waypointId}</TableRowColumn>
              <TableRowColumn style={{width: '15%'}}>{waypoint.name}</TableRowColumn>
              <TableRowColumn>{waypoint.description}</TableRowColumn>
            </TableRow>
          )}     
        </TableBody>
      </Table>        
        }
 
    </div>
  );
      
  }
}

export default WaypointList;
