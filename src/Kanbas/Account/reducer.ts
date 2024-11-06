// src/reducers/accountReducer.ts

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: {
    id: "",             // Default or placeholder ID
    name: "Guest",      // Default name, could be "Guest" or empty string
    role: "Guest",      // Default role, e.g., "Guest", "Visitor", or "User"
  },
};


const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      // Ensure that the payload includes a role property
      state.currentUser = action.payload; // e.g., { id: "1", name: "John Doe", role: "Student" }
    },
  },
});

export const { setCurrentUser } = accountSlice.actions;
export default accountSlice.reducer;
