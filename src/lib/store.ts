// src/lib/store.ts
import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/user/userSlice";

// Create the store instance
export const makeStore = () =>
  configureStore({
    reducer: { userSlice },
  });

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
