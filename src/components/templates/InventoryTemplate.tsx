import React, { useState, useEffect } from 'react';
import { dummyFetcher } from '../../utils/dummyUtil';
import PageTransition from '../atoms/PageTransition/PageTransition';
import { getList, ProductItemProps } from '../organisms/ProductItemList';
import { FetchMore } from '../organisms/ProductItemList/FetchMore';
import ProductItemList from '../organisms/ProductItemList/ProductItemList';

interface Props {}

const InventoryTemplate = (props: Props) => {
	const [page, setPage] = useState(0);
	const [list, setList] = useState<ProductItemProps[]>([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		(async () => {
			setLoading(true);
			const list = (await dummyFetcher(getList, page)) as ProductItemProps[];
			setList((prev) => [...prev, ...list]);
			setLoading(false);
		})();
	}, [page]);

	return (
		<PageTransition>
			<ProductItemList list={list} />
			<FetchMore loading={page !== 0 && loading} setPage={setPage} />
		</PageTransition>
	);
};

export default InventoryTemplate;
