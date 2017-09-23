import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import venueReducer from './venueReducer';

import { loginModalReducer } from '../components/LoginModals';

export default combineReducers({
  auth: authReducer,
  venue: venueReducer,
  form: formReducer,
  loginModal: loginModalReducer.loginModalReducer
});