import React, { useState, useEffect } from 'react';
import { CssBaseline, Container } from '@material-ui/core';
import SelectCountry from './components/SelectCountry';

function App() {
	return (
		<div className='App'>
			<CssBaseline />
			<Container maxWidth='md'>
				<SelectCountry />
			</Container>
		</div>
	);
}

export default App;
