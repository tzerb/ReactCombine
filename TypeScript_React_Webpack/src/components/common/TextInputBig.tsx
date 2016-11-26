import * as React from 'react'; 
import TextField from 'material-ui/TextField';

const TextInputBig = ({name, label, onChange, placeholder, value, error}) => {
  let wrapperClass = 'form-group';
  if (error && error.length > 0) {
    wrapperClass += " " + 'has-error';
  }
  console.log(`value = ${value}`);
  return (
    <div>
      <TextField
        name={name}
        hintText={placeholder}
        floatingLabelText={label.toUpperCase()}
        floatingLabelFixed={true}
        multiLine={true}
        rows={1}      
        value={value}
        errorText={error}
        onChange={onChange}
        
      />  
    </div>

  );
};

export default TextInputBig;