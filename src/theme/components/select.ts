import { mode } from '@chakra-ui/theme-tools';
import { mergeWith as merge } from '@chakra-ui/utils';
import Input from './input';

const parts = ['field', 'icon'];

function baseStyleField(props: Record<string, any>) {
	return {
		width: '100%',
		minWidth: 0,
		outline: 0,
		position: 'relative',
		appearance: 'none',
		transition: 'all 0.2s',
		paddingBottom: '1px',
		lineHeight: 'normal',
		borderRadius: 'none',
		color: mode('gray.800', 'gray.100')(props),
		'> option': {
			bg: mode('white', 'teal.800')(props),
		},
		_disabled: {
			color: mode('gray.400', 'gray.700')(props),
		},
	};
}

const baseStyle = (props: Record<string, any>) => ({
	borderColor: 'gray.300',
	field: baseStyleField(props),
	icon: {
		color: 'gray.500',
	},
});

const sizes = merge({}, Input.sizes, {
	xs: {
		icon: {
			right: '0.25rem',
		},
	},
	sm: {
		field: {
			h: 7,
			fontSize: 'sm',
			borderRadius: 'sm',
			paddingLeft: '2',
		},
		icon: {
			w: 3,
		},
	},
	md: {
		field: {
			h: 10,
			fontSize: 'sm',
			borderRadius: 'sm',
			paddingLeft: '3',
		},
		icon: {
			w: '14px',
		},
	},
	lg: {
		field: {
			h: '44px',
			fontSize: 'lg',
			borderRadius: 'sm',
			paddingLeft: '14px',
		},
		icon: {
			w: '14px',
		},
	},
});

const variants = {
	outline: {
		field: {
			_disabled: {
				opacity: 1,
			},
		},
	},
};

const defaultProps = {
	size: 'md',
	variant: 'outline',
};

export default {
	parts,
	baseStyle,
	sizes,
	variants,
	defaultProps,
};
