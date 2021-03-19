import React from 'react';
import { Stack, StackDivider, Button } from '@chakra-ui/react';
import { Formik, Form, FormikHelpers } from 'formik';
import { FormButtonGroup, FieldSelect, FieldText, FieldRadio } from '.';

export enum FieldType {
	FieldSelect = 'FIELD_SELECT',
	FieldText = 'FIELD_TEXT',
	FieldRadio = 'FIELD_RADIO',
}

export type FormikConfigOnSubmit = ((values: any, formikHelpers: FormikHelpers<any>) => void | Promise<any>) & (() => unknown);

export interface FormBoxInitialValues {
	display?: string;
	category?: string;
	keyword?: string;
}

interface FormBoxProps {
	initialValues: FormBoxInitialValues;
	fieldsData: {
		name: string;
		type: FieldType;
		label: string;
		labelHelpText?: string;
		placeholder?: string;
		options?: {
			value: string;
			label: string;
		}[];
	}[];
	handleSubmit: FormikConfigOnSubmit;
}

export const FormBox = (props: FormBoxProps) => {
	const { initialValues, fieldsData, handleSubmit } = props;

	return (
		<Formik initialValues={initialValues} onSubmit={handleSubmit}>
			{({ isSubmitting, setFieldValue, resetForm }) => (
				<Form>
					<Stack divider={<StackDivider borderColor={{ base: 'transparent', md: 'inherit' }} />} spacing={4} py={4} borderBottomWidth={{ md: '1px' }}>
						{fieldsData.map(({ name, type, ...rest }) => {
							switch (type) {
								case FieldType.FieldSelect:
									return <FieldSelect key={name} name={name} {...rest} />;
								case FieldType.FieldText:
									return <FieldText key={name} name={name} {...rest} />;
								case FieldType.FieldRadio:
									return <FieldRadio key={name} name={name} {...rest} setFieldValue={setFieldValue} />;
								default:
									return null;
							}
						})}
					</Stack>
					<FormButtonGroup>
						<Button colorScheme="gray" onClick={() => resetForm()}>
							초기화
						</Button>
						<Button colorScheme="primary" type="submit" isLoading={isSubmitting}>
							조회
						</Button>
					</FormButtonGroup>
				</Form>
			)}
		</Formik>
	);
};
