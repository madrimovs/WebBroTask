import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	like: [],
};

export const likeSlicer = createSlice({
	name: "like",
	initialState: initialState,
	reducers: {
		add: (state, action) => {
			state.like.push(action.payload);
		},
		remove: (state, action) => {
			state.like = state.like.filter((product) => {
				if (product.id !== action.payload.id) {
					return true;
				}
			});
		},
	},
});

export const { add, remove } = likeSlicer.actions;
