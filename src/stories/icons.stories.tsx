import React from 'react';
import { Box, Center, Text, Grid } from '@chakra-ui/react';
import SvgIcon, { svgIcons } from '../components/atoms/SvgIcon/SvgIcon';

export default {
	title: '아이콘/SvgIcon',
};

export const Default = (args) => (
	<>
		<Grid templateColumns="repeat(3, 1fr)" gap={10}>
			{[...svgIcons].sort().map((icon, index) => (
				<Box key={index}>
					<Center h={10}>
						<SvgIcon icon={icon} color={args.color} width={args.width} />
					</Center>
					<Center>
						<Text fontSize="xs">{`
              <SvgIcon icon="${icon}"
                ${args.color !== 'current' ? ' color="' + args.color + '"' : ''}
                ${args.width !== 6 ? ' width={' + args.boxSize + '}' : ''} 
              />
            `}</Text>
					</Center>
				</Box>
			))}
		</Grid>
	</>
);
Default.args = {
	width: 6,
	color: 'current',
};
Default.argTypes = {
	width: {
		control: {
			type: 'select',
			options: [4, 5, 6],
		},
	},
	color: {
		control: {
			type: 'select',
			options: ['current', 'gray.100', 'gray.200', 'gray.300', 'gray.400', 'gray.500', 'gray.600', 'gray.700', 'gray.800', 'primary.500'],
		},
	},
};
Default.storyName = 'SVG 아이콘';
