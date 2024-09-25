import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./AuthSlice";
authReducer;

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable the middleware
    }),
});
