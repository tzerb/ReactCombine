import React, {PropTypes} from 'react';

export interface LocationInputProps
{
  name:any;
  label:any;
  onChange(event:any):any;
  placeholder:any;
  latitude:any;
  longitude:any;
  error:any[];
}

export interface LocationInputState
{
}

export class LocationInput extends React.Component<LocationInputProps, LocationInputState>  {
  constructor(props : LocationInputProps, context : any) {
    super(props, context);
    this.state = {
    };
  }
  render() {
    let wrapperClass = 'form-group';
    if (this.props.error && this.props.error.length > 0) {
      wrapperClass += " " + 'has-error';
    }
      
    return(
      <div className={wrapperClass}>
        {false && <div>{this.props.label}</div>}
        <label htmlFor={this.props.name}>Latitude</label>
        <div className="field">
          <input
            type="text"
            name="latitude"
            className="form-control"
            placeholder={this.props.placeholder}
            value={this.props.latitude}
            onChange={this.props.onChange}/>
        </div>
        <label htmlFor={name}>Longitude</label>
        <div className="field">
          <input
            type="text"
            name="longitude"
            className="form-control"
            placeholder={this.props.placeholder}
            value={this.props.longitude}
            onChange={this.props.onChange}/>          
          {this.props.error && <div className="alert alert-danger">{this.props.error}</div>}
        </div>
      </div>
    );
  }
}

export default LocationInput;
