import { Box, Button, Text } from '@chakra-ui/react';
import React, { HTMLProps } from 'react';

export interface TestProps extends HTMLProps<HTMLElement> {
	count?: number;
	apiTest?: string;
	onClickIncrement?: (...p: any) => any;
	onClickIncrementAsync?: (...p: any) => any;
	onClickApiTest?: (...p: any) => any;
}

const Test = (props: TestProps) => {
	return (
		<Box>
			<Text data-testid="count">현재 카운터 값: {props.count} (콘솔창 확인, redux-logger)</Text>
			<Button onClick={props.onClickIncrement} data-testid="sync">
				동기 카운터 증가 + 1
			</Button>
			<Button onClick={props.onClickIncrementAsync} data-testid="async">
				비동기 카운터 증가 + 1
			</Button>
			<br />
			<Text>{props.apiTest} (콘솔창 확인, redux-logger)</Text>
			<Button onClick={props.onClickApiTest} data-testid="hello_world">
				api 테스트
			</Button>
		</Box>
	);
};

Test.defaultProps = {
	onClickIncrement: console.log,
	onClickIncrementAsync: console.log,
	onClickApiTest: console.log,
};

export default Test;
