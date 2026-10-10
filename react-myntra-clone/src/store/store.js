import { configureStore } from "@reduxjs/toolkit";
import itemsSlice from "../features/ItemSlice";

export const myntraStore = configureStore({
  reducer: {
    items: itemsSlice,
  },
});

export default myntraStore;
