import React, {PropTypes} from 'react';

export interface TextDisplayBigProps
{
  name:string; 
  label:string; 
  value:string;
}

export interface TextDisplayBigState
{
}

export class TextDisplayBig extends React.Component<TextDisplayBigProps, TextDisplayBigState>  {
  constructor(props : TextDisplayBigProps, context : any) {
    super(props, context);
    this.state = {
    };
  }
  render() {
  let wrapperClass = '';
    return(
      <span className={wrapperClass}>
          <span>{this.props.label} : </span>
          <span>{this.props.value}</span>
      </span>
      
      );
  }
}

// const TextDisplayBigOld = ({name, label, value}) => {
//   let wrapperClass = '';

//   return (
//   );
// };

// TextDisplayBig.propTypes = {
//   name: PropTypes.string.isRequired,
//   label: PropTypes.string.isRequired,
//   value: PropTypes.string
// };

export default TextDisplayBig;
