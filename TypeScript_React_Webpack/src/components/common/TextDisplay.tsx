import React, {PropTypes} from 'react';

export interface TextDisplayProps
{
  name:string; 
  label:string; 
  value:string;
}

export interface TextDisplayState
{
}

export class TextDisplay extends React.Component<TextDisplayProps, TextDisplayState>  {
  constructor(props : TextDisplayProps, context : any) {
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
// const TextDisplayOld = ({name, label, value}) => {
//   let wrapperClass = '';

//   return (
//   );
// };

// TextDisplay.propTypes = {
//   name: PropTypes.string.isRequired,
//   label: PropTypes.string.isRequired,
//   value: PropTypes.string
// };

export default TextDisplay;
