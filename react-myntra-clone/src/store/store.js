import { configureStore } from "@reduxjs/toolkit";
import itemsSliceReducer from "../features/itemsSlice";
import fetchStatusReducer from "../features/fetchStatusSlice";

export const myntraStore = configureStore({
  reducer: {
    items: itemsSliceReducer,
    fetchStatus: fetchStatusReducer,
  },
});

export default myntraStore;
