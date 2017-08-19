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

// Redux Store
import store from './config/store.config';

// Cookie
import cookie from './config/cookie.config';

import { AUTH_USER } from './actions/index';

// Check Login Status
let token = cookie.get('token');
if (token) {  
  store.dispatch({type: AUTH_USER})
}

ReactDOM.render(  
  <Provider store={store}>
    <BrowserRouter>
    	<div>
	    	<Route path='/' component={ HomePage }/>
	    	<div className='page-container'>
		    	<Route path='/register' component={RegistrationForm} />
		    	<Route path='/dashboard' component={Dashboard} />
		    	<Route path='/login' component={LoginPage} />
		    	<Route exact path='/venues' component={VenueList} />
		    	<Route path='/venues/:id' component={VenueDetail} />
		    	<Route path='/venues/create' component={SimpleForm} />
		    	<Route path='/venues/edit' component={EditForm} />
		    </div>
	    </div>
    </BrowserRouter>
  </Provider>,
  document.querySelector('.wrapper'));