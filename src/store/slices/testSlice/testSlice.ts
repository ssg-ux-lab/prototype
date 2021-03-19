import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { incrementAsync, apiTest } from './testActions';

const testSlice = createSlice({
	name: 'testSlice',
	initialState: {
		isLoading: false,
		hasErrors: false,
		count: 0,
		apiTest: '',
	},
	reducers: {
		incrementCount: (state, action: PayloadAction<number>) => {
			state.count += action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(incrementAsync.pending, (state, action) => {
			state.isLoading = true;
		});
		builder.addCase(incrementAsync.fulfilled, (state, action) => {
			state.count += action.payload;
			state.hasErrors = false;
			state.isLoading = false;
		});
		builder.addCase(incrementAsync.rejected, (state, action) => {
			state.hasErrors = true;
			state.isLoading = false;
		});

		builder.addCase(apiTest.pending, (state, action) => {
			state.isLoading = true;
		});
		builder.addCase(apiTest.fulfilled, (state, action) => {
			state.apiTest += action.payload;
			state.hasErrors = false;
			state.isLoading = false;
		});
		builder.addCase(apiTest.rejected, (state, action) => {
			state.hasErrors = true;
			state.isLoading = false;
		});
	},
});

export const { incrementCount } = testSlice.actions;
export default testSlice;
