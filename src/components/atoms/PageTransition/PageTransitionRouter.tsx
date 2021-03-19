import React from 'react';
import { Router, Location } from '@reach/router';
import { AnimatePresence } from 'framer-motion';

const PageTransitionRouter = ({ children }: { children: React.ReactNode }) => (
	<Location>
		{({ location }) => (
			<AnimatePresence initial={false} exitBeforeEnter>
				<Router location={location} key={location.key}>
					{children}
				</Router>
			</AnimatePresence>
		)}
	</Location>
);
export default PageTransitionRouter;
