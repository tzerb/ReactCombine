import React, {PropTypes} from 'react';
import WaypointListRow from './WaypointListRow';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';


const WaypointList = ({waypoints, onEdit, onDelete}) => {
  return (
    <div>

    {waypoints===null &&
      <span>The list is null.</span>
    }

    {waypoints && (waypoints.length===0) &&
      <span>The list is empty.</span>
    }

    {waypoints && (waypoints.length>0) &&


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
        <TableHeaderColumn>ID</TableHeaderColumn>
        <TableHeaderColumn>Name</TableHeaderColumn>
        <TableHeaderColumn>Description</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody
      displayRowCheckbox={false}
    >
      {waypoints.map((waypoint:any) =>
        <TableRow key={waypoint.waypointId}>
          <TableRowColumn>{waypoint.waypointId}</TableRowColumn>
          <TableRowColumn>{waypoint.name}</TableRowColumn>
          <TableRowColumn>{waypoint.description}</TableRowColumn>
        </TableRow>
      )}     
    </TableBody>
  </Table>        
    }
 
    </div>
  );
};

export default WaypointList;
