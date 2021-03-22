import { Grid } from '@chakra-ui/react';
import React from 'react';
import { ProductItemProps, ProductItem } from './ProductItem';

interface ProductItemListProps {
	list: ProductItemProps[];
}

const ProductItemList = ({ list }: ProductItemListProps) => (
	<Grid as="ul" templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }} gap={5}>
		{list.map((item, i) => (
			<ProductItem {...item} key={`item_${i}`} />
		))}
	</Grid>
);

export default ProductItemList;
