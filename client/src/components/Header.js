import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout as logoutAction }  from '../actions/authActions';
import { Link } from 'react-router-dom';
import { LoginModal, loginModalActions } from './LoginModals';

class Header extends Component {

  constructor() {
    super();
    this.state = {
      modalOpen: false
    }
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({
      modalOpen: !this.state.modalOpen
    })
  }

  renderAuthButton() {
    const { logout, auth } = this.props;

    if (this.props.auth) {
      return <li><a className="waves-effect waves-light btn" onClick={ logout }>LOG OUT</a></li>
    }

    return <li><a href="#modal1" className="waves-effect waves-light btn modal-trigger" onClick={ this.toggleModal }>LOG IN</a></li>
  }

  render() {
    
    const { modalOpen } = this.state;

    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            <Link to={'/'} href="#!" className="brand-logo"></Link>
            <ul className="right hide-on-med-and-down">
              <li><Link to={'/listings'}>Your Events</Link></li>
              { this.renderAuthButton() }

            </ul>
          </div>
        </nav>
        <LoginModal modalOpen={ modalOpen } closeModal={ this.toggleModal } />
      </div>

    );
  }
}

const mapStateToProps = ({ auth, loginModal }) => {
  return { auth }
}

const mapDispatchToProps = (dispatch) => {
  return { 
    logout: () => { dispatch(logoutAction()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);