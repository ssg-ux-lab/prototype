import { mode } from '@chakra-ui/theme-tools';

type Dict = Record<string, any>;

const baseStyle = {
	fontWeight: 'normal',
	_focus: {
		boxShadow: 'none',
	},
};

function variantOutline(props: Dict) {
	const { colorScheme: c } = props;

	return {
		border: '1px solid',
		borderColor: c === 'gray' ? mode(`gray.300`, `gray.700`)(props) : 'currentColor',
		bg: c === 'gray' ? mode(`gray.100`, `gray.800`)(props) : 'currentColor',
	};
}

function variantSolid(props: Dict) {
	const { colorScheme: c } = props;

	if (c === 'gray') {
		return {
			bg: `gray.500`,
			color: 'white',
			_hover: {
				bg: `gray.500`,
				_disabled: {
					bg: `gray.500`,
				},
			},
			_active: {
				bg: `gray.500`,
			},
		};
	}

	if (c === 'darkGray') {
		return {
			bg: `gray.700`,
			color: 'white',
		};
	}

	return {
		bg: mode(`${c}.500`, `${c}.600`)(props),
		color: 'white',
	};
}

function variantLink(props: Dict) {
	const { colorScheme: c } = props;
	return {
		minW: 0,
		color: c === 'gray' ? `gray.600` : `${c}.500`,
		_active: {
			color: c === 'gray' ? `gray.600` : `${c}.500`,
		},
	};
}

const variants = {
	outline: variantOutline,
	solid: variantSolid,
	link: variantLink,
	ghost: {
		minW: 10,
	},
	unstyled: {
		minW: 0,
	},
};

const sizes = {
	sm: {
		h: 7,
		minW: 10,
		fontSize: 'sm',
		px: 3,
	},
	md: {
		h: 10,
		minW: '120px',
		fontSize: 'md',
		px: 4,
	},
	lg: {
		h: 10,
		w: '280px',
		fontSize: 'md',
		px: 4,
	},
};

const defaultProps = {
	variant: 'solid',
	size: 'md',
};

export default {
	baseStyle,
	variants,
	sizes,
	defaultProps,
};
