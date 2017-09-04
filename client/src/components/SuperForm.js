import React, { Component } from 'react';
import { connect } from 'react-redux';
import RequireAuth from './RequireAuth';
// bring out
import { profileActions } from '../reducers';

class SuperForm extends Component {
	constructor() {
		super();
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount() {
		const { dispatch } = this.props;
		if (this.props.user) {
			dispatch(profileActions.fetchProfile(this.props.user.user.id));
		}
	}

	handleSubmit(e) {
		e.preventDefault();
		function getFormData($form){
		    var unindexed_array = $form.serializeArray();
		    var indexed_array = {};

		    $.map(unindexed_array, function(n, i){
		        indexed_array[n['name']] = n['value'];
		    });

		    return indexed_array;
		}
		const data = getFormData($(e.target));
		const { dispatch } = this.props;
		const id = this.props.profile.id;
		dispatch(profileActions.updateProfile(id, data)); 
	}

	render() {
		const profile = this.props.profile;
		return (
			<RequireAuth>
				<div>
					{ profile && 
						<form onSubmit={ this.handleSubmit }>
							<label htmlFor='company_name'>Company Name</label>
							<input type='text' name='company_name' ref={ (input) => {this.company_name_input = input} } defaultValue={profile.company_name} />
							<label htmlFor='performance_type'>Performance Type</label>
							<input type='text' name='performance_type' ref={ (input) => {this.performance_type_input = input} } defaultValue={profile.performance_type} />
							<input type='submit' value='Save' />
						</form>
					}
				</div>
			</RequireAuth>
		);
	}
}

const mapStateToProps = (state) => {
	return { 
		user: state.auth.user,
		authenticated: state.auth.authenticated,
		profile: state.ProfileState.Profile
	}
}

SuperForm = connect(mapStateToProps)(SuperForm);

export default SuperForm;