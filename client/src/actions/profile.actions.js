import axios from 'axios';
import config from '../config/api.config';

const resource = 'PROFILE';
const API_URL = config.API_URL;

var actionTypes = {
	REQUEST_RESOURCE: `REQUEST_${resource}`,
	RESOURCE_SUCCESS: `${resource}_SUCCESS`,
	RESOURCE_FAILURE: `${resource}_FAILURE`
}
/*
export const REQUEST_RESOURCE = `REQUEST_${resource}`,
						 RESOURCE_SUCCESS = `${resource}_SUCCESS`,
						 RESOURCE_FAILURE = `${resource}_FAILURE`,
*/

var actionCreators = {};

actionCreators[`request${resource}`] = function() {
	return {
		type: actionTypes.REQUEST_RESOURCE 
	}
}

actionCreators[`${resource}Success`] = function(resources) {
	return {
		type: actionTypes.RESOURCE_SUCCESS,
		payload: resources
	}
}

actionCreators[`${resource}Failure`] = function(error) {
	return {
		type: actionTypes.RESOURCE_FAILURE,
		payload: error
	}
}

actionCreators[`fetch${resource}`] = function() {
	return function(dispatch) {
		dispatch(actionCreators[`request${resource}`]);
	}
}

exports.actionCreators = actionCreators;
exports.actionTypes = actionTypes;

/*
export function requestVenues() {
	return {
		type: REQUEST_VENUES
	}
}

export function venuesSuccess(venues) {
	return {
		type: VENUES_SUCCESS,
		payload: venues
	}
}

export function venuesFailure(err) {
	return {
		type: VENUES_FAILURE,
		payload: err
	}
}


export function fetchVenues() {
	return function(dispatch) {
		dispatch(requestVenues());
		axios.get(`${API_URL}/venues`)
			.then((res) => {
				const venues = res.data;
				dispatch(venuesSuccess(venues));
			})
			.catch((err) => {
				dispatch(venuesFailure(err));
			})
	}
}
*/