import { combineReducers, configureStore } from '@reduxjs/toolkit';
import testSlice from './slices/testSlice/testSlice';
import logger from 'redux-logger';

const rootReducer = combineReducers({
	test: testSlice.reducer,
});

const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof rootReducer>;
export type RootDispatch = typeof store['dispatch'];
export default store;
