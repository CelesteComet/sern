import React from 'react';
import { Field, reduxForm } from 'redux-form';

const renderField = field => (  
  <div>
    <input className="form-control" {...field.input}/>
    {field.touched && field.error && <div className="error">{field.error}</div>}
  </div>
);

let RegistrationForm = props => {
	const { handleSubmit } = props;

	return (
		<form onSubmit={ handleSubmit }>
      <div className="row">
        <div className="col-md-6">
          <label>Username</label>
          <Field name="username" className="form-control" component={renderField} type="text" />
        </div>
        <div className="col-md-6">
          <label>Password</label>
          <Field name="password" className="form-control" component={renderField} type="text" />
        </div>
        <input type="submit" className='btn btn-default' value='submit' />
      </div>
		</form>
	);
}

RegistrationForm = reduxForm({
	form: 'registrationForm'
})(RegistrationForm)

export default RegistrationForm;