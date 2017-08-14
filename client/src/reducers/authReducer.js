import { REQUEST_REGISTER,  
         REGISTER_SUCCESS,
         REGISTER_FAILURE,
         REQUEST_LOGIN,
         LOGIN_SUCCESS,
         LOGIN_FAILURE,
         AUTH_USER,
         UNAUTH_USER,
       	 REQUEST_PROFILE, 
       	 PROFILE_SUCCESS, 
       	 PROFILE_FAILURE } from '../actions/index';

const INITIAL_STATE = { error: '', message: '', content: '', isFetching: '', authenticated: false };

export default function (state = INITIAL_STATE, action) {
	switch(action.type) {
		case REQUEST_REGISTER:
			return { ...state, isFetching: true }
		case REGISTER_SUCCESS:
			return { ...state, isFetching: false, authenticated: true }
		case REGISTER_FAILURE:
			return { ...state, isFetching: false, authenticated: false }
		case REQUEST_LOGIN:
			return { ...state, isFetching: true, authenticated: false }
		case LOGIN_SUCCESS:
			return { ...state, isFetching: false, authenticated: true }
		case LOGIN_FAILURE: 
			return { ...state, isFetching: false, authenticated: false, error: action.payload }
		case AUTH_USER: 
			return { ...state, authenticated: true }
		case UNAUTH_USER: 
			return { ...state, authenticated: false }
		case REQUEST_PROFILE:
			return { ...state, isFetching: true }
		case PROFILE_SUCCESS:
			return { ...state, isFetching: false, user: action.payload }
		case PROFILE_FAILURE: 
			return { ...state, isFetching: false, error: action.payload }
		default:
			return state;
	}
}