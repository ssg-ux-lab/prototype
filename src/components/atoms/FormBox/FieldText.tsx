import React from 'react';
import { FormLabel, Input } from '@chakra-ui/react';
import { Field, FieldProps } from 'formik';
import { FieldGrid, FieldGridItem } from '.';

interface FieldTextProps {
	name: string;
	label: string;
	placeholder?: string;
}

export const FieldText = (props: FieldTextProps) => {
	const { name, label, placeholder } = props;

	return (
		<Field name={name}>
			{({ field }: FieldProps) => (
				<FieldGrid>
					<FieldGridItem>
						<FormLabel htmlFor={name}>{label}</FormLabel>
					</FieldGridItem>
					<FieldGridItem>
						<Input {...field} w={{ base: '100%', md: '248px' }} size="md" />
					</FieldGridItem>
				</FieldGrid>
			)}
		</Field>
	);
};
