import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
	initialColorMode: 'dark',
	useSystemColorMode: true,
};
const styles = {
	global: {
		body: {
			margin: 0,
			padding: 0,
			fonFamily: "'Monserrat',sans-serif",
		},
	},
};

const theme = extendTheme({ config, styles });

export default theme;
