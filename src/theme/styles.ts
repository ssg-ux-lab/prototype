import { Styles, mode } from '@chakra-ui/theme-tools';

const styles: Styles = {
	global: (props) => ({
		'html, body, #root': {
			height: '100%',
		},
		body: {
			fontFamily: 'body',
			color: mode('gray.800', 'gray.100')(props),
			bg: mode('white', 'teal.800')(props),
			transition: 'background-color 0.2s',
			lineHeight: 'base',
			letterSpacing: 'tight',
		},
		'*::placeholder': {
			color: 'gray.600',
		},
		'*, *::before, &::after': {
			borderColor: mode('gray.200', 'gray.700')(props),
			wordWrap: 'break-word',
		},
	}),
};

export default styles;
