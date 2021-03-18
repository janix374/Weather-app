import http from './http-common';

const apiId = process.env.REACT_APP_API_KEY;

class WeatherAPI {
	fetchAPI(city) {
		return http.get(`/?uk&units=metric&appid=${apiId}&q=${city}`);
	}
}

export default new WeatherAPI();
