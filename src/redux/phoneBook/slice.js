import { createSlice } from '@reduxjs/toolkit';
import {
  addContactThunk,
  deleteContactThunk,
  fetchContactsThunk,
} from './operations';

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};

export const slice = createSlice({
  name: 'phoneBook',
  initialState,
  reducers: {
    setFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContactsThunk.fulfilled, (state, { payload }) => {
        state.contacts.items = payload;
      })
      .addCase(addContactThunk.fulfilled, (state, { payload }) => {
        state.contacts.items.unshift(payload);
      })
      .addCase(deleteContactThunk.fulfilled, (state, { payload }) => {
        state.contacts.items = state.contacts.items.filter(
          el => el.id !== payload
        );
      });
  },
});
export const { setContacts, deleteContacts, setFilter } = slice.actions;
export const phoneBookReducer = slice.reducer;
