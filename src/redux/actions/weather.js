import {
	FETCH_WEATHERAPI_REQUEST,
	FETCH_WEATHERAPI_SUCCESS,
	FETCH_WEATHERAPI_FAILURE,
} from '../constants/actionTypes';
import WeatherAPI from '../../api/index';

export const getWeather = (city) => async (dispatch) => {
	dispatch({ type: FETCH_WEATHERAPI_REQUEST });
	try {
		const { data } = await WeatherAPI.fetchAPI(city);
		dispatch({ type: FETCH_WEATHERAPI_SUCCESS, payload: data });
	} catch (error) {
		dispatch({ type: FETCH_WEATHERAPI_FAILURE, error: error });
	}
};
