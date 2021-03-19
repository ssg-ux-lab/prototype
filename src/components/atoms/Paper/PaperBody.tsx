import React from 'react';
import { Box } from '@chakra-ui/react';

interface PaperBodyProps extends React.HTMLProps<HTMLElement> {}

const PaperBody = ({ children }: PaperBodyProps) => {
	return <Box p={{ base: 5, md: '30px' }}>{children}</Box>;
};

export default PaperBody;
