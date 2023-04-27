import { Box, Flex, Heading } from '@chakra-ui/react';
import React from 'react';
import ThemeSwitcher from './ThemeSwitcher';

const Header: React.FC = () => {
	return (
		<Flex
			justifyContent='space-between'
			alignItems='center'
			width='100vw'
			height='4rem auto'>
			<Heading ml='2rem'>Movie name app here</Heading>
			<ThemeSwitcher />
		</Flex>
	);
};

export default Header;
