import { mode } from '@chakra-ui/theme-tools';
import Checkbox from './checkbox';

const parts = ['container', 'control', 'label'];

function baseStyleControl(props: Record<string, any>) {
	const { colorScheme: c } = props;
	const { control } = Checkbox.baseStyle(props);

	return {
		...control,
		borderRadius: 'full',
		border: '1px solid',
		borderColor: mode('gray.300', 'gray.600')(props),
		_before: {
			content: `""`,
			display: 'inline-block',
			pos: 'relative',
			borderRadius: '50%',
			bg: mode('white', 'teal.700')(props),
			borderWidth: '1px',
			borderColor: mode('gray.300', 'gray.600')(props),
			width: '10px',
			height: '10px',
		},
		_checked: {
			...control['_checked'],
			bg: 'none',
			_before: {
				bg: mode(`${c}.500`, `${c}.600`)(props),
				borderColor: mode(`${c}.500`, `${c}.600`)(props),
				width: '10px',
				height: '10px',
			},
		},
	};
}

const baseStyle = (props: Record<string, any>) => ({
	label: Checkbox.baseStyle(props).label,
	control: baseStyleControl(props),
});

const sizes = {
	sm: {
		control: { width: 3, height: 3 },
		label: { fontSize: 'md' },
	},
	md: {
		control: { w: 4, h: 4 },
		label: { fontSize: 'lg' },
	},
	lg: {
		control: { w: 5, h: 5 },
		label: { fontSize: 'xl' },
	},
};

const defaultProps = {
	size: 'md',
	colorScheme: 'primary',
};

export default {
	parts,
	baseStyle,
	sizes,
	defaultProps,
};
