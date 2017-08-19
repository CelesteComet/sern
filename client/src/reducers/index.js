import { combineReducers } from 'redux';  
import { reducer as formReducer } from 'redux-form';  
import authReducer from './authReducer';
import venueReducer from './venue.reducer';
import profileReducer from './profile.reducer';

const rootReducer = combineReducers({  
  auth: authReducer,
  venue: venueReducer,
  form: formReducer,
  profile: profileReducer
});

export default rootReducer;  