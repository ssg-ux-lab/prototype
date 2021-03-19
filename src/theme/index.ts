import { extendTheme } from '@chakra-ui/react';
// Global style overrides
import styles from './styles';
// Foundational style overrides
import foundations from './foundations';
// Component style overrides
import components from './components';

const config = {
	useSystemColorMode: false,
};

const overrides = {
	config,
	styles,
	...foundations,
	components,
};

export default extendTheme(overrides);
