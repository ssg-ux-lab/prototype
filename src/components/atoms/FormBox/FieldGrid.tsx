import React from 'react';
import { Grid, GridProps } from '@chakra-ui/react';

interface FieldGridProps extends GridProps {}

export const FieldGrid = ({ children, ...rest }: FieldGridProps) => {
	return (
		<Grid minH={8} templateColumns={{ base: '1fr', md: '130px auto' }} pl={{ md: 5 }} gap={2} {...rest}>
			{children}
		</Grid>
	);
};
