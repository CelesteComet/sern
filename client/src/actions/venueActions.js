import axios from 'axios';

export const FETCH_VENUES = 'FETCH_VENUES';
export const FETCH_VENUE = 'FETCH_VENUE';
export const RESET_VENUE = 'RESET_VENUE';
export const DELETE_VENUE = 'DELETE_VENUE';
export const UPDATE_VENUE = 'UPDATE_VENUE';

export const FETCH_VENUES_OF = 'FETCH_VENUES_OF';

export const fetchVenues = () => {
  return function(dispatch) {
    axios.get('/api/venues')
      .then(res => {
        dispatch({ type: FETCH_VENUES, payload: res.data })
      })
      .catch(err => {
        console.log(err);
      }) 
  }
}

export const fetchVenue = (venueId) => {
  return function(dispatch) {
    axios.get('/api/venues/' + venueId)
      .then(res => {
        dispatch({ type: FETCH_VENUE, payload: res.data })
      })
      .catch(err => {
        console.log(err);   
      })
  }
}

export const resetVenue = () => {
  return { type: RESET_VENUE }
}

export const deleteVenue = (venueId, history) => {
  return function(dispatch) {
    axios.delete('/api/venues/' + venueId)
      .then(res => {
        history.push('/');
      })
      .catch(err => {
        console.log(err);
      })
  }
}

export const updateVenue = (venueId, body, history) => {
  return function(dispatch) {
    axios.put('/api/venues/' + venueId, body)
      .then(res => {
        history.push('/venues/' + venueId);
      })
      .catch(err => {
        console.log(err);
      })
  }
}

export const createVenue = (body, history) => {
  return function(dispatch) {
    axios.post('/api/venues', body)
      .then(res => {
        history.push('/');
      })
      .catch(err => {
        console.log(err);
      })
  }
}

// Special Actions Below

export const fetchVenuesOf = () => {
  return function(dispatch) {
    axios.get('/api/venues/listings')
      .then(res => {
        console.log("HELO")
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      })
  }
}