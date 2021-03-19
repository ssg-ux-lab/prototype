import { mode } from '@chakra-ui/theme-tools';

type Dict = Record<string, any>;

const parts = ['requiredIndicator', 'helperText'];

const baseStyleRequiredIndicator = {
	ml: 1,
	color: `primary.500`,
};

function baseStyleHelperText(props: Dict) {
	return {
		mt: 2,
		color: mode('gray.500', 'whiteAlpha.600')(props),
		lineHeight: 'normal',
		fontSize: 'sm',
	};
}

const baseStyle = (props: Dict) => ({
	requiredIndicator: baseStyleRequiredIndicator,
	helperText: baseStyleHelperText(props),
});

export default {
	parts,
	baseStyle,
};
