import React from 'react';  
import ReactDOM from 'react-dom';  

// Redux
import { Provider } from 'react-redux';  

// React Router
import { BrowserRouter, Route, Link } from 'react-router-dom';  

// Components
import HomePage from './components/HomePage';
import RegistrationForm from './components/RegistrationForm';
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard';
import VenueList from './components/VenueList';
import VenueDetail from './components/VenueDetail';
import RequireAuth from './components/RequireAuth';
import SimpleForm from './components/SimpleForm';
import EditForm from './components/EditForm';
import SuperForm from './components/SuperForm';

// Redux Store
import store from './config/store.config';

// Cookie
import cookie from './config/cookie.config';

import { authUser } from './actions/index';


// Check Login Status
let token = cookie.get('token');
if (token) {  
  store.dispatch(authUser())
}

window.dispatch = store.dispatch;

ReactDOM.render(  
  <Provider store={store}>
    <BrowserRouter>
    	<div>
	    	<Route path='/' component={ HomePage }/>
	    	<div className='page-container'>
		    	<Route exact path='/register' component={RegistrationForm} />
		    	<Route exact path='/dashboard' component={SuperForm} />
		    	<Route exact path='/login' component={LoginPage} />
		    	<Route exact path='/venues' component={VenueList} />
		    	<Route exact path='/venues/:id' component={VenueDetail} />
		    	<Route exact path='/venues/create' component={SimpleForm} />
		    	<Route exact path='/venues/edit' component={EditForm} />
		    </div>
	    </div>
    </BrowserRouter>
  </Provider>,
  document.querySelector('.wrapper'));