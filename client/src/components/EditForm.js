import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import { connect } from 'react-redux';
import { updateVenue } from '../actions/venue.actions';
import { Redirect } from 'react-router';

class EditForm extends Component {
	constructor() {
		super();
		this.state = {};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleSubmit(event) {
		event.preventDefault();
		const { dispatch } = this.props;
		const id = this.props.state.venue.venue.id;
		dispatch(updateVenue(id, this.state));
	}

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}


	render() {
		return (
			<form onSubmit={ this.handleSubmit }>
				<h1>Edit</h1>
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
		);
	}
}

const mapStateToProps = (state) => {
	return { state }
}

const mapDispatchToProps = (dispatch) => {
	return { dispatch }
}

EditForm = connect(mapStateToProps, mapDispatchToProps)(EditForm);

export default EditForm;