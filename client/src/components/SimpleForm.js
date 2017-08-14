import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import { connect } from 'react-redux';
import { createVenue } from '../actions/venue.actions';
import { Redirect } from 'react-router';

class FormLabelInput extends Component {
	constructor() {
		super();
		this.state = {
			value: ''
		}
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		this.setState({
			value: e.target.value
		})
	}

	render() {
		let props = this.props;
		return (
			<div className="form-group">
				<label htmlFor={ props.name }>{ props.label }</label>
				<input type={ props.type } className="form-control" name={ props.name } onChange={ this.handleChange } value={this.state.value}/>
			</div>
		);
	}
}

FormLabelInput.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string
};

class SimpleForm extends Component {
	constructor() {
		super();
		this.state = {}
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleSubmit(event) {
		event.preventDefault();
		const { dispatch } = this.props;
		let stateValues = this.state;
		let newVenueData = {
			name: stateValues.name,
			location: stateValues.location,
			startDate: stateValues.startDate,
			endDate: stateValues.endDate
		}
		dispatch(createVenue(newVenueData));
	}

	handleChange(event) {
		var partialState = {};
		const name = event.target.name;
		const value = event.target.value;
		partialState[name] = value;
		this.setState(partialState);
	}


	render() {
		return (
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