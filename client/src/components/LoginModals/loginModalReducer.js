import { MODAL_OPEN_STARTED, MODAL_OPEN_SUCCESS, MODAL_CLOSED } from './loginModalActions';

export const loginModalReducer = (state = false, action) => {
  switch (action.type) {
    case MODAL_OPEN_STARTED:
      return state;
    case MODAL_OPEN_SUCCESS:
      return true;
    case MODAL_CLOSED:
      return false;
    default:
      return state;
  }
}