import { Select, Stack } from '@chakra-ui/react';
import React, { useCallback } from 'react';
import SvgIcon from '../components/atoms/SvgIcon/SvgIcon';

export default {
	title: '폼요소/Select',
	component: Select,
};

export const 활성 = () => {
	const handleChange = useCallback((e) => {
		const { value } = e.target;
		console.log(value);
	}, []);

	return (
		<Stack spacing="4">
			<Select w="118px" size="sm" placeholder="분류" icon={<SvgIcon icon="ChevronDown" />} onChange={handleChange}>
				<option value="1">오픈마켓</option>
				<option value="2">Y/N</option>
				<option value="3">선택값3</option>
			</Select>

			<Select w="184px" size="md" placeholder="분류를 선택해주세요" icon={<SvgIcon icon="ChevronDown" />} onChange={handleChange}>
				<option value="1">선택값1</option>
				<option value="2">선택값2</option>
				<option value="3">선택값3</option>
			</Select>

			<Select w="196px" size="lg" placeholder="분류를 선택해주세요" icon={<SvgIcon icon="ChevronDown" />} onChange={handleChange}>
				<option value="1">선택값1</option>
				<option value="2">선택값2</option>
				<option value="3">선택값3</option>
			</Select>
		</Stack>
	);
};

export const 비활성 = () => {
	const handleChange = useCallback((e) => {
		const { value } = e.target;
		console.log(value);
	}, []);

	return (
		<Stack spacing="4">
			<Select w="118px" size="sm" placeholder="분류" icon={<SvgIcon icon="ChevronDown" />} onChange={handleChange} isDisabled>
				<option value="1">오픈마켓</option>
				<option value="2">Y/N</option>
				<option value="3">선택값3</option>
			</Select>

			<Select w="184px" size="md" placeholder="분류를 선택해주세요" icon={<SvgIcon icon="ChevronDown" />} onChange={handleChange} isDisabled>
				<option value="1">선택값1</option>
				<option value="2">선택값2</option>
				<option value="3">선택값3</option>
			</Select>

			<Select w="196px" size="lg" placeholder="분류를 선택해주세요" icon={<SvgIcon icon="ChevronDown" />} onChange={handleChange} isDisabled>
				<option value="1">선택값1</option>
				<option value="2">선택값2</option>
				<option value="3">선택값3</option>
			</Select>
		</Stack>
	);
};
