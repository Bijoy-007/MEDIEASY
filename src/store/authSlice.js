import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    setIsLoggedin: (state) => {
      const token = localStorage.getItem("token");
      if (token) {
        state.isLoggedIn = true;
      } else {
        state.isLoggedIn = false;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { setIsLoggedin } = authSlice.actions;

export default authSlice.reducer;
