import React from 'react';
import { Field, reduxForm } from 'redux-form';

const renderField = field => (  
  <div>
    <input className="form-control" {...field.input}/>
    {field.touched && field.error && <div className="error">{field.error}</div>}
  </div>
);

let LoginForm = props => {
	const { handleSubmit } = props;

	return (
		<form onSubmit={ handleSubmit }>
      { props.message && 
        <div className="alert alert-warning show" role="alert">
          <strong>Warning!</strong> { props.message }
        </div>
      }
      <div className="row">
        <div className="col-md-6">
          <label>Username</label>
          <Field name="username" className="form-control" component={renderField} type="text" />
        </div>
        <div className="col-md-6">
          <label>Password</label>
          <Field name="password" className="form-control" component={renderField} type="text" />
        </div>
        <div className="col-md-2">
          <input type="submit" className='btn btn-default' value='submit' />
        </div>
      </div>
		</form>
	);
}

LoginForm = reduxForm({
	form: 'registrationForm'
})(LoginForm)

export default LoginForm;