import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Box } from '@material-ui/core';
import CardTemperature from './CardTemperature';
import LocationMap from './LocationMap';

const useStyles = makeStyles((theme) => ({
	weatherClass: {
		margin: 40,
	},
}));

const WeatherCard = ({ item }) => {
	const classes = useStyles();

	console.log('item component', item.coord.lon);
	return (
		<Grid item sm={12} className={classes.weatherClass}>
			<Typography variant='h5' component='p'>
				City : {item.name}
			</Typography>
			<Typography variant='h5' component='p'>
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
			{/* <Box component='span' m={1}>
				<Typography variant='body1' component='p'>
					City geo location, longitude : {item.coord.lon}
				</Typography>
				<Typography variant='body1' component='p'>
					City geo location, latitude : {item.coord.lat}
				</Typography>
			</Box> */}
			{/* <LocationMap lng={item.coord.lon} lat={item.coord.lat} /> */}
		</Grid>
	);
};

export default WeatherCard;
