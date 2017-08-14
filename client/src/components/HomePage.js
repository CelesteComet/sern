import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header';

import { logoutUser } from '../actions/index';

class HomePage extends Component {
	constructor() {
		super();
		this.logoutUser = this.logoutUser.bind(this);
	}

	logoutUser() {
		const { dispatch } = this.props;
		dispatch(logoutUser());
	}

	render() {
		return (
			<div>
				<Header authenticated={this.props.authenticated} logoutUser={this.logoutUser}/>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { authenticated: state.auth.authenticated }
}

function mapDispatchToProps(dispatch) {
	return { dispatch }
}

HomePage = connect(mapStateToProps, mapDispatchToProps)(HomePage);

export default HomePage;