import { combineReducers } from 'redux';

import weatherReducer from './weather';
import countryReducer from './countries';

const rootReducer = combineReducers({
	weather: weatherReducer,
	country: countryReducer,
});

export default rootReducer;
