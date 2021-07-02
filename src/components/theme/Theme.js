import React, { useState } from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme1 = createMuiTheme({
	palette: {
		type: 'light',
	},
});

const theme2 = createMuiTheme({
	palette: {
		type: 'dark',
	},
});

const Theme = (props) => {
	const { children, darkMode } = props;
	const defaultTheme = darkMode ? theme2 : theme1;
	return <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>;
};

export const withTheme = (Component) => {
	return (props) => {
		const [darkMode, setDarkMode] = useState(false);
		return (
			<Theme darkMode={darkMode}>
				<Component {...props} darkMode={darkMode} setDarkMode={setDarkMode} />
			</Theme>
		);
	};
};

export default withTheme;
