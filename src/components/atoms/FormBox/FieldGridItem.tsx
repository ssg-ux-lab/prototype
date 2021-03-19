import React from 'react';
import { GridItem, GridItemProps } from '@chakra-ui/react';

interface FieldGridItemProps extends GridItemProps {}

export const FieldGridItem = ({ children, ...rest }: FieldGridItemProps) => {
	return (
		<GridItem alignSelf="center" {...rest}>
			{children}
		</GridItem>
	);
};
