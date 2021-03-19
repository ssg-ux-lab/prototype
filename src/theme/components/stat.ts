const parts = ['label', 'number', 'icon', 'helpText'];

const baseStyle = {
	label: {
		letterSpacing: 'tight',
	},
	helpText: {
		color: 'inherit',
		mx: 1,
		mb: 0,
		verticalAlign: 'middle',
	},
	number: {
		color: 'gray.600',
		fontWeight: 'normal',
	},
	icon: {
		mx: 0,
		w: '12px',
		h: '12px',
	},
};

const sizes = {
	md: {
		label: { fontSize: 'lg' },
		helpText: { fontSize: 'sm' },
		number: { fontSize: 'sm' },
	},
};

const defaultProps = {
	size: 'md',
};

export default {
	parts,
	baseStyle,
	sizes,
	defaultProps,
};
