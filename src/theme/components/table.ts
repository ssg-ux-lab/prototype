import { mode } from '@chakra-ui/theme-tools';
const parts = ['table', 'thead', 'tbody', 'tr', 'th', 'td', 'caption'];

type Dict = Record<string, any>;

const numericStyles = {
	'&[data-is-numeric=true]': {
		textAlign: 'right',
	},
};

const simpleVariant = (props: Dict) => {
	const { colorScheme: c } = props;

	return {
		table: {
			borderCollapse: 'collapse',
			border: '1px',
			borderColor: 'gray.200',
			fontSize: 'lg',
		},
		th: {
			fontWeight: 'normal',
			fontSize: 'lg',
			width: '149px',
			backgroundColor: mode(`gray.100`, `gray.800`)(props),
			color: mode(`gray.800`, `gray.200`)(props),
			borderBottom: '1px',
			borderRight: '1px',
			borderRightColor: 'gray.200',
			borderColor: mode(`${c}.200`, `${c}.700`)(props),
			...numericStyles,
		},
		td: {
			fontSize: 'lg',
			color: mode(`gray.800`, `gray.200`)(props),
			borderBottom: '1px',
			borderColor: mode(`${c}.200`, `${c}.700`)(props),
			...numericStyles,
		},
	};
};

const sizes = {
	sm: {
		th: {
			py: '2',
		},
		td: {
			py: '3',
		},
	},
};

const variants = {
	simple: simpleVariant,
};

export default {
	variants,
	sizes,
};
