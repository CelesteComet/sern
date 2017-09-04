import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import { connect } from 'react-redux';
import { createVenue } from '../actions/venue.actions';
import { Redirect } from 'react-router';
import RequireAuth from './RequireAuth';

class SimpleForm extends Component {
	constructor() {
		super();
		this.state = {};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleSubmit(event) {
		event.preventDefault();
		const { dispatch } = this.props;
		dispatch(createVenue(this.state));
	}

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}


	render() {
		return (
			<RequireAuth>
				<form onSubmit={ this.handleSubmit }>
					<div className="form-group">
						<label htmlFor='name' >Name</label>
						<input type='text' className="form-control" name='name' onChange={ this.handleChange } value={this.state.value}/>
					</div>
					<div className="form-group">
						<label htmlFor='name' >Location</label>
						<input type='text' className="form-control" name='location' onChange={ this.handleChange } value={this.state.value}/>
					</div>
					<div className="form-group">
						<DateRangePicker
						  startDate={this.state.startDate} // momentPropTypes.momentObj or null,
						  endDate={this.state.endDate} // momentPropTypes.momentObj or null,
						  onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
						  focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
						  onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
						/>
					</div>
					 <div>
				  	 <button type="submit" className="btn btn-default">Submit</button>
				   </div>
				   { this.props.state.venue.venueCreated && 
				   	<Redirect to={'/venues'} />
				   }
				</form>
			</RequireAuth>
		);
	}
}

const mapStateToProps = (state) => {
	return { state }
}

const mapDispatchToProps = (dispatch) => {
	return { dispatch }
}

SimpleForm = connect(mapStateToProps, mapDispatchToProps)(SimpleForm);

export default SimpleForm;