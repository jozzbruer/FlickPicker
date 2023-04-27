import Layout from '@/components/Layout';
import AppContextProvider from '@/context/AppContextProvider';
import '@/styles/globals.css';
import theme from '@/theme';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider theme={theme}>
			<AppContextProvider>
				<ColorModeScript initialColorMode={theme.config.initialColorMode} />
				<Layout />
				<Component {...pageProps} />
			</AppContextProvider>
		</ChakraProvider>
	);
}
