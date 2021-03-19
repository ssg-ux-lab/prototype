import React from 'react';
import { Box, HStack, Link } from '@chakra-ui/react';
import { Link as ReachLink } from '@reach/router';
import PageTransitionRouter from './components/atoms/PageTransition/PageTransitionRouter';
import ApplicationPage from './components/pages/ApplicationPage';
import MainPage from './components/pages/MainPage';

const Layout = (props: React.HTMLProps<HTMLElement>) => (
	<Box p={5}>
		<HStack mb={5} spacing={2}>
			<Link as={ReachLink} to="/" textDecoration="underline">
				메인
			</Link>
			|
			<Link as={ReachLink} to="/application" textDecoration="underline">
				신청
			</Link>
		</HStack>
		{props.children}
	</Box>
);

function App() {
	return (
		<Layout>
			<PageTransitionRouter>
				<MainPage path="/" />
				<ApplicationPage path="/application" />
			</PageTransitionRouter>
		</Layout>
	);
}

export default App;
