import React from 'react';
import { FormLabel, Select } from '@chakra-ui/react';
import { Field, FieldProps } from 'formik';
import SvgIcon from '../SvgIcon/SvgIcon';
import { FieldGrid, FieldGridItem } from '.';

interface FieldSelectProps {
	name: string;
	label: string;
	placeholder?: string;
	options?: {
		value: string;
		label: string;
	}[];
}

export const FieldSelect = (props: FieldSelectProps) => {
	const { name, label, placeholder, options } = props;

	return (
		<Field name={name}>
			{({ field }: FieldProps) => (
				<FieldGrid>
					<FieldGridItem>
						<FormLabel htmlFor={name}>{label}</FormLabel>
					</FieldGridItem>
					<FieldGridItem>
						<Select {...field} w={{ base: '100%', md: '248px' }} size="md" id={name} placeholder={placeholder} icon={<SvgIcon icon="ChevronDown" />}>
							{options &&
								options.map(({ value, label }) => (
									<option key={value} value={value}>
										{label}
									</option>
								))}
						</Select>
					</FieldGridItem>
				</FieldGrid>
			)}
		</Field>
	);
};
