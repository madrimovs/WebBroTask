import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	basket: [],
};

export const basketSlicer = createSlice({
	name: "basket",
	initialState: initialState,
	reducers: {
		addBasket: (state, action) => {
			state.basket.push(action.payload);
		},
		removeBasket: (state, action) => {
			state.basket = state.basket.filter((product) => {
				if (product.id !== action.payload.id) {
					return true;
				}
			});
		},
	},
});

export const { addBasket, removeBasket } = basketSlicer.actions;
