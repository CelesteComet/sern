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
		console.log(this.props);
	}

	render() {
		const user = this.props.profile;
		console.log(this.props.profile);
		return (
			<RequireAuth>
				{ user && 
					<div>
						<p>{user.username}</p>
						<p>{user.role}</p>
					</div>
				}
				{ !user &&
					<Redirect to='/dashboard' />
				}
			</RequireAuth>
		);
	}
}

function mapStateToProps(state) {
	return { profile: state.auth.user, history: state.history }
}

export default connect(mapStateToProps)(Dashboard);