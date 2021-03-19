import React from 'react';
import { Button, ButtonGroup, Heading, IconButton, VStack } from '@chakra-ui/react';
import SvgIcon from '../components/atoms/SvgIcon/SvgIcon';

export default {
	title: '폼요소/Button',
};

export const Default = () => (
	<VStack align="left">
		<Heading fontSize="3xl">lg</Heading>

		<ButtonGroup>
			<Button size="lg" colorScheme="primary">
				버튼
			</Button>
			<Button size="lg" colorScheme="gray">
				버튼
			</Button>
			<Button size="lg" colorScheme="darkGray">
				버튼
			</Button>
		</ButtonGroup>
		<ButtonGroup>
			<Button size="lg" disabled colorScheme="primary">
				버튼
			</Button>
			<Button size="lg" disabled colorScheme="gray">
				버튼
			</Button>
			<Button size="lg" disabled colorScheme="darkGray">
				버튼
			</Button>
		</ButtonGroup>

		<Heading fontSize="3xl" pt={5}>
			md
		</Heading>

		<ButtonGroup>
			<Button colorScheme="primary">버튼</Button>
			<Button colorScheme="gray">버튼</Button>
			<Button colorScheme="darkGray">버튼</Button>
		</ButtonGroup>
		<ButtonGroup>
			<Button disabled>버튼</Button>
			<Button disabled colorScheme="gray">
				버튼
			</Button>
			<Button disabled colorScheme="darkGray">
				버튼
			</Button>
		</ButtonGroup>

		<Heading fontSize="3xl" pt={5}>
			sm
		</Heading>

		<ButtonGroup>
			<Button size="sm" colorScheme="primary">
				버튼
			</Button>
			<Button size="sm" colorScheme="gray">
				버튼
			</Button>
			<Button size="sm" colorScheme="darkGray">
				버튼
			</Button>
			<Button variant="outline" size="sm" colorScheme="gray">
				버튼
			</Button>
			<Button variant="outline" size="sm" colorScheme="gray" leftIcon={<SvgIcon icon="DownloadSmall" width={4} mx={-1} />}>
				버튼
			</Button>
		</ButtonGroup>
		<ButtonGroup>
			<Button disabled size="sm" colorScheme="primary">
				버튼
			</Button>
			<Button disabled size="sm" colorScheme="gray">
				버튼
			</Button>
			<Button disabled size="sm" colorScheme="darkGray">
				버튼
			</Button>
			<Button disabled variant="outline" size="sm" colorScheme="gray">
				버튼
			</Button>
			<Button disabled variant="outline" size="sm" colorScheme="gray" leftIcon={<SvgIcon icon="DownloadSmall" width={4} mx={-1} />}>
				버튼
			</Button>
		</ButtonGroup>

		<Heading fontSize="3xl" pt={5}>
			link
		</Heading>

		<ButtonGroup>
			<Button variant="link" size="sm" colorScheme="gray" leftIcon={<SvgIcon icon="Close" width={4} />} iconSpacing={0}>
				버튼
			</Button>
			<Button variant="link" size="sm" colorScheme="gray" rightIcon={<SvgIcon icon="ChevronRight" width="14px" />} iconSpacing={0}>
				버튼
			</Button>
			<Button variant="link" size="sm" colorScheme="gray" leftIcon={<SvgIcon icon="DownloadSmall" width={4} />} iconSpacing={0} textDecoration="underline">
				버튼
			</Button>
		</ButtonGroup>

		<Heading fontSize="3xl" pt={5}>
			IconButton
		</Heading>

		<ButtonGroup>
			<IconButton variant="ghost" icon={<SvgIcon icon="ArrowBack" />} aria-label="뒤로가기" />
			<IconButton variant="ghost" icon={<SvgIcon icon="ExternalLink" />} aria-label="새창으로 열기" />
			<IconButton variant="ghost" icon={<SvgIcon icon="ChevronLeft" />} aria-label="이전" />
			<IconButton variant="ghost" icon={<SvgIcon icon="ChevronRight" />} aria-label="다음" />
			<IconButton variant="ghost" icon={<SvgIcon icon="Close" />} aria-label="닫기" />
			<IconButton variant="ghost" icon={<SvgIcon icon="QuestionOutline" color="gray.600" />} aria-label="도움말" />
		</ButtonGroup>
	</VStack>
);
Default.storyName = '버튼';
