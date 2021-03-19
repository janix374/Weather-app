import { GET_COUNTRY } from '../constants/actionTypes';
import countriesArray from '../../components/countriesArray';

export const getCountry = (countryId) => {
	return {
		type: GET_COUNTRY,
		payload: countriesArray[countryId],
	};
};
