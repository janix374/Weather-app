import React, { useState, useEffect } from 'react';
import {
	Grid,
	Typography,
	FormControl,
	Select,
	InputLabel,
	MenuItem,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import WetherEngine from './weatherLogic/WetherEngine';
import { useSelector, useDispatch } from 'react-redux';
import { getCountry } from '../redux/actions/countries';
import countriesArray from './countriesArray';

const useStyles = makeStyles((theme) => ({
	button: {
		display: 'block',
		marginTop: theme.spacing(2),
	},
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
	},
}));

const SelectCountry = () => {
	const selectCities = useSelector((state) => state.country);
	const dispatch = useDispatch();

	const classes = useStyles();
	const [countryId, setCountryId] = useState(0);
	const [city, setCity] = useState('');
	const [open, setOpen] = useState(false);
	const [openCity, setOpenCity] = useState(false);

	useEffect(() => {
		dispatch(getCountry(countryId));
	}, [countryId]);

	const handleCountry = (e) => {
		setCountryId((prevState) => {
			return (prevState = e.target.value);
		});
		setCity('');
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleOpen = () => {
		setOpen(true);
	};

	const handleCloseCity = () => {
		setOpenCity(false);
	};

	const handleOpenCity = () => {
		setOpenCity(true);
	};

	const handleCity = (e) => {
		setCity((prevState) => {
			return (prevState = e.target.value);
		});
	};

	return (
		<Grid container>
			<Grid item xs={12}>
				<Typography variant='h4' component='h4'>
					API from https://openweathermap.org
				</Typography>
				<Typography variant='h5' component='h5'>
					Choose a country
				</Typography>
				<form>
					<FormControl className={classes.formControl}>
						<InputLabel id='demo-controlled-open-select-label'>
							Country
						</InputLabel>
						<Select
							labelId='demo-controlled-open-select-label'
							id='demo-controlled-open-select'
							open={open}
							value={countryId}
							onClose={handleClose}
							onOpen={handleOpen}
							onChange={handleCountry}
						>
							{countriesArray.map((item) => {
								return (
									<MenuItem value={`${item.id}`} key={item.id}>
										{item.country}
									</MenuItem>
								);
							})}
						</Select>
					</FormControl>
					{!selectCities.cities ? (
						<p>Load...</p>
					) : (
						<FormControl className={classes.formControl}>
							<InputLabel id='demo-controlled-open-select-label'>
								City
							</InputLabel>
							<Select
								labelId='demo-controlled-open-select-label'
								id='demo-controlled-open-select'
								open={openCity}
								value={city}
								onClose={handleCloseCity}
								onOpen={handleOpenCity}
								onChange={handleCity}
							>
								{selectCities.cities.map((city, index) => {
									return (
										<MenuItem value={`${city}`} key={index}>
											{city}
										</MenuItem>
									);
								})}
							</Select>
						</FormControl>
					)}
				</form>
			</Grid>
			<Grid item xs={12} container>
				{city.length > 0 ? (
					<WetherEngine city={city} />
				) : (
					<p>You must select a city</p>
				)}
			</Grid>
		</Grid>
	);
};

export default SelectCountry;
