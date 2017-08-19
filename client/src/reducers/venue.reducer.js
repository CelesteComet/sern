import {
	REQUEST_VENUES,
	VENUES_SUCCESS,
	VENUES_FAILURE,
	REQUEST_VENUE,
	VENUE_SUCCESS,
	VENUE_FAILURE,
	REQUEST_UPDATE_VENUE,
	UPDATE_VENUE_SUCCESS,
	UPDATE_VENUE_FAILURE,
	UPDATE_VENUE_RESET,
	REQUEST_DELETE_VENUE,
	DELETE_VENUE_SUCCESS,
	DELETE_VENUE_FAILURE,
	DELETE_VENUE_REDIRECT,
	REQUEST_CREATE_VENUE,
	CREATE_VENUE_SUCCESS,
	CREATE_VENUE_FAILURE,
	CREATE_VENUE_REDIRECT
} from '../actions/venue.actions';

const INITIAL_STATE = {
	isFetching: false,
	venues: null,
	venue: null,
	error: '',
	venueDeleted: false, // flag to check if the delete has gone through
	venueCreated: false // flag to check if the create has gone through
}

export default function(state = INITIAL_STATE, action) {
	switch(action.type) {
		case REQUEST_VENUES: 
			return { ...state, isFetching: true }
		case VENUES_SUCCESS:
			return { ...state, isFetching: false, venues: action.payload }
		case VENUES_FAILURE:
			return { ...state, isFethcing: false, error: action.payload }
		case REQUEST_VENUE: 
			return { ...state, isFetching: true, venue: null }
		case VENUE_SUCCESS:
			return { ...state, isFetching: false, venue: action.payload }
		case VENUE_FAILURE:
			return { ...state, isFetching: false, error: action.payload }
		case REQUEST_UPDATE_VENUE:
			return { ...state, isFetching: true }
		case UPDATE_VENUE_SUCCESS:
			return { ...state, isFetching: false, venue: action.payload }
		case UPDATE_VENUE_FAILURE:
			return { ...state, isFetching: false, error: action.payload }
		case UPDATE_VENUE_RESET:
			return { ...state, venue: null }
		case REQUEST_DELETE_VENUE:
			return { ...state, isFetching: true }
		case DELETE_VENUE_SUCCESS:
			return { ...state, isFetching: false, venueDeleted: true }
		case DELETE_VENUE_FAILURE:
			return { ...state, isFetching: false, error: action.payload }
		case DELETE_VENUE_REDIRECT:
			return { ...state, isFetching: false, venueDeleted: false }
		case REQUEST_CREATE_VENUE:
			return { ...state, isFetching: true }
		case CREATE_VENUE_SUCCESS:
			return { ...state, isFetching: false, venue: action.payload, venueCreated: true }
		case CREATE_VENUE_FAILURE: 
			return { ...state, isFetching: false, error: action.payload }
		case CREATE_VENUE_REDIRECT:
			return { ...state, venueCreated: false }
		default:
			return state
	}
}