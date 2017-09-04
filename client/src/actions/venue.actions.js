import axios from 'axios';
import config from '../config/api.config';
export const REQUEST_VENUES = 'REQUEST_VENUES',
						 VENUES_SUCCESS = 'VENUES_SUCCESS',
						 VENUES_FAILURE = 'VENUES_FAILURE';

import Cookies from 'universal-cookie';
const cookie = new Cookies();


const API_URL = config.API_URL;

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

export function fetchVenues(page) {
	console.log("FETCHING " + page)
	return function(dispatch) {
		dispatch(requestVenues());
		axios.get(`${API_URL}/venues?page=${page}`)
			.then((res) => {
				const venues = res.data;
				dispatch(venuesSuccess(venues));
			})
			.catch((err) => {
				dispatch(venuesFailure(err));
			})
	}
}

// For Pagination

export function venuePageUp() {
	return {
		type: 'PAGE_UP'
	}
}

export function venuePageDown() {
	return {
		type: 'PAGE_DOWN'
	}
}


export const REQUEST_CREATE_VENUE = 'REQUEST_CREATE_VENUE',
						 CREATE_VENUE_SUCCESS = 'CREATE_VENUE_SUCCESS',
						 CREATE_VENUE_FAILURE = 'CREATE_VENUE_FAILURE',
						 CREATE_VENUE_REDIRECT = 'CREATE_VENUE_REDIRECT';

export function requestCreateVenue() {
	return {
		type: REQUEST_CREATE_VENUE
	}
}

export function createVenueSuccess(venue) {
	return {
		type: CREATE_VENUE_SUCCESS,
		payload: venue
	}
}

export function createVenueFailure(err) {
	return {
		type: CREATE_VENUE_FAILURE,
		payload: err
	}
}

export function createVenueRedirect() {
	return {
		type: CREATE_VENUE_REDIRECT
	}
}

export function createVenue(venue) {
	return function(dispatch) {
		dispatch(requestCreateVenue());
		axios.post(`${API_URL}/venues`, venue, {
			headers: { 'Authorization': cookie.get('token') }
		})
			.then((res) => {
				const m_venue = res.data;
				dispatch(createVenueSuccess(m_venue));
				dispatch(createVenueRedirect());
			})
			.catch((err) => {
				dispatch(createVenueFailure(err));
			})
	}	
}

export const REQUEST_VENUE = 'REQUEST_VENUE',
						 VENUE_SUCCESS = 'VENUE_SUCCESS',
						 VENUE_FAILURE = 'VENUE_FAILURE';

export function requestVenue() {
	return {
		type: REQUEST_VENUE
	}
}

export function venueSuccess(venue) {
	return {
		type: VENUE_SUCCESS,
		payload: venue
	}
}

export function venueFailure(err) {
	return {
		type: VENUE_FAILURE,
		payload: err
	}
}

export function fetchVenue(venueId) {
	return function(dispatch) {
		dispatch(requestVenue());
		axios.get(`${API_URL}/venues/${venueId}`)
			.then((res) => {
				const venue = res.data;
				console.log(venue);
				dispatch(venueSuccess(venue));
			})
			.catch((err) => {
				dispatch(venueFailure(err));
			})
	}
}

export const REQUEST_UPDATE_VENUE = 'REQUEST_UPDATE_VENUE',
						 UPDATE_VENUE_SUCCESS = 'UPDATE_VENUE_SUCCESS',
						 UPDATE_VENUE_FAILURE = 'UPDATE_VENUE_FAILURE',
						 UPDATE_VENUE_RESET = 'UPDATE_VENUE_RESET';

export function requestUpdateVenue() {
	return {
		type: REQUEST_UPDATE_VENUE
	}
}						 

export function updateVenueSuccess(venue) {
	return {
		type: UPDATE_VENUE_SUCCESS,
		payload: venue
	}
}

export function updateVenueFailure(error) {
	return {
		type: UPDATE_VENUE_FAILURE,
		payload: error
	}
}

export function updateVenue(venueId, updates) {
	return function(dispatch) {
		dispatch(requestUpdateVenue());
		axios.patch(`${API_URL}/venues/${venueId}`, updates)
			.then((res) => {
				const venue = res.data;
				dispatch(updateVenueSuccess(venue));
			})
			.catch((error) => {
				dispatch(updateVenueFailure(error));
			})	
	}
}

export const REQUEST_DELETE_VENUE = 'REQUEST_DELETE_VENUE',
						 DELETE_VENUE_SUCCESS = 'DELETE_VENUE_SUCCESS',
						 DELETE_VENUE_FAILURE = 'DELETE_VENUE_FAILURE',
						 DELETE_VENUE_REDIRECT = 'DELETE_VENUE_REDIRECT';

export function requestDeleteVenue() {
	return {
		type: REQUEST_DELETE_VENUE 
	}
}

export function deleteVenueSuccess(venue) {
	return {
		type: DELETE_VENUE_SUCCESS,
		payload: venue
	}
}

export function deleteVenueFailure(err) {
	return {
		type: DELETE_VENUE_FAILURE,
		payload: err
	}
}

export function deleteVenueRedirect() {
	return {
		type: DELETE_VENUE_REDIRECT
	}
}

export function deleteVenue(venueId) {
	return function(dispatch) {
		dispatch(requestDeleteVenue());
		axios.delete(`${API_URL}/venues/${venueId}`)
			.then((res) => { // res.data => "DESTROYED" <-- change
				dispatch(deleteVenueSuccess(res));
				dispatch(deleteVenueRedirect());
			})
			.catch((err) => {
				dispatch(deleteVenueFailure(err));
			})
	}
}