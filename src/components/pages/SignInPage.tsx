import React, {useState} from 'react';
import { RouteComponentProps } from '@reach/router';
import { Flex, Box, Heading, FormControl, FormLabel, Input, Button, Text, Link, Stack, Checkbox } from '@chakra-ui/react';
import PageTransition from '../atoms/PageTransition/PageTransition';
import { auth } from '../../firebase';

interface Props extends RouteComponentProps {}

const SignInPage = (props: Props) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState<string | null>(null);
	const signInWithEmailAndPasswordHandler = (event, email, password) => {
		event.preventDefault();
    auth.signInWithEmailAndPassword(email, password).catch(error => {
      setError("Error signing in with password and email!");
      console.error("Error signing in with password and email", error);
    });
	};

	const onChangeHandler = (event) => {
		const { name, value } = event.currentTarget;

		if (name === 'userEmail') {
			setEmail(value);
		} else if (name === 'userPassword') {
			setPassword(value);
		}
	};

	return (
		<PageTransition>
			<Flex minHeight="100vh" width="full" align="center" justifyContent="center">
				<Box borderWidth={1} px={4} width="full" maxWidth="500px" borderRadius={4} textAlign="center" boxShadow="lg">
					<Box p={4}>
						<Box textAlign="center">
							<Heading>Sign In</Heading>
						</Box>
						<Box my={8} textAlign="left">
							<form>
								<FormControl>
									<FormLabel>Email</FormLabel>
									<Input type="email" placeholder="Enter your email address" value={email} onChange={(event) => onChangeHandler(event)} />
								</FormControl>

								<FormControl mt={4}>
									<FormLabel>Password</FormLabel>
									<Input type="password" placeholder="Enter your password" value={password} onChange={(event) => onChangeHandler(event)} />
								</FormControl>

								<Stack isInline justifyContent="space-between" mt={4}>
									<Box>
										<Checkbox>Remember Me</Checkbox>
									</Box>
									<Box>
										<Link color={`primary.500`}>Forgot your password?</Link>
									</Box>
								</Stack>

								<Button
									colorScheme="primary"
									width="full"
									mt={4}
									onClick={(event) => {
										signInWithEmailAndPasswordHandler(event, email, password);
									}}
								>
									Sign In
								</Button>
							</form>
						</Box>
					</Box>
				</Box>
			</Flex>
		</PageTransition>
	);
};

export default SignInPage;
