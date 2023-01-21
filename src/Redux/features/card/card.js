import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  card: [],
};

export const card = createSlice({
  name: "Card Slic",
  initialState,
  reducers: {
    addCard: (state, action) => {
      state.card.push(action.payload);
    },
    deleteCard: (state, action) => {
      state.card = state.card.filter((item) => item._id !== action.payload);
    },
    editCard: (state, action) => {
      state.card = state.card.map((item) =>
        item._id === action.payload._id ? { ...item, name: action.payload.name, sector: action.payload.sector } : item
      );
    },
  },
});

export const { addCard, deleteCard, editCard } = card.actions;
