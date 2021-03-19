import React, { useRef } from 'react';
import {
	Button,
	Center,
	Text,
	AlertDialog,
	AlertDialogBody,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogCloseButton,
	AlertDialogContent,
	AlertDialogOverlay,
	ListItem,
	OrderedList,
	Box,
	List,
	IconButton,
	useDisclosure,
} from '@chakra-ui/react';
import SvgIcon from '../components/atoms/SvgIcon/SvgIcon';

export default {
	title: '오버레이/Modal',
};

export const AlertDialogDefault = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const cancelRef = useRef<HTMLButtonElement>(null);

	return (
		<>
			<Button colorScheme="primary" onClick={onOpen}>
				알림
			</Button>

			<AlertDialog isOpen={isOpen} leastDestructiveRef={cancelRef} onClose={onClose}>
				<AlertDialogOverlay>
					<AlertDialogContent>
						<AlertDialogHeader>알림</AlertDialogHeader>
						<AlertDialogCloseButton color="gray.100" onClose={onClose} />

						<AlertDialogBody>
							<Center minH="100px">
								<Text fontSize="2xl" fontWeight="bold">
									상품번호를 입력해주세요
								</Text>
							</Center>
						</AlertDialogBody>

						<AlertDialogFooter>
							<Button size="lg" colorScheme="darkGray" ref={cancelRef} onClick={onClose}>
								확인
							</Button>
						</AlertDialogFooter>
					</AlertDialogContent>
				</AlertDialogOverlay>
			</AlertDialog>
		</>
	);
};
AlertDialogDefault.storyName = '알림';

export const HelpDialog = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const cancelRef = useRef<HTMLButtonElement>(null);

	return (
		<>
			<IconButton onClick={onOpen} variant="ghost" icon={<SvgIcon icon="QuestionOutline" color="gray.600" />} aria-label="도움말" />

			<AlertDialog isOpen={isOpen} leastDestructiveRef={cancelRef} onClose={onClose}>
				<AlertDialogOverlay>
					<AlertDialogContent>
						<AlertDialogHeader>도움말</AlertDialogHeader>
						<AlertDialogCloseButton color="gray.100" onClose={onClose} />

						<AlertDialogBody>
							<Box>
								<Text color="gray.800" fontSize="2xl" fontWeight="bold" mb={4}>
									공문 발신과 수신은 어떻게 하나요?
								</Text>
								<OrderedList fontSize="sm" color="gray.800" spacing="4px">
									<ListItem>[공문 관리] &gt; [공문 발신 관리]에서 공문등록 버튼을 누릅니다.</ListItem>
									<ListItem>문서 번호는 &apos;연도+월_번호&apos; 형식으로 작성합니다. 예) 20200712_01호</ListItem>
									<ListItem>공문 첨부 시 반드시 날인이 들어간 공문을 첨부해주세요. </ListItem>
									<ListItem>수신대상에서는 공문을 수신할 MD를 선택해주세요.</ListItem>
								</OrderedList>
							</Box>
							<Box mt={6} pt={6} borderTop="1px" borderColor="gray.200">
								<Text color="gray.800" fontSize="2xl" fontWeight="bold" mb={4}>
									지표 정의
								</Text>
								<List fontSize="sm" color="gray.800" spacing="4px">
									<ListItem>오늘 출고필요 : 출고기준일이 오늘이며, 출고완료 처리되지 않은 주문 건</ListItem>
									<ListItem>결품삭제 가능: 자동결품 등록되어 고객에게 품절 안내 알림톡을 보내기 전 상태의 주문</ListItem>
									<ListItem>회수확인 지연 : 회수지시일 기준 7일 이상 회수확인 미처리된 주문 건</ListItem>
									<ListItem>회수완료 지연 : 회수확인 후 3일이상 회수완료 미처리된 주문 건</ListItem>
									<ListItem>상품 Q&amp;A 답변필요 : 최근 1개월 등록된 문의건 중 답변되지 않은 건</ListItem>
								</List>
							</Box>
						</AlertDialogBody>
					</AlertDialogContent>
				</AlertDialogOverlay>
			</AlertDialog>
		</>
	);
};
HelpDialog.storyName = '도움말';
