import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
  filter: '',
};

export const slice = createSlice({
  name: 'phoneBook',
  initialState,
  reducers: {
    setContacts: (state, { payload }) => {
      state.contacts.push(payload);
    },
    deleteContacts: (state, { payload }) => {
      state.contacts = state.contacts.filter(el => el.id !== payload);
    },
    setFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
});
export const { setContacts, deleteContacts, setFilter } = slice.actions;
export const phoneBookReducer = slice.reducer;
