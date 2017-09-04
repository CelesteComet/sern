import React, { Component } from 'react';
import { connect } from 'react-redux';
import { venuePageUp, venuePageDown, fetchVenues} from '../actions/venue.actions';

class Pagination extends Component {
	constructor() {
		super();
		this.pageUp = this.pageUp.bind(this);
		this.pageDown = this.pageDown.bind(this);
	}

	pageUp(e) {
		e.preventDefault();
		const { dispatch } = this.props;
		dispatch(venuePageUp());
		
	}

	pageDown(e) {
		e.preventDefault();
		const { dispatch } = this.props;
		dispatch(venuePageDown());
	}

	render() {
		return (
			<nav aria-label="Page navigation example">
			  <ul className="pagination">
			    <li onClick={ this.pageDown } className="page-item"><a className="page-link" href="#">Previous</a></li>
			    <li className="page-item"><a className="page-link" href="#">1</a></li>
			    <li className="page-item"><a className="page-link" href="#">2</a></li>
			    <li className="page-item"><a className="page-link" href="#">3</a></li>
			    <li onClick={ this.pageUp } className="page-item"><a className="page-link" href="#">Next</a></li>
			  </ul>
			</nav>
		);
	}
}

const mapStateToProps = (state) => {
	return { state }
}

Pagination = connect(mapStateToProps)(Pagination);

export default Pagination;