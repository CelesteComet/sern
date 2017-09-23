export const MODAL_OPEN_STARTED = 'MODAL_OPEN_STARTED';
export const MODAL_OPEN_SUCCESS = 'MODAL_OPEN_SUCCEEDED';
export const MODAL_CLOSED = 'MODAL_CLOSED';

export const modalOpen = () => {
  return { type: MODAL_OPEN_SUCCESS }
}

export const modelClose = () => {
  return { type: MODAL_CLOSED }
}