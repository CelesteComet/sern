import { FETCH_VENUES, FETCH_VENUE, RESET_VENUE, DELETE_VENUE, UPDATE_VENUE } from '../actions/venueActions';

const INITIAL_STATE = {
  venues: [],
  venueDetail: null
}

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_VENUES:
      return { ...state, venues: action.payload }
    case FETCH_VENUE:
      return { ...state, venueDetail: action.payload[0] }
    case RESET_VENUE:
      return INITIAL_STATE;
    case DELETE_VENUE:
      return { ...state, venues: action.payload }
    case UPDATE_VENUE:
      return { ...state, venueDetail: action.payload[0] }
    default:
      return state;
  }
}