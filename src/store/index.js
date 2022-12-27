import { configureStore } from "@reduxjs/toolkit";
import specReducer from "./specStore";
import logger from "redux-logger";

export const store = configureStore({
  reducer: {
    spec: specReducer,
  },
  middleware: (base) => base().concat(logger),
});
