import React, { useCallback } from 'react';
import { FieldType, FormBox, FormikConfigOnSubmit, FormSearch } from '../components/atoms/FormBox';

export default {
	title: '폼/FormBox',
	component: FormBox,
};

export const 폼박스 = () => {
	const handleSubmit = useCallback((values, actions) => {
		// Example
		setTimeout(() => {
			alert(JSON.stringify(values, null, 2));
			actions.setSubmitting(false);
		}, 1000);
	}, []) as FormikConfigOnSubmit;

	return (
		<FormBox
			initialValues={{
				display: 'Y',
				category: 'categoryID0',
				keyword: '',
			}}
			fieldsData={[
				{
					name: 'display',
					type: FieldType.FieldRadio,
					label: '라디오 레이블',
					options: [
						{ value: 'Y', label: '선택' },
						{ value: 'N', label: '미선택' },
					],
				},
				{
					name: 'category',
					type: FieldType.FieldSelect,
					label: '셀렉트 레이블',
					placeholder: '카테고리 전체',
					options: [
						{ value: 'categoryID0', label: '선택0' },
						{ value: 'categoryID1', label: '선택1' },
						{ value: 'categoryID2', label: '선택2' },
						{ value: 'categoryID3', label: '선택3' },
					],
				},
				{ name: 'keyword', type: FieldType.FieldText, label: '텍스트 레이블', placeholder: '플레이스홀더' },
			]}
			handleSubmit={handleSubmit}
		/>
	);
};

export const 폼검색 = () => {
	const handleSubmit = useCallback((values, actions) => {
		// Example
		setTimeout(() => {
			alert(JSON.stringify(values, null, 2));
			actions.setSubmitting(false);
		}, 1000);
	}, []) as FormikConfigOnSubmit;

	return (
		<FormSearch
			initialValues={{
				keyword: '',
			}}
			name="keyword"
			label="FAQ 검색"
			placeholder="검색어를 입력해주세요"
			handleSubmit={handleSubmit}
		/>
	);
};
