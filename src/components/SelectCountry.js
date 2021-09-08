import React, { useState, useEffect } from 'react';
import {
	Grid,
	Typography,
	FormControl,
	Select,
	InputLabel,
	MenuItem,
	Link,
	TextField,
	Box,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import WetherEngine from './weatherLogic/WetherEngine';
import { useSelector, useDispatch } from 'react-redux';
import { getCountry } from '../redux/actions/countries';
import countriesArray from './countries/countriesArray';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import weatherPics from '../img/maxresdefault.jpg';

const useStyles = makeStyles((theme) => ({
	button: {
		display: 'block',
		marginTop: theme.spacing(4),
	},
	formControl: {
		margin: theme.spacing(4),
		minWidth: 120,
	},
	imageWeather: {
		width: '70%',
	},
	imageWeatherContainer: {
		textAlign: 'center',
	},
	marginForCityNameInput: {
		margin: theme.spacing(4),
	},
	formCountry: {
		marginBottom: '100px',
	},
	itemCountryClass: {
		marginLeft: '10px',
	},
	linkClass: {
		overflow: 'hidden',
	},
}));

const SelectCountry = (props) => {
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
			<Grid item xs={12} className={classes.linkClass}>
				<Box m={4}>
					<Typography variant='h4' component='h4' color='primary'>
						API from<span>&nbsp;</span>
						<Link href='https://openweathermap.org'>
							https://openweathermap.org
						</Link>
					</Typography>
					<Typography variant='h5' component='p' color='primary'>
						weather API
					</Typography>
				</Box>
			</Grid>
			<Grid
				item
				xs={12}
				className='wether-pics'
				style={{
					backgroundImage: `url(
							${weatherPics}
						)`,
				}}
			></Grid>
			<Grid item sm={12} className={classes.formCountry}>
				<Typography variant='h5' component='h5' color='primary'>
					Choose a country
				</Typography>

				<form>
					<FormControl className={classes.formControl} color='primary'>
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
										<img
											src={process.env.PUBLIC_URL + `/flags/${item.img}`}
											alt='country'
										/>{' '}
										<span className={classes.itemCountryClass}>
											{item.country}
										</span>
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
											<LocationOnIcon />
											<span className={classes.itemCountryClass}>{city}</span>
										</MenuItem>
									);
								})}
							</Select>
						</FormControl>
					)}
					<FormControl>
						<TextField
							className={classes.marginForCityNameInput}
							id='outlined-required'
							label='Enter city name'
							variant='outlined'
							value={city}
							onChange={handleCity}
						/>
					</FormControl>
				</form>
			</Grid>
			<Grid item sm={12} container className={classes.forWetherEngine}>
				{city.length > 0 ? <WetherEngine city={city} /> : <p></p>}
			</Grid>
		</Grid>
	);
};

export default SelectCountry;
