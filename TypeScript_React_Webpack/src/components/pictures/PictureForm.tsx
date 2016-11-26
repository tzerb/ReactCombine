import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';
import TextInputBig from '../common/TextInputBig';
import DateTime from '../common/DateTime';
import DateInput from '../common/DateInput';

export interface PictureFormProps
{
  picture:any;
  onSave():any;
  onChange():any
  saving:boolean;
  errors:any;
}

export interface PictureFormState
{
}

export class PictureForm extends React.Component<PictureFormProps, PictureFormState>  {
  constructor(props : PictureFormProps, context : any) {
    super(props, context);
    this.state = {
    };
  }
  render() {
    return(
        <form>
          <h1>Manage Picture </h1>
          <TextInput
            name="name"
            label="name"
            value={this.props.picture.name}
            placeholder=""
            onChange={this.props.onChange}
            error={this.props.errors.name}/>

          <TextInputBig
            name="description"
            label="Description"
            value={this.props.picture.description}
            placeholder=""
            onChange={this.props.onChange}
            error={this.props.errors.description}/>

          <TextInputBig
            name="dateTime"
            label="DateTime"
            value={this.props.picture.dateTime}
            onChange={this.props.onChange}
            placeholder=""
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

export default PictureForm;