import { configureStore } from "@reduxjs/toolkit";
import itemsSliceReducer from "../features/itemsSlice";
import fetchStatusReducer from "../features/fetchStatusSlice";
import bagSliceReducer from "../features/bagSlice";

export const myntraStore = configureStore({
  reducer: {
    items: itemsSliceReducer,
    fetchStatus: fetchStatusReducer,
    bag: bagSliceReducer,
  },
});

export default myntraStore;
