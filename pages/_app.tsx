import Layout from '@/components/Layout';
import '@/styles/globals.css';
import theme from '@/theme';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider theme={theme}>
			<ColorModeScript initialColorMode={theme.config.initialColorMode} />
			<Layout />
			<Component {...pageProps} />
		</ChakraProvider>
	);
}
