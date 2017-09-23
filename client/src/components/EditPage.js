import React, { Component } from 'react';
import { connect } from 'react-redux';
import InitializeFromStateForm from './InitializeFromStateForm';
import { updateVenue } from '../actions/venueActions';

class EditPage extends Component {
  render() {
    const { dispatch, history } = this.props;
    return (
      <InitializeFromStateForm onSubmit={ (values, body) => {
        dispatch( updateVenue(values._id, values, history) )
      }} />
    )
  }
}

export default connect()(EditPage);