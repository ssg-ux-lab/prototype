import React from 'react';
import { Heading, Grid, GridItem } from '@chakra-ui/react';

interface PaperlHeaderProps extends React.HTMLProps<HTMLElement> {
	title: string;
	leftAddon?: React.ReactNode;
	rightAddon?: React.ReactNode;
}

const PaperHeader = (props: PaperlHeaderProps) => {
	const { title, leftAddon, rightAddon } = props;
	return (
		<Grid templateColumns="minmax(10px, 1fr) auto minmax(50px, 1fr)" borderBottomWidth={1} alignItems="center" px={{ base: 2, md: 5 }}>
			<GridItem justifySelf="start">{leftAddon && leftAddon}</GridItem>
			<GridItem py={{ base: 4, md: 6 }}>
				<Heading as="h3" fontSize="2xl" fontWeight="bold" lineHeight="1">
					{title}
				</Heading>
			</GridItem>
			<GridItem justifySelf="end">{rightAddon && rightAddon}</GridItem>
		</Grid>
	);
};

export default PaperHeader;
