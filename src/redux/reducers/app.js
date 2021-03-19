const defaultApp = {
	cart: 0,
	book: [],
	add: {}
};

export default function app(state = defaultApp, action) {
	switch (action.type) {
		case 'CON_BOOK': {
			const book = [...state.book, state.add];
			return {
				...state,
				cart: book.length,
				book,
				add: {}
			};
		}
		case 'ADD_BOOK':
			return {
				...state,
				add: action.book
			};
		default:
			return state;
	}
}
