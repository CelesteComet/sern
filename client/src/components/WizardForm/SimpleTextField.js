import React from 'react';

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <input {...input} type={type} placeholder={label}/>
    {touched && error && <span>{error}</span>}
  </div>
)

export default renderField;