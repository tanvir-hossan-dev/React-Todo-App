import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  card: [],
};

export const card = createSlice({
  name: "Card Slic",
  initialState,
  reducers: {
    addCard: (state, action) => {
      state.card(action.payload);
    },
    deleteCard: (state, action) => {
      state.card = state.card.filter((item) => item._id !== action._id);
    },
  },
});

export const { addCard, deleteCard } = card.actions;
