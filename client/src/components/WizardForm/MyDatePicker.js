import React from 'react';
import DatePicker from 'material-ui/DatePicker';
import moment from 'moment';
import { reduxForm, Field, change, arrayInsert } from 'redux-form';
import { connect } from 'react-redux';

function MyDatePicker({ input: { name, value }, formName, changeField }) {
  if (value == '') { 
    value = {}
  } 
  return (
    <DatePicker 
      name={ name }
      onChange={ (event, value) => { changeField(formName, name, value) }}
      value={ value }
    />
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeField: (formName, fieldName, newValue) => { 
      dispatch(change(formName, fieldName, newValue )) 
    }
  }
}

export default connect(null, mapDispatchToProps)(MyDatePicker);