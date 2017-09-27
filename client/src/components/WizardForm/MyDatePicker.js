import React from 'react';
import DatePicker from 'material-ui/DatePicker';
import moment from 'moment';
import { reduxForm, Field, change, arrayInsert } from 'redux-form';
import { connect } from 'react-redux';

function MyDatePicker(props) {
  console.log(props)
  const { input: { value, onChange, name }} = props;
  return (
    <DatePicker 
      name={ name }
      hintText='Click To Pick Date'
      onChange={ (somethign, date) => { onChange(date) } } 
      value={ value }
    />
  );
}


export default MyDatePicker;

 