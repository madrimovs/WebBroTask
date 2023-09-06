import { createSlice } from "@reduxjs/toolkit";

export const categorySlicer = createSlice({
	name: "category",
	initialState: null,
	reducers: {
		setCategory: (state, action) => {
			return action.payload;
		},
	},
});

export const { setCategory } = categorySlicer.actions;
