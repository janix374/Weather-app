import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import {
	Card,
	CardHeader,
	Typography,
	IconButton,
	Avatar,
	CardContent,
	CardActions,
} from '@material-ui/core';
import CenterFocusWeakTwoToneIcon from '@material-ui/icons/CenterFocusWeakTwoTone';
import moment from 'moment';
import IconWeather from './IconWeather';
import VanilaEffect from '../vanilaEffect/VanilaEffect';

const useStyles = makeStyles((theme) => ({
	root: {
		// maxWidth: 345,
	},
	media: {
		height: 0,
		paddingTop: '56.25%', // 16:9
	},
	expand: {
		transform: 'rotate(0deg)',
		marginLeft: 'auto',
		transition: theme.transitions.create('transform', {
			duration: theme.transitions.duration.shortest,
		}),
	},
	expandOpen: {
		transform: 'rotate(180deg)',
	},
	avatar: {
		backgroundColor: red[500],
	},
	contexClass: {
		textAlign: 'center',
		fontSize: '60px',
	},
	imageClasses: {
		textAlign: 'center',
		margin: '70px',
	},
	contexClassDescription: {
		textAlign: 'center',
		fontSize: '40px',
	},
}));

const CardTemperature = ({
	temp,
	pressure,
	sunrise,
	sunset,
	description,
	wind,
	feelslike,
	condition,
}) => {
	const classes = useStyles();
	// The weatherConditions function is used to determine the background color in the red spectrum
	const weatherConditions = (temp) => {
		let highColor = 0;
		let lowColor = 0;
		let bg = null;

		// logic if 12 represent 0 , 46 represent 1
		if (temp > 12) {
			highColor = Math.ceil((1 - (temp - 12) / 34) * 255);
			return `linear-gradient(to top, rgb(255,${highColor},0), rgb(255,${lowColor},0))`;
		} else if (temp <= 12) {
			// logic if -20 represent 0 , 12 represent 1
			highColor = Math.ceil((1 - (temp + 20) / 32) * 255);
			lowColor = highColor - 150;
			return `linear-gradient(to top, rgb(0,${highColor},255), rgb(0,${lowColor},255))`;
		}
	};

	return (
		<Card className={classes.root}>
			<CardHeader
				avatar={
					<Avatar aria-label='recipe' className={classes.avatar}>
						T
					</Avatar>
				}
				title={`${moment().format('MMM D YYYY')}`}
				subheader=''
			/>
			<CardContent
				style={{
					background: weatherConditions(temp),
					color: '#ffffff',
				}}
			>
				<VanilaEffect>
					<Typography
						variant='body2'
						component='p'
						className={classes.contexClass}
					>
						{temp} &#8451;
					</Typography>
					<Typography
						variant='body1'
						component='p'
						className={classes.contexClassDescription}
					>
						{description.toUpperCase()}
					</Typography>
				</VanilaEffect>
				<VanilaEffect>
					<Typography
						variant='body2'
						component='p'
						className={classes.imageClasses}
					>
						<IconWeather condition={condition} />
					</Typography>
				</VanilaEffect>
				<Typography variant='body2' component='p'>
					Atmospheric pressure: {pressure} hPa
				</Typography>
				<Typography variant='body2' component='p'>
					Wind speed: {wind} m/s
				</Typography>
				<Typography variant='body2' component='p'>
					Feels Like: {feelslike} &#8451;
				</Typography>
				{/* <Typography variant='body2' component='p'>
					Sunrise time: {moment.unix(sunrise).format('HH:mm')}
				</Typography>
				<Typography variant='body2' component='p'>
					Sunset time: {moment.unix(sunset).format('HH:mm')}
				</Typography> */}
				<p>{condition}</p>
			</CardContent>
			<CardActions disableSpacing></CardActions>
		</Card>
	);
};

export default CardTemperature;
