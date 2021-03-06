import React, { useRef, useEffect } from 'react';

interface FetchMoreProps {
	loading: boolean;
	setPage: (...p: any) => any;
}

export const FetchMore = ({ loading, setPage }: FetchMoreProps) => {
	const fetchMoreTrigger = useRef<HTMLDivElement>(null);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	const fetchMoreObserver = new IntersectionObserver(([{ isIntersecting }]) => {
		if (isIntersecting) setPage((prev: number) => prev + 1);
	});

	useEffect(() => {
		fetchMoreTrigger.current && fetchMoreObserver.observe(fetchMoreTrigger.current);
		return () => {
			// eslint-disable-next-line react-hooks/exhaustive-deps
			fetchMoreTrigger.current && fetchMoreObserver.unobserve(fetchMoreTrigger.current);
		};
	}, [fetchMoreObserver]);

	return <div id="fetchMore" className={loading ? 'loading' : ''} ref={fetchMoreTrigger} />;
};
/**
 * 일반적으로 쓰지 않게 되는 시점에
 * unobserve / removeEventListener 등을 해줘야한다는 것을 잊어버리거나,
 * 혹은 생각해냈더라도 코드 구현이 애매한 경우가 종종 있는데,
 * React에서는 useEffect 내에서
 * observe - unobserve / addEventListener - removeEvenntListener를 쌍으로 매칭하여
 * 구현하는 것이 자연스럽기 때문에 익숙해지면 잊어버릴 일이 없게 됩니다.
 */
