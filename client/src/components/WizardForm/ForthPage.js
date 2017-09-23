import React from 'react';
import { reduxForm, Field } from 'redux-form';
import MyDatePicker from './MyDatePicker';
import NextPrevious from './NextPrevious';


const ForthPage = (props) => {
  const { handleSubmit, previous } = props;
  return (
    <form>
      <div>
        <h5>On what dates will your event be held?</h5>
        <div className="input-field">
          <Field name='eventDate1' component={MyDatePicker} formName='createVenueForm'/>
          <Field name='eventDate2' component={MyDatePicker} formName='createVenueForm'/>
          <Field name='eventDate3' component={MyDatePicker} formName='createVenueForm'/>
          <Field name='eventDate4' component={MyDatePicker} formName='createVenueForm'/>
          <Field name='eventDate5' component={MyDatePicker} formName='createVenueForm'/>
        </div>
        <NextPrevious next={ handleSubmit } previous={ previous } />
      </div>
    </form>
  );
}

export default reduxForm({
  form: 'createVenueForm',  //Form name is same
  destroyOnUnmount: false
})(ForthPage)