import React from 'react';
import DatePicker from 'material-ui/DatePicker';

export interface DateInputProps
{
  name:any;
  label:any;
  onChange(event:any, dateTime:Date):any;
  placeholder:any;
  value:any;
  error:any;  
}

export interface DateInputState
{
  minDate : Date;
}

export class DateInput extends React.Component<DateInputProps, DateInputState>  {
  constructor(props : DateInputProps, context : any) {
    super(props, context);

    const minDate = new Date();
    minDate.setFullYear(minDate.getFullYear() - 1);
    minDate.setHours(0, 0, 0, 0);    
    this.state = {
      minDate : minDate
    };
  }

  render() {
    let wrapperClass = 'form-group';
    if (this.props.error && this.props.error.length > 0) {
      wrapperClass += " " + 'has-error';
    }
      

    console.log(this.props.value);
    return(
      <div><DatePicker 
        hintText={this.props.placeholder} 
        floatingLabelText={this.props.label.toUpperCase()}
        name={this.props.name}
        defaultDate={this.state.minDate}
        onChange={this.props.onChange}
        locale='en-US'
      /></div>
      );
  }
}

/*
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
*/

// const DateInputOld = ({name, label, onChange, placeholder, value, error}) => {
//   let wrapperClass = 'form-group';
//   if (error && error.length > 0) {
//     wrapperClass += " " + 'has-error';
//   }

//   return (
//   );
// };

// DateInput.propTypes = {
//   name: PropTypes.string.isRequired,
//   label: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
//   placeholder: PropTypes.string,
//   value: PropTypes.string,
//   error: PropTypes.string
// };

export default DateInput;
