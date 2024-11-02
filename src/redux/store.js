import { combineReducers, configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import newsReducer from "./newsReducer";
import feedReducer from "./myFeed";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "preferences",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, feedReducer);

const reducer = combineReducers({
  newsReducer,
  feedReducer: persistedReducer,
});

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export const persistor = persistStore(store);
