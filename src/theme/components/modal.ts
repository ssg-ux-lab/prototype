import { mode } from '@chakra-ui/theme-tools';

const parts = ['overlay', 'dialogContainer', 'dialog', 'header', 'closeButton', 'body', 'footer'];

const baseStyle = (props: Record<string, any>) => ({
	overlay: {
		bg: mode('blackAlpha.600', 'blackAlpha.800')(props),
	},
	dialog: {
		bg: mode('white', 'teal.700')(props),
		borderRadius: 'none',
	},
	header: {
		px: 6,
		py: 4,
		fontSize: '2xl',
		fontWeight: 'bold',
		bg: mode(`primary.500`, `primary.600`)(props),
		textAlign: 'center',
		color: 'white',
	},
	body: {
		py: 6,
	},
	closeButton: {
		position: 'absolute',
		top: 2,
		insetEnd: 3,
	},
	footer: {
		justifyContent: 'center',
	},
});

const sizes = {
	md: { dialog: { maxW: '480px' } },
};

export default {
	parts,
	baseStyle,
	sizes,
};
