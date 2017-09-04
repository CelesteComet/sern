import { REQUEST_REGISTER,  
         REGISTER_SUCCESS,
         REGISTER_FAILURE,
         REQUEST_LOGIN,
         LOGIN_SUCCESS,
         LOGIN_FAILURE,
         LOGIN_RESET,
         REQUEST_AUTH_USER,
         AUTH_USER_SUCCESS,
         AUTH_USER_FAILURE,
         UNAUTH_USER
         /*
       	 REQUEST_PROFILE, 
       	 PROFILE_SUCCESS, 
       	 PROFILE_FAILURE,
       	 PROFILE_REDIRECT
       	 */ } from '../actions/index';

const INITIAL_STATE = { error: '', message: '', content: '', isFetching: '', authenticated: false };

export default function (state = INITIAL_STATE, action) {
	switch(action.type) {
		case REQUEST_REGISTER:
			return { ...state, isFetching: true }
		case REGISTER_SUCCESS:
			return { ...state, isFetching: false }
		case REGISTER_FAILURE:
			return { ...state, isFetching: false, error: action.payload }
		case REQUEST_LOGIN:
			return { ...state, isFetching: true, authenticated: false }
		case LOGIN_SUCCESS:
			return { ...state, isFetching: false, authenticated: true, user: action.payload }
		case LOGIN_FAILURE: 
			return { ...state, isFetching: false, authenticated: false, error: action.payload, message: "Username or Password is incorrect" }
		case LOGIN_RESET:
			return { ...state, error: '', message: '', user: null }
		case AUTH_USER_SUCCESS: 
			return { ...state, authenticated: true, user: action.payload }
		case UNAUTH_USER: 
			return { ...state, authenticated: false }
		/*
		case REQUEST_PROFILE:
			return { ...state, isFetching: true }
		case PROFILE_SUCCESS:
			return { ...state, isFetching: false, profile: action.payload, profileRetrieved: true }
		case PROFILE_FAILURE: 
			return { ...state, isFetching: false, error: action.payload }
		case PROFILE_REDIRECT: 
			return { ...state, profileRetrieved: false }
		*/
		default:
			return state;

	}
}