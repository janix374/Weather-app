import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getWeather } from '../../redux/actions/weather';
import { Grid, Typography } from '@material-ui/core';
import WeatherCard from './WeatherCard';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	wrongCityName: {
		marginTop: '200px',
		color: '#e32b44',
	},
}));

const WetherEngine = ({ city }) => {
	const wether = useSelector((state) => state.weather);
	const dispatch = useDispatch();

	const classes = useStyles();

	useEffect(() => {
		dispatch(getWeather(city));
	}, [city, dispatch]);

	console.log(wether.item);
	return (
		<Grid item xs={12} container justify='center'>
			{wether.error ? (
				<Typography
					variant='h5'
					component='p'
					className={classes.wrongCityName}
				>
					Wrong city name entered
				</Typography>
			) : wether.loading ? (
				<Typography variant='h5' component='p'>
					Loading...
				</Typography>
			) : (
				<WeatherCard item={wether.item} />
			)}
		</Grid>
	);
};

export default WetherEngine;
