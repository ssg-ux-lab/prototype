import React, { useState } from 'react';
import { HStack, Radio, RadioGroup } from '@chakra-ui/react';

export default {
	title: '폼요소/Input/Radio',
	components: Radio,
};

export const 기본 = (args) => {
	const [value, setValue] = useState<string | number>('1');

	return (
		<RadioGroup onChange={setValue} value={value}>
			<HStack>
				<Radio value="1">선택시</Radio>
				<Radio value="2">미선택시</Radio>
			</HStack>
		</RadioGroup>
	);
};
