import React, { useContext } from 'react';
import { Box, HStack, Link } from '@chakra-ui/react';
import { Link as ReachLink } from '@reach/router';
import PageTransitionRouter from './components/atoms/PageTransition/PageTransitionRouter';
import { UserContext } from './providers/UserProvider';
import MainPage from './components/pages/MainPage';
import SignInPage from './components/pages/SignInPage';
import SignUpPage from './components/pages/SignUpPage';
import PasswordResetPage from './components/pages/PasswordResetPage';

function App() {
	const user = useContext(UserContext);
	return (
		<Box p={5}>
			{user ? (
				<MainPage />
			) : (
				<PageTransitionRouter>
					<SignInPage path="/signIn" default />
					<SignUpPage path="/signUp" />
					<PasswordResetPage path="/passwordReset" />
				</PageTransitionRouter>
			)}
		</Box>
	);
}

export default App;
