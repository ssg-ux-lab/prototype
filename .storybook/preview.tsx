import React from 'react';
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../src/theme';

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	viewport: {
		viewports: MINIMAL_VIEWPORTS,
	},
};

const withChakra = (StoryFn: Function) => (
	<ChakraProvider theme={theme}>
		<StoryFn />
	</ChakraProvider>
);

export const decorators = [withChakra];
