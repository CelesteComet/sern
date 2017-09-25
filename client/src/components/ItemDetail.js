import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchVenue } from '../actions/venueActions';

import ImageCarousel from './ImageCarousel';
import GoogleMap from './GoogleMaps/GoogleMap';
import UpcomingTimes from './UpcomingTimes';

class ItemDetail extends Component {

  componentDidMount() {
    const { dispatch, match } = this.props;
    dispatch( fetchVenue(match.params.id) );
  }

  render() {
    const { venue } = this.props;
    
    if (!venue) {
      return <div>LOADING</div>
    }
    const { title, images, description, _user, location, geolocation, dates, blurbs } = venue;

    return (
      <div className='container'>
        <div className='row'>
          <div className='col s8 m6'>
            <div className='row'>

              <h3>{ title }</h3>
              <p>{ location } &bull; { description }</p> 
              <div className='divider'></div>

            </div>
            <div className='row'>
              <p>Hosted By <a>{ _user.fullName }</a></p>    
              { blurbs.map(({ heading, content }, index) => {
                return (
                  <div key={ index }>
                    <div className='divider'></div>
                    <h5>{ heading }</h5>
                    <p style={{'paddingBottom': '20px'}} >{ content }</p>
                  </div>
                );
              })}          
              <GoogleMap 
                containerElement={
                  <div style={{ height: '347px' }} />
                }
                mapElement={
                  <div style={{ height: '100%' }} />
                }
                geolocation={ geolocation }
                content={'Event Here'}
              />
              <h5>Upcoming Times</h5>
              { dates.map(({ startTime, endTime, date}, i) => {
                  return <UpcomingTimes key={i} startTime={ startTime } endTime={ endTime } date={ date } />
                })
              } 
            </div>
          </div>
          <div className='col s4 m6' style={{position: 'sticky', top: '0px'}}>
            <div className='item-detail-carousel-container'>
              <ImageCarousel images={ images } />
            </div>
          </div>
        </div>
      </div>
    );
  }  
}

const mapStateToProps = ({ venue }) => {
  return { venue: venue.venueDetail }
}

export default connect(mapStateToProps)(ItemDetail);