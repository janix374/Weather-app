import { GET_COUNTRY } from '../constants/actionTypes';

const initialState = {
	items: [],
};

export default function countryReducer(state = initialState, action) {
	switch (action.type) {
		case GET_COUNTRY:
			return action.payload;
		default:
			return state;
	}
}
