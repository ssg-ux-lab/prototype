import React from 'react';
import { Box, HStack, Link } from '@chakra-ui/react';
import { Link as ReachLink } from '@reach/router';
import PageTransitionRouter from './components/atoms/PageTransition/PageTransitionRouter';
import MainPage from './components/pages/MainPage';

const Layout = (props: React.HTMLProps<HTMLElement>) => (
	<Box p={5}>
		{/* <HStack mb={5} spacing={2}>
			<Link as={ReachLink} to="/prototype/" textDecoration="underline">
				메인
			</Link>
		</HStack> */}
		{props.children}
	</Box>
);

function App() {
	return (
		<Layout>
			<PageTransitionRouter>
				<MainPage path="/prototype/" />
			</PageTransitionRouter>
		</Layout>
	);
}

export default App;
