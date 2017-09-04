export const PAGE_UP = 'PAGE_UP',
						 PAGE_DOWN = 'PAGE_DOWN';

export function pageUp() {
	return {
		type: PAGE_UP
	}
}

export function pageDown() {
	return {
		type: PAGE_DOWN
	}
}						 

export function fetchPageUp() {
	return function(dispatch) {
		dispatch(pageUp);
	}
}