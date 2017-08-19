import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import { fetchVenue, deleteVenue } from '../actions/venue.actions';


class VenueDetail extends Component {
	constructor() {
		super();
		this.delete = this.delete.bind(this);
	}

	componentDidMount() {
		const { dispatch } = this.props;
		const { id } = this.props.match.params;
		dispatch(fetchVenue(id));
	}

	delete() {
		const { dispatch } = this.props;
		const { id } = this.props.match.params;
		dispatch(deleteVenue(id));
	}

	render() {
		const venue = this.props.venue;
		return (
			<div>
				{	!!venue &&
					<div className='venu-item'>					
						<Link to={'/venues/' + venue.id }>
							<p>{ venue.name }</p>
						</Link>
						<p>{ venue.location }</p>
						<p>{ venue.startDate }</p>
						<p>{ venue.endDate }</p>
						<button className="btn btn-default" onClick={this.delete.bind(null, venue.id)}>DELETE</button>
						<Link to={'/venues/edit'}>
							<button className="btn btn-default">Edit</button>
						</Link>
						<hr/>
					</div>
				}
				{ this.props.deleted &&
					<Redirect to={'/venues'} />
				}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return { 
		venue: state.venue.venue,
		deleted: state.venue.venueDeleted
	}
}

VenueDetail = connect(mapStateToProps)(VenueDetail);

export default VenueDetail;