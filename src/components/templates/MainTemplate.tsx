import React from 'react';
import { Button, Stack } from '@chakra-ui/react';
import PageTransition from '../atoms/PageTransition/PageTransition';

interface Props {}

const MainTemplate = (props: Props) => {
	return (
		<PageTransition>
			메인페이지 템플릿
			<Stack>
				<Button id="primary">첫 번째 버튼입니다.</Button>
				<Button id="primary">두 번째 버튼입니다.</Button>
			</Stack>
		</PageTransition>
	);
};

export default MainTemplate;
