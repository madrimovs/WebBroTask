import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	countPrice: 1,
};

export const counterPriceSlicer = createSlice({
	name: "countPrice",
	initialState: initialState,
	reducers: {
		increment: (state, action) => {
			state.countPrice += 1;
		},
		decrement: (state, action) => {
			state.countPrice -= 1;
		},
	},
});

export const countPriceActions = counterPriceSlicer.actions;
