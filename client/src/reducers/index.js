import { combineReducers } from 'redux';  
import { reducer as formReducer } from 'redux-form';  
import authReducer from './authReducer';
import venueReducer from './venue.reducer';
import profileReducer from './profile.reducer';
import paginationReducer from './pagination.reducer';
import creator from '../actions/onestop';


var profile = creator('Profile', {Profile: null});
export const profileActions = profile.actionCreators;


const rootReducer = combineReducers({  
  auth: authReducer,
  venue: venueReducer,
  form: formReducer,
  //pagination: paginationReducer,
  ProfileState: profile.reducer
});

export default rootReducer;  