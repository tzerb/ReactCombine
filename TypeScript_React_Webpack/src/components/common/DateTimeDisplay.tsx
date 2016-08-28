import * as React from 'react';
import {PropTypes} from 'react';
//import * as moment from 'moment';

export interface DateTimeDisplayProps {
  name: string;
  label: string;
  value: Date;
}

// TODO TZ fix up props
const DateTimeDisplay = ({name, label, value}) => {
  let wrapperClass = '';
  let date = value; // TODO TZ moment(value).format();
  return (
    <span className={wrapperClass}>
        <span>{label} : </span>
        <span>{value}</span>
    </span>
  );
};

// DateTimeDisplay.propTypes = {
//   name: PropTypes.string.isRequired,
//   label: PropTypes.string.isRequired, 
//   value: PropTypes.string
// };

export default DateTimeDisplay;
