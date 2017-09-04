const INITIAL_STATE = {
	venue: {
		currentPage: 1
	}
}

export default function(state = INITIAL_STATE , action) {
	switch(action.type) {
		case 'PAGE_UP':
			var newObject = Object.assign({}, state);
			newObject.venue.currentPage++;
			return newObject;
		case 'PAGE_DOWN':
			var newObject = Object.assign({}, state);
			newObject.venue.currentPage--;
			return newObject;
		default: 
			return state;
	}
}