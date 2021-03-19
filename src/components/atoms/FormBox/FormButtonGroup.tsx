import React from 'react';
import { Flex, ButtonGroup } from '@chakra-ui/react';

interface FormButtonGroupProps extends React.HTMLProps<HTMLElement> {}

export const FormButtonGroup = ({ children }: FormButtonGroupProps) => {
	return (
		<Flex justify="center" mt={{ base: 4, md: 7 }}>
			<ButtonGroup spacing="10px">{children}</ButtonGroup>
		</Flex>
	);
};
