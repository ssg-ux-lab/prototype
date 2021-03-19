import React from 'react';
import RadioRectGroup from '../components/atoms/RadioRect/RadioRectGroup';

export default {
	title: '폼요소/Input/RadioRectGroup',
	components: RadioRectGroup,
};

export const 기본 = () => {
	return (
		<RadioRectGroup
			name="radioName"
			options={[
				{ value: '0', label: '선택1' },
				{ value: '1', label: '선택2' },
				{ value: '2', label: '선택3' },
			]}
			defaultValue="0"
		/>
	);
};
