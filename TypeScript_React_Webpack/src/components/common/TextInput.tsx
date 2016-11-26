import * as React from 'react';
import TextField from 'material-ui/TextField';

const TextInput = ({name, label, onChange, placeholder, value, error}) => {
  let wrapperClass = 'form-group';
  if (error && error.length > 0) {
    wrapperClass += " " + 'has-error';
  }

  return (
    <div>
      <TextField
        name={name}
        hintText={placeholder}
        floatingLabelText={label.toUpperCase()}
        floatingLabelFixed={true}
        value={value}
        onChange={onChange}
      />  
    </div>
  );
};

export default TextInput;
