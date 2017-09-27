import React from 'react';
import { reduxForm, Field } from 'redux-form';

const FirstPage = (props) => {
  const { handleSubmit } = props;
  return (
    <form>
      <div>
        <h3>Create A Title For Your Event</h3>
            <div className="input-field" autofocus>
              <Field name='title' placeholder='Bossa Nova' component='input' autoFocus/>
            </div>
        <button className='waves-effect waves-light btn' onClick={ handleSubmit }>Next</button>
      </div>
    </form>
  );
}

export default reduxForm({
  form: 'createVenueForm',  //Form name is same
  destroyOnUnmount: false
})(FirstPage)