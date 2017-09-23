import axios from 'axios';
import { FETCH_USER, LOGOUT } from './types';

export const fetchUser = () => {
  return function(dispatch) {
    axios.get('/api/current_user')
      .then(res => dispatch({ type: FETCH_USER, payload: res.data }));
  }
};

export const logout = () => {
  return function(dispatch) {
    axios.get('/api/logout')
      .then(res => dispatch({ type: LOGOUT, payload: res.data }));
  }
};


