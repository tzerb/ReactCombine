import * as React from 'react';
import {PropTypes} from 'react';
import TextInput from '../common/TextInput';
import TextInputBig from '../common/TextInputBig';
import DateInput from '../common/DateInput';

export interface TripFormProps {
  trip : any;
  onSave(event : any) : any;
  onChange(event : any) : any;
  onDateTimeChange(event : any, dateTime:Date) : any;
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

        <DateInput
          name="dateTime"
          label="DateTime"
          placeholder="DateTime"
          value={this.props.trip.dateTime}
          onChange={this.props.onDateTimeChange}
          error={this.props.errors.dateTime}/>
         
      </form>
    );
  }

} 
