import React from 'react';
import { Field, reduxForm, FieldArray } from 'redux-form';
import SimpleTextField from './SimpleTextField';

const WizardFormFirstPage = props => {
  const { array: { push }, next, fieldz } = props
  

  const renderFields = (fields) => {
    return fieldz.map((fieldName, index) => {
      return <Field key={ index } name={ fieldName } type='text' component='input' placeholder={ fieldName } />
    })
  }

  const renderMembers = ({ fields, meta: { touched, error} }) => {
    return (
      <ul>
        <li>
          <button type='button' onClick={() => fields.push({})}>Add Member</button>
        </li>
        {fields.map((member, index) =>
          <li key={index}>
            <button
              type="button"
              title="Remove Member"
              className='btn'
              onClick={() => fields.remove(index)}>Remove</button>

            
            <Field
              name={`${member}.name`}
              type="text"
              component={ SimpleTextField } 
            />
          </li>
        )}
      </ul>
    );
  }

  return (
    <form>
      { renderFields(fieldz) }
      <FieldArray name="members" component={renderMembers}/>
      <div>
        <button type='button' onClick={ next } className="next">
          Next
        </button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'createVenueForm', // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true // <------ unregister fields on unmount
})(WizardFormFirstPage)