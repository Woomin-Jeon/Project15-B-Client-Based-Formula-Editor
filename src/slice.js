import {createSlice} from "@reduxjs/toolkit";

const {reducer, actions} = createSlice({
	name: "FEditor",
	initialState: {
		count: 0,
	},
	reducers: {
		setCount(state, {payload}) {
			return {...state, count: payload};
		},
		resetCount(state) {
			return {...state, count: 0};
		},
	},
});

export const {
	setCount,
	resetCount,
} = actions;

export default reducer;
