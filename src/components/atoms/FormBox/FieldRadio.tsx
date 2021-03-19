import React from 'react';
import { FormLabel, HStack, Radio, RadioGroup } from '@chakra-ui/react';
import { Field, FieldProps } from 'formik';
import { FieldGrid, FieldGridItem } from '.';

interface FieldRadioProps {
	name: string;
	label: string;
	options?: {
		value: string;
		label: string;
	}[];
	setFieldValue: (...p) => any;
}

export const FieldRadio = (props: FieldRadioProps) => {
	const { name, label, options, setFieldValue } = props;

	return (
		<Field name={name}>
			{({ field }: FieldProps) => (
				<FieldGrid>
					<FieldGridItem>
						<FormLabel htmlFor={name}>{label}</FormLabel>
					</FieldGridItem>
					<FieldGridItem>
						<RadioGroup name={name} onChange={(periodType) => setFieldValue(name, periodType)} value={field.value}>
							<HStack spacing={4}>
								{options &&
									options.map(({ value, label }) => (
										<Radio key={value} value={value}>
											{label}
										</Radio>
									))}
							</HStack>
						</RadioGroup>
					</FieldGridItem>
				</FieldGrid>
			)}
		</Field>
	);
};
