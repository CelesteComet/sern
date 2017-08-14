import axios from 'axios';
import Cookies from 'universal-cookie';

const cookie = new Cookies();

const API_URL = 'https://sernstarter.herokuapp/api';

// Register User
export const REQUEST_REGISTER = 'REQUEST_REGISTER',
						 REGISTER_SUCCESS = 'REGISTER_SUCCESS',
						 REGISTER_FAILURE = 'REGISTER_FAILURE';

export function requestRegister(credentials) {
	return {
		type: REQUEST_REGISTER,
		payload: credentials
	}
}

export function registerSuccess(user) {
	return {
		type: REGISTER_SUCCESS,
		payload: user
	}
}

export function registerFailure(err) {
	return {
		type: REGISTER_FAILURE,
		payload: err
	}
}

export function registerUser({username, password}) {
	const credentials = {username, password};
	return function(dispatch) {
		dispatch(requestRegister(credentials));
		axios.post(`${API_URL}/register`, {... credentials, role: 'MEMBER'})
			.then((response) => {
				const user = response.data;
				const { username, password } = user;
				dispatch(registerSuccess(user));
				dispatch(loginUser({username, password: credentials.password}))
			})
			.catch((error) => {
				dispatch(registerFailure(error));
			})
	}
}
						 
// Login User
export const REQUEST_LOGIN = 'REQUEST_LOGIN',
						 LOGIN_SUCCESS = 'LOGIN_SUCCESS',
						 LOGIN_FAILURE = 'LOGIN_FAILURE';

export function requestLogin(credentials) {
	return {
		type: REQUEST_LOGIN,
		payload: credentials	
	}
}

export function loginSuccess(user) {
	return {
		type: LOGIN_SUCCESS,
		payload: user
	}
}

export function loginFailure(error) {
	return {
		type: LOGIN_FAILURE,
		payload: error
	}
}

export function loginUser({ username, password}) { // Same as {username: username, password: password}
	return function(dispatch) {
		const credentials = {username, password};
		dispatch(requestLogin(credentials));
		axios.post(`${API_URL}/login`, {username, password})
			.then((response) => {
				const user = response.data;
				cookie.set('token', user.token, { path: '/'});
				dispatch(loginSuccess(user));
			})
			.catch((error) => {
				console.log(error);
				dispatch(loginFailure());	
			});
	}
}

// Authorize and Logout User
export const AUTH_USER = 'AUTH_USER',
						 UNAUTH_USER = 'UNAUTH_USER';

export function authUser() {
	return {
		type: AUTH_USER
	}
}

export function unAuthUser() {
	return {
		type: UNAUTH_USER 
	}
}

export function logoutUser() {
	return function(dispatch) {
		console.log(dispatch)
		cookie.remove('token', {path: '/'});
		dispatch(unAuthUser());
	}
}

// Profile
export const REQUEST_PROFILE = 'REQUEST_PROFILE',
						 PROFILE_SUCCESS = 'PROFILE_SUCCESS',
						 PROFILE_FAILURE = 'PROFILE_FAILURE';

export function requestProfile() {
	return {
		type: REQUEST_PROFILE,
	}
}

export function profileSuccess(res) {
	const user = res.data;
	return {
		type: PROFILE_SUCCESS,
		payload: user 
	}
}

export function profileFailure(err) {
	return {
		type: PROFILE_FAILURE,
		payload: err 
	}
}

export function getProfile() {
	return function(dispatch) {
		dispatch(requestProfile);
		axios.get(`${API_URL}/profile`, {
      headers: { 'Authorization': cookie.get('token') }
    })
    .then((user) => {
    	dispatch(profileSuccess(user));
    })
    .catch((err) => {
    	console.log(err);
    })
	}
}