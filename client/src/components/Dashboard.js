import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import RequireAuth from './RequireAuth';

import { profileActions } from '../reducers';

class Dashboard extends Component {
	constructor() {
		super();
	}

	componentDidMount() {
		const { dispatch } = this.props;
		console.log(this.props);
		dispatch( profileActions.fetchProfile(this.props.user.id) );
	}

	render() {
		const profile = this.props.profile;
		return (
			<RequireAuth>
				{ profile && 
					<div>
						<p>{profile.company_name}</p>
						<p>{profile.performance_type}</p>
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
	return { profile: state.Profile.Profile, user: state.auth.user.user }
}

export default connect(mapStateToProps)(Dashboard);