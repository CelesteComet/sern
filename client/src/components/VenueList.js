import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// Import actions
import { fetchVenues } from '../actions/venue.actions';

import RequireAuth from './RequireAuth';

class VenueList extends Component {
	constructor() {
		super();
	}

	componentDidMount() {
		const { dispatch } = this.props;
		dispatch(fetchVenues());
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
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return { venueState: state.venue }
}

VenueList = connect(mapStateToProps)(VenueList);

export default VenueList;