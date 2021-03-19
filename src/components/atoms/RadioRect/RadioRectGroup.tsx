import { HStack } from '@chakra-ui/react';
import { useFormikContext } from 'formik';
import React from 'react';
import { FormBoxInitialValues } from '../FormBox';
import RadioRect from './RadioRect';

export interface RadioRectGroupProps {
	options: {
		value: string;
		label: string;
	}[];
	name: string;
	defaultValue?: string;
}

const RadioRectGroup = (props: RadioRectGroupProps) => {
	const { options, name } = props;
	const formikContext = useFormikContext();
	const formValues = formikContext.values as FormBoxInitialValues;
	const formValue = formValues[name];

	return (
		<HStack spacing="0">
			{options?.map(({ value, label }) => {
				return <RadioRect key={value} name={name} value={value} label={label} isChecked={formValue === value} />;
			})}
		</HStack>
	);
};

export default RadioRectGroup;
