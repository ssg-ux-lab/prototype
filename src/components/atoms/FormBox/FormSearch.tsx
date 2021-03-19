import React, { useCallback } from 'react';
import { Box, Button, Flex, FormControl, FormLabel, FormErrorMessage, HStack, Input, VisuallyHidden } from '@chakra-ui/react';
import { Formik, Form, Field, FieldProps } from 'formik';
import { FormikConfigOnSubmit } from '.';

interface FormSearchProps {
	initialValues?: any;
	name: string;
	label: string;
	placeholder?: string;
	handleSubmit: FormikConfigOnSubmit;
}

export const FormSearch = (props: FormSearchProps) => {
	const { initialValues, name, label, placeholder, handleSubmit } = props;

	const validate = useCallback((value) => {
		let error;
		if (!value) {
			error = '검색어를 입력해주세요.';
		}
		return error;
	}, []);

	return (
		<Formik initialValues={initialValues} onSubmit={handleSubmit}>
			{({ isSubmitting }) => (
				<Form>
					<Field name={name} validate={validate}>
						{({ field, form }) => (
							<FormControl isInvalid={form.errors[name] && form.touched[name]}>
								<Flex py={{ base: 2, md: 5 }} justify="center">
									<Box w={{ base: '100%', md: 'auto' }}>
										<VisuallyHidden>
											<FormLabel htmlFor={name}>{label}</FormLabel>
										</VisuallyHidden>
										<HStack justify="center">
											<Input {...field} w={{ base: '100%', md: '600px' }} size="md" transition="none" />
											<Button colorScheme="darkGray" type="submit" isLoading={isSubmitting}>
												검색
											</Button>
										</HStack>
										<FormErrorMessage>{form.errors[name]}</FormErrorMessage>
									</Box>
								</Flex>
							</FormControl>
						)}
					</Field>
				</Form>
			)}
		</Formik>
	);
};
