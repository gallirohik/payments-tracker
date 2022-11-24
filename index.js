import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './src/App';

// 1. Import the extendTheme function
import { extendTheme, ChakraProvider } from '@chakra-ui/react';

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
	brand: {
		900: '#1a365d',
		800: '#153e75',
		700: '#2a69ac',
	},
};

const theme = extendTheme({ colors });

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
	<ChakraProvider theme={theme}>
		<App />
	</ChakraProvider>
);
