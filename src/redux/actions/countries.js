import { GET_COUNTRY } from '../constants/actionTypes';
import countriesArray from '../../components/dbCountry';

export const getCountry = (countryId) => {
	return {
		type: GET_COUNTRY,
		payload: countriesArray[countryId],
	};
};
