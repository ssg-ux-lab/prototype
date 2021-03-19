import React from 'react';
import { Box, useColorModeValue } from '@chakra-ui/react';

interface PaperProps extends React.HTMLProps<HTMLElement> {}

const Paper = ({ children }: PaperProps) => {
	const bg = useColorModeValue('white', 'teal.700');
	return (
		<Box w="full" bg={bg}>
			{children}
		</Box>
	);
};

export default Paper;
