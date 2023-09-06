import { configureStore } from "@reduxjs/toolkit";
import { basketSlicer } from "./slicers/basketSlicer";
import { categorySlicer } from "./slicers/categorySliser";
import { counterPriceSlicer } from "./slicers/counterPriceSlicer";
import { likeSlicer } from "./slicers/likeSlicer";

export const store = configureStore({
	reducer: {
		like: likeSlicer.reducer,
		basket: basketSlicer.reducer,
		counterPrice: counterPriceSlicer.reducer,
		category: categorySlicer.reducer,
	},
});
