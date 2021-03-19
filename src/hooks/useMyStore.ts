import { useDispatch, useSelector } from 'react-redux';
import { RootDispatch, RootState } from '../store/store';

const useMyStore = () => {
	const rootState = useSelector((state: RootState) => state);
	const dispatch = useDispatch<RootDispatch>();

	return { rootState, dispatch };
};

export default useMyStore;
