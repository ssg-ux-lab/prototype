import React, { useCallback } from 'react';
import { RouteComponentProps } from '@reach/router';
import {
	Flex,
	Box,
	Heading,
	FormControl,
	FormLabel,
	Input,
	Button,
	Text,
	Link,
	Stack,
	Checkbox,
} from '@chakra-ui/react';
import { Link as ReachLink } from '@reach/router';
import PageTransition from '../atoms/PageTransition/PageTransition';
import { auth } from '../../firebase';
import { Field, FieldProps, Form, Formik } from 'formik';
import { FormikConfigOnSubmit } from '../atoms/FormBox';

interface Props extends RouteComponentProps {}

const SignInPage = (props: Props) => {
	const handleSubmit = useCallback(async ({ email, password }, actions) => {
		await auth.signInWithEmailAndPassword(email, password).catch((error) => {
			console.error(error);
		});
		actions.setSubmitting(false);
	}, []) as FormikConfigOnSubmit;

	return (
		<PageTransition>
			<Flex minHeight="100vh" align="center" justifyContent="center">
				<Box borderWidth={1} px={4} width="full" maxWidth="400px" borderRadius={4} textAlign="center" boxShadow="lg">
					<Box py={8} px={4}>
						<Heading pb={8} textAlign="center">
							SSG UX Lab
						</Heading>
						<Formik initialValues={{ email: '', password: '' }} onSubmit={handleSubmit}>
							{({ isSubmitting, setFieldValue, resetForm }) => (
								<Form>
									<Stack spacing={5}>
										<Field name="email">
											{({ field }: FieldProps) => (
												<FormControl isRequired>
													<FormLabel htmlFor="email">이메일</FormLabel>
													<Input {...field} type="email" />
												</FormControl>
											)}
										</Field>
										<Field name="password">
											{({ field }: FieldProps) => (
												<FormControl isRequired>
													<FormLabel htmlFor="password">비밀번호</FormLabel>
													<Input {...field} type="password" placeholder="소문자, 대문자, 특수문자 포함 8~12 글자" />
												</FormControl>
											)}
										</Field>
									</Stack>
									<Field name="remember">
										{({ field }: FieldProps) => (
											<Stack isInline justifyContent="space-between" mt={4}>
												<Box>
													<Checkbox {...field}>기억하기</Checkbox>
												</Box>
												<Box>
													<Link to="/signUp" as={ReachLink} color="teal.800" textDecoration="underline">
														회원가입
													</Link>
												</Box>
											</Stack>
										)}
									</Field>
									<Button colorScheme="darkGray" width="full" mt={4} type="submit" isLoading={isSubmitting}>
										로그인
									</Button>
								</Form>
							)}
						</Formik>
					</Box>
				</Box>
			</Flex>
		</PageTransition>
	);
};

export default SignInPage;
