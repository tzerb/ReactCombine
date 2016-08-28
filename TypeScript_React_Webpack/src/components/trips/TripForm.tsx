import * as React from 'react';
import {PropTypes} from 'react';
import TextInput from '../common/TextInput';
import TextInputBig from '../common/TextInputBig';

export interface TripFormProps {
  trip : any;
  onSave(event : any) : any;
  onChange(event : any) : any;
  saving : boolean;
  errors : any;
}

export interface TripFormState {

}

export default class TripForm extends React.Component<TripFormProps, TripFormState>
{
  constructor(props : TripFormProps, context : any)
  {
    super(props, context);
  }

  render() 
  {
    return (
      <form>
        <h1>Manage Trip </h1>
        <TextInput
          name="title"
          label="Title"
          placeholder="Title"
          value={this.props.trip.title}
          onChange={this.props.onChange}
          error={this.props.errors.title}/>

        <TextInputBig
          name="description"
          label="Description"
          placeholder="Description"
          value={this.props.trip.description}
          onChange={this.props.onChange}
          error={this.props.errors.description}/>

        <TextInputBig
          name="dateTime"
          label="DateTime"
          placeholder="DateTime"
          value={this.props.trip.dateTime}
          onChange={this.props.onChange}
          error={this.props.errors.dateTime}/>

        <input
          type="submit"
          disabled={this.props.saving}
          value={this.props.saving ? 'Saving...' : 'Save'}
          className="btn btn-primary"
          onClick={this.props.onSave}/>
          
      </form>
    );
  }

} 

// const TripFormx = ({trip, onSave, onChange, saving, errors}) => {
//   try {

//   } catch (ex)
//   {
//     return (<div>Error rendering TripForm</div>); 
//   }

// };

// TripForm.propTypes = {
//   trip: PropTypes.object.isRequired,
//   onSave: PropTypes.func.isRequired,
//   onChange: PropTypes.func.isRequired,
//   saving: PropTypes.bool,
//   errors: PropTypes.object
// };

//export default TripForm;