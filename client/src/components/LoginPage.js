import React, { Component } from 'react';
import LoginForm from './LoginForm';
import { connect } from 'react-redux';
import { loginUser } from '../actions/index';
import { Redirect } from 'react-router';

class LoginPage extends Component {
	constructor() {
		super();
		this.submit = this.submit.bind(this);
	}

	submit(values) {
		const { dispatch } = this.props;
		dispatch( loginUser(values) );
	}

	render() {
		return (
			<div>
				{this.props.authenticated? <Redirect to='/dashboard' /> : <LoginForm onSubmit={this.submit}/>}
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);

