import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchVenues, deleteVenue } from '../actions/venueActions';

class VenueList extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    console.log("VENUE LIST MOUNT")
    const { dispatch } = this.props;
    dispatch(fetchVenues());
  }

  renderVenues() {
      return this.props.venues.map(({ name, location, startDate, endDate, _id }, index) => {
        return (
          <div key={index} className="card blue-grey darken-1">
            <div className="card-content white-text">
              <Link to={`/venues/${_id}`}><span className="card-title">{name}</span></Link>
              <p>{location}</p>
              <p>{new Date(startDate).toLocaleDateString()}</p>
              <p>{new Date(endDate).toLocaleDateString()}</p>
            </div>
          </div>
        )
      })
  }

  render() {
    return (
      <div>
        {this.renderVenues()}
        <Link to={'/venues/create'} className="btn-floating btn-large waves-effect waves-light red"><i className="material-icons">add</i></Link>
      </div>
    );
  }
}

const mapStateToProps = ({venue}) => {
  return { venues: venue.venues }


}

export default connect(mapStateToProps)(VenueList);