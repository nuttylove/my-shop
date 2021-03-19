const defaultApp = {};

export default function app(state, action) {
	state = defaultApp;
	switch (action.type) {
		case 'ADD_BIRD':
			return {
				...state,
			};
		case 'INCREMENT_BIRD':
			return {
				...state
			};
		default:
			return state;
	}
}
