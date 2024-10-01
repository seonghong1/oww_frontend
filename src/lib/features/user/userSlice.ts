import { createSlice } from "@reduxjs/toolkit";

type UserState = {
  user: {
    theme: "dark" | "light";
  };
};

const initialState = {
  user: {
    theme: "light",
  },
} as UserState;

export const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    reset: () => initialState,
    changeTheme: () => {
      initialState.user.theme = "dark";
    },
  },
});

export const { changeTheme, reset } = user.actions;
export default user.reducer;
