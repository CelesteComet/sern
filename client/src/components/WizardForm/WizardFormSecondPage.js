import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux';

function WizardFormSecondPage({ values, previous, handleSubmit, fieldz }) {
  console.log(values);
  console.log(fieldz);

  const renderReviewFields = (fieldz) => {
    return fieldz.map((field, index) => {
      return (
        <div key={index}>
          <label>{field}</label>
          <div>
            { values[field] }
          </div>
        </div>
      );
    });
  }

  return (
    <form onSubmit={ handleSubmit } >
      { renderReviewFields(fieldz) }
      <div>
        <button type="submit" className="next">
          Next
        </button>
      </div>
      <div>
        <button type='button' onClick={ previous } className="previous">
          Previous   
        </button>
      </div>
    </form>
  )
}

const mapStateToProps = ( {form: { createVenueForm: { values } }} ) => {
  return { values }
}

WizardFormSecondPage = connect(mapStateToProps)(WizardFormSecondPage);

export default reduxForm({
  form: 'createVenueForm', // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true // <------ unregister fields on unmount
})(WizardFormSecondPage)

