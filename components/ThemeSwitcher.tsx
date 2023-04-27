import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Box, Button, useColorMode } from '@chakra-ui/react';
import React from 'react';

const ThemeSwitcher = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<Box aria-label='Switch mode button'>
			<Button
				bg='transparant'
				_hover={{ background: 'transparant' }}
				onClick={toggleColorMode}>
				{colorMode === 'dark' ? (
					<SunIcon color='orange.400' width='8' height='8' />
				) : (
					<MoonIcon width='8' height='8' />
				)}
			</Button>
		</Box>
	);
};

export default ThemeSwitcher;
