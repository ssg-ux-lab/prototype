import { Box, Center, useColorModeValue, VisuallyHidden } from '@chakra-ui/react';
import { Field } from 'formik';
import React from 'react';
import theme from '../../../theme';

interface Props {
	name: string;
	value: string;
	label: string;
	isChecked: boolean;
}

const RadioRect = (props: Props) => {
	const { label, name, value, isChecked } = props;
	const boxShadow = useColorModeValue(theme.colors.gray['300'], theme.colors.gray['700']);
	const checkedColor = useColorModeValue('white', 'gray.400');
	const checkedStyle = isChecked ? { color: checkedColor, bg: 'gray.700', boxShadow: `inset 0 0 0 1px ${theme.colors.gray['700']}` } : {};

	return (
		<Box as="label" mr="-1px">
			<Center as="label" boxSize={10} color="gray.600" fontSize="lg" cursor="pointer" fontWeight="bold" boxShadow={`inset 0 0 0 1px ${boxShadow}`} {...checkedStyle}>
				<VisuallyHidden as={Field} type="radio" name={name} value={value} />
				{label}
			</Center>
		</Box>
	);
};

export default RadioRect;
