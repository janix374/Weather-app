import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Box } from '@material-ui/core';
import CardTemperature from './carditem/CardTemperature';
import LocationMap from './carditem/LocationMap';

const useStyles = makeStyles((theme) => ({
	weatherClass: {
		margin: 40,
	},
	weatherClassText: {
		textShadow: '0 3px 10px rgba(0,0,0,1)',
	},
}));

const WeatherCard = ({ item }) => {
	const classes = useStyles();

	return (
		<Grid item sm={12} className={classes.weatherClass}>
			<Typography
				variant='h5'
				component='p'
				className={classes.weatherClassText}
			>
				City : {item.name}
			</Typography>
			<Typography
				variant='h5'
				component='p'
				className={classes.weatherClassText}
			>
				Country : {item.sys.country}
			</Typography>
			<Box component='span' m={1}>
				<CardTemperature
					temp={item.main.temp}
					pressure={item.main.pressure}
					sunrise={item.sys.sunrise}
					sunset={item.sys.sunset}
					description={item.weather[0].description}
					wind={item.wind.speed}
					feelslike={item.main.feels_like}
					condition={item.weather[0].main}
				/>
			</Box>
			<Box className='geo-location-container'>
				<Typography variant='body1' component='p' className='geo-location-text'>
					City geo location on google map
				</Typography>
				<LocationMap lng={item.coord.lon} lat={item.coord.lat} />
			</Box>
		</Grid>
	);
};

export default WeatherCard;
