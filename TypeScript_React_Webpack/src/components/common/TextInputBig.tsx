import * as React from 'react'; //, {PropTypes}
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

/*
    <div className={wrapperClass}>
      <label htmlFor={name}>{label}</label>
      <div className="field">
        <input
          type="text"
          name={name}
          className="form-control"
          placeholder={placeholder}
          value={value}
          onChange={onChange}/>
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
*/
// TextInputBig.propTypes = {
//   name: PropTypes.string.isRequired,
//   label: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
//   placeholder: PropTypes.string,
//   value: PropTypes.string,
//   error: PropTypes.string
// };

export default TextInputBig;