import React, {PropTypes} from 'react';
import TextInput from '../common/TextInput';
import TextInputBig from '../common/TextInputBig';
import DateTime from '../common/DateTime';
import LocationInput from '../common/LocationInput';

export interface WaypointFormProps
{
  waypoint:any;
  onSave(event:any):any;
  onChange(event:any):any;
  saving:boolean;
  errors:any;  
}

export interface WaypointFormState
{
}

export class WaypointForm extends React.Component<WaypointFormProps, WaypointFormState>  {
  constructor(props : WaypointFormProps, context : any) {
    super(props, context);
    this.state = {
    };
  }
  render() {
  return(
      <form>
        <h1>Manage waypoint</h1>
        <TextInput
          name="name"
          label="Name"
          value={this.props.waypoint.name}
          onChange={this.props.onChange}
          placeholder=""
          error={this.props.errors.name}/>

        <TextInputBig
          name="description"
          label="Description"
          value={this.props.waypoint.description}
          onChange={this.props.onChange}
          placeholder=""
          error={this.props.errors.description}/>

        <DateTime
          name="dateTime"
          label="DateTime"
          value={this.props.waypoint.dateTime}
          onChange={this.props.onChange}
          placeholder=""
          error={this.props.errors.dateTime}/>

        <LocationInput
          name="location"
          label="Location"
          latitude = {this.props.waypoint.latitude}
          longitude = {this.props.waypoint.longitude}
          onChange={this.props.onChange}
          placeholder=""
          error={this.props.errors.location}/>

        <input
          type="submit"
          disabled={this.props.saving}
          value={this.props.saving ? 'Saving...' : 'Save'}
          className="btn btn-primary"
          onClick={this.props.onSave}/>

      </form>    
    );
  }
}

export default WaypointForm;