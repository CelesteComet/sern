import React, { Component } from 'react';
import { connect } from 'react-redux';
import { registerUser } from '../actions/index';
import { Redirect } from 'react-router';

class RegistrationForm extends Component {
  constructor() {
    super();
    this.state = {}
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { dispatch } = this.props;
    let stateValues = this.state;
    let newUserData = {
      username: stateValues.username,
      password: stateValues.password
    }
    dispatch(registerUser(newUserData));
  }

  handleChange(event) {
    var partialState = {};
    const name = event.target.name;
    const value = event.target.value;
    partialState[name] = value;
    this.setState(partialState);
  }


  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <h1>Register New User</h1>
        <div className="form-group">
          <label htmlFor='name' >Username</label>
          <input type='text' className="form-control" name='username' onChange={ this.handleChange } value={this.state.value}/>
        </div>
        <div className="form-group">
          <label htmlFor='name' >Password</label>
          <input type='text' className="form-control" name='password' onChange={ this.handleChange } value={this.state.value}/>
        </div>
         <div>
           <button type="submit" className="btn btn-default">Submit</button>
         </div>
         { this.props.state.auth.authenticated && 
          <Redirect to={'/dashboard'} />
         }
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return { state }
}

const mapDispatchToProps = (dispatch) => {
  return { dispatch }
}

RegistrationForm = connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);

export default RegistrationForm;