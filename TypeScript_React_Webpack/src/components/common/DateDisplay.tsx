import React, {PropTypes} from 'react';
let moment = require('moment');

export interface DateDisplayProps
{
  name:string;
  label:string;
  value:string;
}

export interface DateDisplayState
{
}

export class DateDisplay extends React.Component<DateDisplayProps, DateDisplayState>  {
  wrapperClass = '';
  constructor(props : DateDisplayProps, context : any) {
    super(props, context);
    this.state = {
    };
  }
  render() {
    let date = moment(this.props.value).format('MM/DD/YYYY');
    return(
      <span className={this.wrapperClass}>
          <span>{this.props.label} : </span>
          <span>{date}</span>
      </span>
      );
    }
}

// const DateDisplayOld = ({name, label, value}) => {
//   let wrapperClass = '';

//   let date = moment(value).format('MM/DD/YYYY');
//   return (
//   );
// };

// DateDisplay.propTypes = {
//   name: PropTypes.string.isRequired,
//   label: PropTypes.string.isRequired,
//   value: PropTypes.string
// };

export default DateDisplay;
