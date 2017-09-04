import axios from 'axios';
import config from '../config/api.config';
import Cookies from 'universal-cookie';

const cookie = new Cookies();
const API_URL = config.API_URL;

export default function(resource, initial_state = {}) {

	var object = {};

	object.actions = {

		// Read a single resource
		[`REQUEST_${resource}`]: `REQUEST_${resource}`,
		[`${resource}_SUCCESS`]: `${resource}_SUCCESS`,
		[`${resource}_FAILURE`]: `${resource}_FAILURE`,
		[`${resource}_REDIRECT`]: `${resource}_REDIRECT`,

		// Update a single resource
		[`REQUEST_UPDATE_${resource}`]: `REQUEST_UPDATE_${resource}`,
		[`UPDATE_${resource}_SUCCESS`]: `UPDATE_${resource}_SUCCESS`,
		[`UPDATE_${resource}_FAILURE`]: `UPDATE_${resource}_FAILURE`,
		[`UPDATE_${resource}_RESET`]: `UPDATE_${resource}_RESET`

	}

	object.actionCreators = {

		[`request${resource}`]: () => {
			return {
				type: object.actions[`REQUEST_${resource}`]
			}	
		},

		[`${resource}Success`]: (item) => {
			return {
				type: object.actions[`${resource}_SUCCESS`],
				payload: item 
			}	
		},

		[`fetch${resource}`]: (id) => {
			return (dispatch) => {
				dispatch(object.actionCreators[`request${resource}`]);
				axios.get(`${API_URL}/${resource}/${id}`, {
					headers: { 'Authorization': cookie.get('token') }
				})
				.then((res) => {
					console.log(res)
					const mResource = res.data;
					dispatch(object.actionCreators[`${resource}Success`](mResource));
				})
			}
		},

		[`requestUpdate${resource}`]: () => {
			return {
				type: object.actions[`REQUEST_UPDATE_${resource}`]
			}
		},

		[`update${resource}Success`]: (updatedResource) => {
			return {
				type: object.actions[`UPDATE_${resource}_SUCCESS`],
				payload: updatedResource 
			}
		},

		[`update${resource}Failure`]: (error) => {
			return {
				type: object.actions[`UPDATE_${resource}_FAILURE`],
				payload: error 
			}
		},


		[`update${resource}`]: (id, updates) => {
			return (dispatch) => {
				dispatch(object.actionCreators[`requestUpdate${resource}`]())
				axios.patch(`${API_URL}/${resource}/${id}`, updates)
							.then((res) => {
								const updatedResource= res.data;
								dispatch(object.actionCreators[`update${resource}Success`](updatedResource))
							})
							.catch((error) => {
								dispatch(object.actionCreators[`update${resource}Failure`]())
							})	
			}
		}

	};

	object.reducer = (state = initial_state, action) => {
		switch(action.type) {

			// Read a single resource
			case object.actions[`REQUEST_${resource}`]:
				return { ...state, isFetching: true }
			case object.actions[`${resource}_SUCCESS`]:
				return { ...state, isFetching: false, [`${resource}`]: action.payload, resourceRetrieved: true }
			case object.actions[`${resource}_FAILURE`]: 
				return { ...state, isFetching: false, error: action.payload }
			case object.actions[`${resource}_REDIRECT`]: 
				return { ...state, profileRetrieved: false }

			// Update a single resource
			case object.actions[`REQUEST_UPDATE_${resource}`]:
				return { ...state, isFetching: true }
			case object.actions[`UPDATE_${resource}_SUCCESS`]:
				return { ...state, isFetching: false, [`${resource}`]: action.payload, resourceRetrieved: true }
			case object.actions[`UPDATE_${resource}_FAILURE`]:
				return { ...state, isFetching: false, error: action.payload }
			case object.actions[`UPDATE_${resource}_RESET`]:
				return { ...state, isFetching: false, resourceRetrieved: false }

			default:
				return state;
		}
	}
	return object;
}

/*

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

*/

