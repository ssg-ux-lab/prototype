import React, { useState, useEffect } from 'react';
import { Link, Flex, useColorModeValue } from '@chakra-ui/react';
import SvgIcon from '../SvgIcon/SvgIcon';

interface currentPageNumProps {
	currentPageNum: number;
	onClickPrev: any;
	onClickNext: any;
}

const Pagination = ({ currentPageNum, onClickPrev, onClickNext }: currentPageNumProps) => {
	const [currentPage, setCurrentPage] = useState(1);

	const svgColor = useColorModeValue('gray.500', 'gray.600');
	const linkColor = useColorModeValue('gray.700', 'gray.600');
	const currentLinkColor = useColorModeValue('gray.700', 'gray.400');
	const linkBg = useColorModeValue('primary.100', 'primary.700');

	useEffect(() => {
		setCurrentPage(currentPageNum);
	}, [currentPageNum]);

	const handleActive = (e, item) => {
		e.preventDefault();
		setCurrentPage(item);
	};

	return (
		<Flex>
			<Link w="26px" h="26px" display="flex" alignItems="center" justifyContent="center" onClick={() => onClickPrev()}>
				<SvgIcon icon="ChevronLeft" color={svgColor} boxSize={4} />
			</Link>
			{[1, 2, 3, 4, 5].map((item) => {
				return (
					<Link
						href="#"
						color={currentPage === item ? currentLinkColor : linkColor}
						fontSize="sm"
						w="26px"
						h="26px"
						display="flex"
						alignItems="center"
						justifyContent="center"
						borderRadius="50%"
						_active={{ border: 0 }}
						_hover={{ textDecoration: 'none' }}
						key={item}
						backgroundColor={currentPage === item ? linkBg : 'none'}
						onClick={(e) => handleActive(e, item)}
					>
						{item}
					</Link>
				);
			})}
			<Link w="26px" h="26px" display="flex" alignItems="center" justifyContent="center" onClick={() => onClickNext()}>
				<SvgIcon icon="ChevronRight" color={svgColor} boxSize={4} />
			</Link>
		</Flex>
	);
};

export default Pagination;
