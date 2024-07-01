import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations.js';
import { logout } from '/src/redux/auth/operations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [], loading: false, error: null },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => {
        state.error = null;
        state.loading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchContacts.rejected, state => {
        state.loading = false;
        state.error = true;
      })
      .addCase(addContact.pending, state => {
        state.error = null;
        state.loading = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.loading = false;
      })
      .addCase(addContact.rejected, state => {
        state.loading = false;
        state.error = true;
      })
      .addCase(deleteContact.pending, state => {
        state.error = null;
        state.loading = true;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload.id);
        state.loading = false;
      })
      .addCase(deleteContact.rejected, state => {
        state.loading = false;
        state.error = true;
      })
      .addCase(logout.pending, state => {
        state.error = null;
        state.loading = true;
      })
      .addCase(logout.fulfilled, state => {
        state.items = [];
        state.loading = false;
        state.error = null;
      })
      .addCase(logout.rejected, state => {
        state.loading = false;
        state.error = true;
      });
  },
});

export default contactsSlice.reducer;
