import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// Import actions
import { fetchVenues } from '../actions/venue.actions';

import RequireAuth from './RequireAuth';
import Pagination from './Pagination';

class VenueList extends Component {
	constructor() {
		super();
	}

	componentDidMount() {
		const { dispatch } = this.props;
		const page = this.props.venueState.page;
		dispatch(fetchVenues(page));
	}

	componentDidUpdate(prevProps, prevState) {
		if (this.props.page != prevProps.page) {
			const { dispatch } = this.props;
			const page = this.props.venueState.page;
			dispatch(fetchVenues(page));
		}
	}

	render() {
		return (
			<div>
				{ this.props.venueState.venues && 
					<ul>
						{this.props.venueState.venues.map(function(item, index) {
							return (
								<li key={ item.id }>
									<Link to={'/venues/' + item.id }><p>{ item.name }</p></Link>
								</li>
							);
						})}
					</ul>
			  }
			  <Pagination />
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return { venueState: state.venue, page: state.venue.page}
}

VenueList = connect(mapStateToProps)(VenueList);

export default VenueList;