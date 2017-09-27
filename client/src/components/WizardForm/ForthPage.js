import React from 'react';
import { reduxForm, Field, FieldArray } from 'redux-form';
import MyDatePicker from './MyDatePicker';
import NextPrevious from './NextPrevious';

const renderMembers = ({ fields, meta: { error, submitFailed } }) => {
  return (
    <ul>
      <li>
        <button className='waves-effect waves-light btn' type="button" onClick={() => {fields.push({})}}>
          Add Event Date 
        </button>
      </li>
      {fields.map((date, index) => {
        return <li key={ index }><Field name={'eventDates[' + index + ']'} component={MyDatePicker} /></li>
      })}
    </ul>
  );
}

const ForthPage = (props) => {
  const { handleSubmit, previous } = props;
  return (
    <form>
      <div>
        <h5>On what dates will your event be held?</h5>
        <div className="input-field">
          <FieldArray name="eventDates" component={renderMembers} />
        </div>
        <NextPrevious next={ handleSubmit } previous={ previous } />
      </div>
    </form>
  );
}

export default reduxForm({
  form: 'createVenueForm',  //Form name is same
  destroyOnUnmount: false,
  initialValues: {
    eventDates: [{}]
  }
})(ForthPage)