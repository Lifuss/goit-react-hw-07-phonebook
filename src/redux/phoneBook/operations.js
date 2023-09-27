import axios from 'axios';

const { createAsyncThunk } = require('@reduxjs/toolkit');

const contactInstance = axios.create({
  baseURL: 'https://6514270e8e505cebc2ead514.mockapi.io/',
});

export const fetchContactsThunk = createAsyncThunk(
  'fetchContacts',
  async (_, thunkAPI) => {
    try {
      const { data } = await contactInstance.get('/contacts');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContactThunk = createAsyncThunk(
  'addContact',
  async (body, thunkAPI) => {
    console.log(body);
    try {
      const { data } = await contactInstance.post('/contacts', body);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  'deleteContact',
  async (id, thunkAPI) => {
    try {
      await contactInstance.delete(`/contacts/${id}`);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
