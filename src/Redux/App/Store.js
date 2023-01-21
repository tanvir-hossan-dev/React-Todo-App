import { configureStore } from "@reduxjs/toolkit";
import { card } from "../features/card/card";

const Store = configureStore({
  reducer: {
    card: card.reducer,
  },
});
export default Store;
