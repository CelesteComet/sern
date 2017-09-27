import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchVenues, deleteVenue } from '../actions/venueActions';

import Heading from './Heading';
import Card from './Card';
import Slider from './Slider';


class Landing extends Component {

  constructor() {
    super();
  }

  componentDidMount() {
    var self = this;
    const { dispatch } = this.props;
    dispatch( fetchVenues() )
  }

  render() {
    return (
      <div>
        <Heading text='Upcoming Events'/>
        <Slider items={ this.props.state.venue.venues }/>
        <Heading text='Music'/>
        <Slider items={ this.props.state.venue.venues }/>
        <Heading text='Arts'/>
        <Slider items={ this.props.state.venue.venues }/>
        <Heading text='Film'/>
        <Slider items={ this.props.state.venue.venues }/>
        <Link to={'/venues/create'} className="btn-floating btn-large waves-effect waves-light red"><i className="material-icons">add</i></Link>
      </div>
    );
  }
}

  
const mapStateToProps = (state) => {
  return { state }
}

export default connect(mapStateToProps)(Landing);