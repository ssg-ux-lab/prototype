import React from 'react';
import { forwardRef, ChakraProps, chakra } from '@chakra-ui/react';
import { motion, MotionProps, isValidMotionProp } from 'framer-motion';

export const transition = { duration: 0.1, ease: [0.6, 0.01, -0.05, 0.9] };

const MotionBox = motion(
	forwardRef<MotionProps & ChakraProps, 'div'>((props, ref) => {
		const chakraProps = Object.fromEntries(Object.entries(props).filter(([key]) => !isValidMotionProp(key)));

		return <chakra.div ref={ref} {...chakraProps} />;
	})
);

export default MotionBox;
