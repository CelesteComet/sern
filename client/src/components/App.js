import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { fetchUser } from '../actions/authActions';

import Header from './Header';
import Landing from './Landing';
import EditPage from './EditPage';
import CreatePage from './CreatePage';
import EventListingPage from './EventListingPage';
import ItemDetail from './ItemDetail';

class App extends Component {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch( fetchUser() );

    // for 
    $(".button-collapse").sideNav();
    
  }

  render() {
    const { dispatch } = this.props;
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path='/' component={ Landing } />
            <Route exact path='/listings' component={ EventListingPage } />
            <Route exact path='/venues/:id' component={ ItemDetail } />
            <Route exact path='/venues/:id/edit' component={ EditPage } />
            <Route exact path='/venues/create' component={ CreatePage } />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect()(App);