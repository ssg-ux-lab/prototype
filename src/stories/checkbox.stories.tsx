import { Checkbox, HStack, Stack } from '@chakra-ui/react';
import React from 'react';

export default {
	title: '폼요소/Input/Checkbox',
	component: Checkbox,
};

export const 기본 = () => {
	return (
		<Stack spacing="8">
			<HStack alignItems="center">
				<Checkbox />
				<Checkbox defaultChecked={true} />
			</HStack>
			<HStack alignItems="center">
				<Checkbox>오늘은 그만보기</Checkbox>
				<Checkbox defaultChecked={true}>오늘은 그만보기</Checkbox>
			</HStack>
		</Stack>
	);
};
