import React, {PropTypes} from 'react';

export interface SelectInputProps
{
  name:string;
  label:string;
  onChange():any;
  defaultOption:any;
  value:any;
  error:any[];
  options:any[];
}

export interface SelectInputState
{
}

export class SelectInput extends React.Component<SelectInputProps, SelectInputState>  {
  constructor(props : SelectInputProps, context : any) {
    super(props, context);
    this.state = {
    };
  }
  render() {
  return(
    <div className="form-group">
      <label htmlFor={name}>{this.props.label}</label>
      <div className="field">
        {/* Note, value is set here rather than on the option - docs: https://facebook.github.io/react/docs/forms.html */}
        <select
          name={this.props.name}
          value={this.props.value}
          onChange={this.props.onChange}
          className="form-control">
          <option value="">{this.props.defaultOption}</option>
          {this.props.options.map((option : any) => {
            return <option key={option.value} value={option.value}>{option.text}</option>;
          })
          }
        </select>
        {this.props.error && <div className="alert alert-danger">{this.props.error}</div>}
      </div>
    </div>
    );
  }
}

export default SelectInput;
