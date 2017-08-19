import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import RequireAuth from './RequireAuth';
import { getProfile } from '../actions/index';

class Dashboard extends Component {
	constructor() {
		super();
	}

	componentDidMount() {
		const { dispatch } = this.props;
		dispatch(getProfile());
	}

	render() {
		const profile = this.props.profile;
		return (
			<RequireAuth>
				{ profile && 
					<div>
						<p>{profile.company_name}</p>
						<p>{profile.type}</p>
					</div>
				}
				{ !profile &&
					<Redirect to='/dashboard' />
				}
			</RequireAuth>
		);
	}
}

function mapStateToProps(state) {
	return { profile: state.auth.profile }
}

export default connect(mapStateToProps)(Dashboard);