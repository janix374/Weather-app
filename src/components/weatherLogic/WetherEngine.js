import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getWeather } from '../../redux/actions/weather';
import { Grid, Typography } from '@material-ui/core';
import WeatherCard from './WeatherCard';

const WetherEngine = ({ city }) => {
	const wether = useSelector((state) => state.weather);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getWeather(city));
	}, [city, dispatch]);

	return (
		<Grid item xs={12} container justify='center'>
			{wether.error ? (
				<Typography variant='h5' component='p'>
					Something went wrong
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
