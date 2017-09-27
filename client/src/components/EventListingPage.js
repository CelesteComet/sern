import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchVenuesOf } from '../actions/venueActions';

import InitializeFromStateForm from './InitializeFromStateForm';

class EventListingPage extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // fetch all the events by the logged in user here
    const { dispatch } = this.props;
    console.log(fetchVenuesOf)
    dispatch(fetchVenuesOf());
  }

  render() {
    return (
      <div className='container'>
        <InitializeFromStateForm />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { state }
}

export default connect(mapStateToProps)(EventListingPage);