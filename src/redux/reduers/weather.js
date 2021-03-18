import {
	FETCH_WEATHERAPI_REQUEST,
	FETCH_WEATHERAPI_SUCCESS,
	FETCH_WEATHERAPI_FAILURE,
} from '../constants/actionTypes';

const initialState = {
	item: {},
	loading: true,
	error: null,
};

export default function weatherReducer(state = initialState, action) {
	switch (action.type) {
		case FETCH_WEATHERAPI_REQUEST:
			return {
				...state,
				loading: true,
				error: null,
			};
		case FETCH_WEATHERAPI_SUCCESS:
			return {
				...state,
				loading: false,
				error: null,
				item: action.payload,
			};
		case FETCH_WEATHERAPI_FAILURE:
			return {
				...state,
				loading: false,
				error: action.error,
				item: {},
			};
		default:
			return state;
	}
}
