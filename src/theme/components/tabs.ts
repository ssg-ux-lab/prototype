import { mode } from '@chakra-ui/theme-tools';

const parts = ['root', 'tablist', 'tab', 'tabpanel', 'indicator'];

type Dict = Record<string, any>;

const baseStyle = {
	tab: {
		_focus: {
			boxShadow: 'none',
		},
	},
	tabpanel: {
		p: 0,
	},
};

const sizes = {
	md: {
		tab: {
			fontSize: 'md',
		},
	},
	lg: {
		tab: {
			fontSize: 'lg',
			letterSpacing: 'tight',
		},
	},
};

function variantEnclosed(props: Dict) {
	const { colorScheme: c } = props;
	return {
		tab: {
			color: `gray.600`,
			borderTopRadius: 'none',
			border: '1px solid',
			borderColor: mode(`gray.200`, `gray.700`)(props),
			borderBottomColor: 'transparent',
			minW: '140px',
			mb: '-1px',
			_notLast: {
				mr: '-1px',
			},
			_selected: {
				position: 'relative',
				color: mode(`gray.700`, `gray.400`)(props),
				fontWeight: 'bold',
				borderColor: mode(`gray.700`, `gray.600`)(props),
				borderBottomColor: mode(`white`, `teal.700`)(props),
			},
		},
		tablist: {
			borderColor: mode(`gray.700`, `gray.600`)(props),
		},
	};
}

function variantEnclosedColored(props: Dict) {
	const { colorScheme: c } = props;
	return {
		tab: {
			bg: mode(`white`, `teal.700`)(props),
			border: '1px solid',
			borderColor: mode(`gray.300`, `gray.700`)(props),
			borderBottomColor: mode(`gray.700`, `gray.600`)(props),
			mb: '-1px',
			_notLast: {
				mr: '-1px',
			},
			_selected: {
				position: 'relative',
				color: 'inherit',
				bg: mode(`white`, `teal.700`)(props),
				borderWidth: '1px',
				borderColor: mode(`gray.700`, `gray.600`)(props),
				borderBottomColor: mode(`white`, `teal.700`)(props),
				borderTopColor: mode(`primary.500`, `primary.600`)(props),
				boxShadow: 'inset 0 3px 0 #728aff',
			},
		},
		tablist: {
			borderColor: mode(`gray.700`, `gray.600`)(props),
		},
	};
}

const variants = {
	enclosed: variantEnclosed,
	'enclosed-colored': variantEnclosedColored,
};

const defaultProps = {
	size: 'md',
	variant: 'enclosed',
	colorScheme: 'gray',
};

export default {
	parts,
	baseStyle,
	sizes,
	variants,
	defaultProps,
};
