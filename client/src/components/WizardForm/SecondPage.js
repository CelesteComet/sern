import React from 'react';
import { reduxForm, Field } from 'redux-form';

import NextPrevious from './NextPrevious';

const SecondPage = (props) => {
  const { handleSubmit, previous } = props;
  return (
    <form>
      <div>
        <h5>Please provide a short description about your event</h5>
        <div className="input-field">
          <Field name='description' placeholder='A pleasant evening of bossa nova by the beach.' component='input' />
        </div>
        <NextPrevious next={ handleSubmit } previous={ previous } />
      </div>
    </form>
  );
}

export default reduxForm({
  form: 'createVenueForm',  //Form name is same
  destroyOnUnmount: false
})(SecondPage)