import { createAsyncThunk } from '@reduxjs/toolkit';
import ApiUtil from '../../../utils/ApiUtil';

export const incrementAsync = createAsyncThunk<number, number>('testSlice/incrementAsync', async (diff) => {
	await new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log('fake api call');
			resolve(null);
		}, 1000);
	});
	return diff;
});

export const apiTest = createAsyncThunk('testSlice/apiTest', async () => {
	return await ApiUtil.get('/hello');
});
