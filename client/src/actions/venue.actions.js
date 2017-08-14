import axios from 'axios';
export const REQUEST_VENUES = 'REQUEST_VENUES',
						 VENUES_SUCCESS = 'VENUES_SUCCESS',
						 VENUES_FAILURE = 'VENUES_FAILURE';

const API_URL = 'https://sernstarter.herokuapp';

axios.defaults.headers.post['Access-Control-Allow-Methods'] = 'PATCH, DELETE, POST, GET, OPTIONS';

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
		console.log(venue);
		axios.post(`${API_URL}/venues`, venue)
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
				dispatch(venueSuccess(venue));
			})
			.catch((err) => {
				dispatch(venueFailure(err));
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