import React from 'react';
import { CssBaseline, Container } from '@material-ui/core';
import SelectCountry from './components/SelectCountry';
import withTheme from './components/theme/Theme';

function App(props) {
	return (
		<div className='App'>
			<CssBaseline />
			<Container maxWidth='md'>
				<SelectCountry {...props} />
			</Container>
		</div>
	);
}

export default withTheme(App);
