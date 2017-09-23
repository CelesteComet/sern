import React, { Component } from 'react';
import WizardForm from './WizardForm';
/*
const venueSchema = new Schema({
  title: String,
  location: String,
  geolocation: Object,
  description: String,
  _user: { type: Schema.Types.ObjectId, ref: 'User' },
  dates: [venueDateSchema],
  images: [String]
});
*/

class CreatePage extends Component {

  render() {

    const fields = [
      'title',
      'description',
      'location',
      'dates'
    ];

    const { history } = this.props;

    return (
      <div className='container'>
        <WizardForm fields={ fields } history={ history } />
      </div>
    );
  }
}

export default CreatePage;