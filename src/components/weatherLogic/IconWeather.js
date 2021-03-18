import React from 'react';

const IconWeather = (props) => {
	let icon = '';
	switch (props.condition) {
		case 'Clouds':
			icon = `./image/Mostly Cloudy-2x.png`;
			break;
		case 'Clear':
			icon = `./image/Mostly Sunny-2x.png`;
			break;
		case 'Haze':
			icon = `./image/Haze-2x.png`;
			break;
		case 'Hail':
			icon = `./image/Hail-2x.png`;
			break;
		case 'Fog':
			icon = `./image/Fog-2x.png`;
			break;
		case 'Tornado':
			icon = `./image/Tornado-2x.png`;
			break;
		case 'Dust':
			icon = `./image/Dust-2x.png`;
			break;
		case 'Mist':
			icon = `./image/Fog-2x.png`;
			break;
		case 'Snow':
			icon = `./image/Snow-2x.png`;
			break;
		case 'Rain':
			icon = `./image/Rain-2x.png`;
			break;
		case 'Drizzle':
			icon = `./image/Drizzle-2x.png`;
			break;
		case 'Thunderstorm':
			icon = `./image/Severe Thunderstorm-2x.png`;
			break;
		default:
			icon = `./image/Fog-2x.png`;
			break;
	}

	return (
		<>
			<img src={icon} alt='weather condition' />
		</>
	);
};

export default IconWeather;
