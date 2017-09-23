import React, { Component } from 'react';
import WizardFormSecondPage from './WizardFormSecondPage';
import { connect } from 'react-redux';
import { createVenue } from '../../actions/venueActions';
import { reduxForm } from 'redux-form';

// List of Pages To Be Rendered In Form
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import ThirdPage from './ThirdPage';
import ForthPage from './ForthPage';

//onSubmit={ (values) => {dispatch(createVenue(values, history))} }

class WizardForm extends Component {
  constructor() {
    super();
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.state = {
      page: 0
    }
  }

  nextPage() { this.setState({ page: this.state.page + 1})}
  previousPage() { this.setState({ page: this.state.page - 1})}

  render() {

    const pages =  [
      <FirstPage onSubmit={ this.nextPage } />,
      <SecondPage onSubmit={ this.nextPage } previous={ this.previousPage } />,
      <ThirdPage onSubmit={ this.nextPage } previous={ this.previousPage } />,
      <ForthPage onSubmit={ this.nextPage } previous={ this.previousPage } />
    ]

    const { page } = this.state;
    const { onSubmit, fields, dispatch, history } = this.props;

    return (
      <div>
        { pages[page] }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { state }
}

WizardForm = connect(mapStateToProps)(WizardForm);

export default reduxForm({
  form: 'createVenueForm'
})(WizardForm);

