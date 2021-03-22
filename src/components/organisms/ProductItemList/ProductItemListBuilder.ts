import { v4 as uuidv4 } from 'uuid';
import faker from 'faker/locale/ko';
import { ProductItemProps } from '.';

const ITEMS_PER_PAGE = 20;
const list: ProductItemProps[][] = [];

const itemBuilder = (no: number): ProductItemProps => ({
	id: uuidv4(),
	no,
	imageUrl: `${faker.image.technics()}?random=${Math.round(Math.random() * 1000)}`,
	text: faker.commerce.productName(),
});

const listBuilder = (page: number): ProductItemProps[] => Array.from({ length: ITEMS_PER_PAGE }).map((_, i) => itemBuilder(page * ITEMS_PER_PAGE + i + 1));

export const getList = (page = 0) => {
	if (!list[page]) {
		list[page] = listBuilder(page);
	}
	return list[page];
};
