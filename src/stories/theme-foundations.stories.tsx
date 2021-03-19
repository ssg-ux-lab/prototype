import React from 'react';
import { Box, BoxProps, Flex, Grid, Text, Heading, Tag } from '@chakra-ui/react';
import foundations from '../theme/foundations';

export default {
	title: '테마',
};

interface FoundationItemProps extends BoxProps {
	title: string;
	children: React.ReactNode;
}

const FoundationItem = (props: FoundationItemProps) => {
	const { title, children, ...rest } = props;

	return (
		<Box mb={10} {...rest}>
			<Heading fontSize="3xl" mb={2}>
				{title}
			</Heading>
			{children}
		</Box>
	);
};

interface FoundationValueProps extends BoxProps {
	value: string;
}

const FoundationValue = (props: FoundationValueProps) => {
	const { value, ...rest } = props;

	return (
		<Box mt={-2} mb={2} {...rest}>
			<Tag variant="subtle" size="sm" verticalAlign="middle" mr="1">
				css
			</Tag>
			<Text as="span" fontSize="sm" color="gray.500" letterSpacing={0}>
				{value}
			</Text>
		</Box>
	);
};

interface ColorItemProps {
	name?: string;
	value: string;
}

const ColorItem = ({ name, value }: ColorItemProps) => (
	<Flex alignItems="center" mt="2">
		<Box background={value} boxSize="45px" flexShrink={0} borderRadius="sm" />
		<Box pl="10px">
			{name && (
				<Heading as="h3" fontSize="md" mb={1} letterSpacing={0}>
					{name.toString()}
				</Heading>
			)}
			<FoundationValue value={value.toString()} my={0} />
		</Box>
	</Flex>
);

export const color = () => (
	<>
		{Object.keys(foundations.colors).map((key) => (
			<FoundationItem title={key} key={key}>
				{typeof foundations.colors[key] === 'object' ? (
					<Grid templateColumns="repeat(3, 1fr)" gap={1}>
						{Object.keys(foundations.colors[key]).map((c) => (
							<ColorItem key={c} name={c} value={foundations.colors[key][c]} />
						))}
					</Grid>
				) : (
					<ColorItem value={foundations.colors[key]} />
				)}
			</FoundationItem>
		))}
	</>
);

export const fontSize = () => (
	<>
		{Object.keys(foundations.fontSizes).map((key) => (
			<FoundationItem title={key} key={key}>
				<FoundationValue value={foundations.fontSizes[key]} />
				<Text fontSize={key}>SSG.COM 에스에스지닷컴 동해물과 백두산이 마르고 닳도록 하느님이 보우하사</Text>
			</FoundationItem>
		))}
	</>
);

export const lineHeight = () => (
	<>
		{Object.keys(foundations.lineHeights).map((key) => (
			<FoundationItem title={key} key={key}>
				<FoundationValue value={foundations.lineHeights[key].toString()} />
				<Text lineHeight={foundations.lineHeights[key]}>
					SSG.COM 에스에스지닷컴 동해물과 백두산이 마르고 닳도록 하느님이 보우하사 SSG.COM 에스에스지닷컴 동해물과 백두산이 마르고 닳도록 하느님이 보우하사
				</Text>
			</FoundationItem>
		))}
	</>
);
