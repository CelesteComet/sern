import React, { Component } from 'react';
import { reduxForm, Field, change} from 'redux-form';
import GoogleMap from '../GoogleMaps/GoogleMap';
import NextPrevious from './NextPrevious';

class ThirdPage extends Component {
  constructor() {
    super();
    this.state = {lat: -22.984667, lng: -43.198593200000005} // Ipanema
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { dispatch } = this.props;
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({ address: e.target.value }, (res) => {
      var newLocation = {lat: res[0].geometry.location.lat(), lng: res[0].geometry.location.lng()}
      this.setState(newLocation);
      dispatch(change('createVenueForm', 'geolocation', newLocation));
    })
  }

  render() {
    const { handleSubmit, previous } = this.props;
    return (
      <div>
        <h5>Where is your event located?</h5>
        <div className='row'>
          <div className='col s6'>
            <div className="input-field">
              <Field name='location' id='location' placeholder='Ipanema' component='input' onChange={ this.handleChange } autoFocus/>
            </div>
            <NextPrevious next={ handleSubmit } previous={ previous } />
          </div>
          <div className='col s6'>
            <div>
              <GoogleMap 
                containerElement={
                  <div style={{ height: '347px' }} />
                }
                mapElement={
                  <div style={{ height: '100%' }} />
                }
                geolocation={this.state}
                content={'Event Here'}
              />
            </div>
          </div>
        </div>

      </div>
    );
  }
}



     

export default reduxForm({
  form: 'createVenueForm',  //Form name is same
  destroyOnUnmount: false
})(ThirdPage)