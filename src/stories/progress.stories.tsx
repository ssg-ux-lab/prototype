import React from 'react';
import { Progress, Stack } from '@chakra-ui/react';

export default {
	title: '피드백/Progress',
};
export const Default = () => (
	<Stack>
		<Progress value={80} />
	</Stack>
);
Default.storyName = '기본';
