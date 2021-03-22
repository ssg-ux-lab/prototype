import { AspectRatio, Box, Button, Link, GridItem, Image } from '@chakra-ui/react';
import React from 'react';

export interface ProductItemProps {
	id: string;
	imageUrl: string;
	no: number;
	text: string;
}

export const ProductItem = ({ id, no, imageUrl, text }: ProductItemProps) => (
	<GridItem as="li" listStyleType="none">
		<Link variant="unstyled" id={id}>
			<AspectRatio ratio={1}>
				<Image borderRadius="md" src={imageUrl} alt="상품 이미지" />
			</AspectRatio>
		</Link>
		<div className="content">
			<div id={id}></div>
			<div className="text">{text}</div>
		</div>
	</GridItem>
);
