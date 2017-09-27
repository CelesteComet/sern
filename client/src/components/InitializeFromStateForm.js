import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'


let InitializeFromStateForm = props => {
  const { handleSubmit, load, pristine, reset, submitting } = props;

  var FIELDS = [
    { name: 'name' },
    { name: 'location' },
    { name: 'startDate' },
    { name: 'endDate' }
  ]

  const renderFields = () => {
    return FIELDS.map(({ name }, index) => {
      return (
        <div key={ index }>
          <Field name={ name } component='input' type='text' placeholder={ name } />
        </div>
      )
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      { renderFields() }
      <div>
        <button type="submit" disabled={pristine || submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Undo Changes
        </button>
      </div>
    </form>
  )
}

// Decorate with reduxForm(). It will read the initialValues prop provided by connect()
InitializeFromStateForm = reduxForm({
  form: 'initializeFromState' // a unique identifier for this form
})(InitializeFromStateForm)

const mapStateToProps = (state) => {
  const values = state.venue.venueDetail;
  console.log(state)
  const { startDate, endDate } = values;
  values.startDate = new Date(startDate).toLocaleDateString();
  values.endDate = new Date(endDate).toLocaleDateString();
  return { initialValues: values }
}

// You have to connect() to any reducers that you wish to connect to yourself
InitializeFromStateForm = connect(mapStateToProps)(InitializeFromStateForm);

export default InitializeFromStateForm;