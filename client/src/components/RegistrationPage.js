import React, { Component } from 'react';
import RegistrationForm from './RegistrationForm';
import { connect } from 'react-redux';
import { registerUser } from '../actions/index';
import { Redirect } from 'react-router';

class RegistrationPage extends Component {
	constructor() {
		super();
		this.submit = this.submit.bind(this);
	}

	submit(values) {
		const { dispatch } = this.props;
		values.role = "MEMBER";
		dispatch( registerUser(values) );
	}
	render() {
		return (
			<div>
				{this.props.authenticated ? <Redirect to='/dashboard' /> : <RegistrationForm onSubmit={this.submit}/>}	
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

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationPage);

