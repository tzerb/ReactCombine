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
  kludgeDate : Date;
}
// TODO TZ I couldn't get this to work w/o the kludge.

export class DateInput extends React.Component<DateInputProps, DateInputState>  {
  constructor(props : DateInputProps, context : any) {
    super(props, context);

    const minDate2 = new Date(this.props.value.toString());
 
    const minDate = new Date();
    minDate.setFullYear(minDate.getFullYear() - 1);
    minDate.setHours(0, 0, 0, 0);    
    this.state = {
      minDate : minDate,
      kludgeDate : minDate2
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
        value={this.props.value}
        defaultDate={this.state.minDate}
        onChange={this.props.onChange}
        locale='en-US'
      /></div>
      );
  }
}

export default DateInput;
