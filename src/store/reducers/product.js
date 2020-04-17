import * as actionTypes from "../actions";
const initialState = {
	products: [],
	cart: [],
	search: "",
	filter: [],
	filterRange: {
		min: 0,
		max: 0,
	},
	sort: 0,
};

let cart;
let found;

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.FETCH_PRODUCT:
			let min = action.products.reduce(
				(min, each) => (min.price > each.price ? each : min),
				action.products[0],
			).price;

			let max = action.products.reduce(
				(max, each) => (max.price > each.price ? max : each),
				action.products[0],
			).price;

			return {
				...state,
				products: action.products,
				filterRange: { min: min, max: max },
			};

		case actionTypes.ADD_CART:
			cart = [...state.cart];
			found = -1;
			if (cart.length > 0) {
				found = cart.findIndex((each) => each.id === action.id);
			}
			if (found > -1) {
				cart[found] = { ...cart[found], qty: cart[found].qty + 1 };
			} else {
				cart.push({ id: action.id, qty: 1 });
			}
			return { ...state, cart: cart };
		case actionTypes.SUBTRACT_CART:
			cart = [...state.cart];
			found = -1;
			if (cart.length > 0) {
				found = cart.findIndex((each) => each.id === action.id);
			}
			if (found > -1) {
				if (cart[found].qty > 1) {
					cart[found] = { ...cart[found], qty: cart[found].qty - 1 };
				} else {
					cart = cart.filter((each, i) => i !== found);
				}
			}
			return { ...state, cart: cart };
		case actionTypes.REMOVE_CART:
			cart = [...state.cart];
			found = -1;
			if (cart.length > 0) {
				found = cart.findIndex((each) => each.id === action.id);
			}
			if (found > -1) {
				cart = cart.filter((each, i) => i !== found);
			}
			return { ...state, cart: cart };
		case actionTypes.FILTER:
			return { ...state, filter: action.filter };
		case actionTypes.SORT:
			return { ...state, sort: action.sort };
		case actionTypes.SEARCH:
			return { ...state, search: action.search };
		default:
			return state;
	}
};

export default reducer;
