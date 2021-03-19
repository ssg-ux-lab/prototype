import React from 'react';
import { motion } from 'framer-motion';

const PageTransition = (props: React.HTMLProps<HTMLElement>) => {
	return (
		<motion.div initial="initial" animate="animate" exit="exit">
			{props.children}
		</motion.div>
	);
};

export default PageTransition;
