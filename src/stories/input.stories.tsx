import React from 'react';
import { Input, Stack } from '@chakra-ui/react';

export default {
	title: '폼요소/Input/Text',
	component: Input,
};

export const 활성 = () => {
	return (
		<Stack spacing="4">
			<Input placeholder="검색어를 입력해주세요" size="sm" />
			<Input placeholder="검색어를 입력해주세요" size="md" />
			<Input placeholder="검색어를 입력해주세요" size="lg" />
		</Stack>
	);
};

export const 비활성 = () => {
	return (
		<Stack spacing="4">
			<Input placeholder="검색어를 입력해주세요" size="sm" disabled />
			<Input placeholder="검색어를 입력해주세요" size="md" disabled />
			<Input placeholder="검색어를 입력해주세요" size="lg" disabled />
		</Stack>
	);
};
