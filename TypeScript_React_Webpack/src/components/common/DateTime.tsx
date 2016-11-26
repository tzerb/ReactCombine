import React, {PropTypes} from 'react';

export interface DateTimeProps
{
  name:any;
  label:any;
  onChange(event:any):any;
  placeholder:any;
  value:any;
  error:any[];
}

export interface DateTimeState
{
}

export class DateTime extends React.Component<DateTimeProps, DateTimeState>  {
  constructor(props : DateTimeProps, context : any) {
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
        <label htmlFor={name}>{this.props.label}</label>
        <div className="field">
          <input
            type="text"
            name={name}
            className="form-control"
            placeholder={this.props.placeholder}
            value={this.props.value}
            onChange={this.props.onChange}/>
          {this.props.error && <div className="alert alert-danger">{this.props.error}</div>}
        </div>
      </div>
      );
  }
}

export default DateTime;