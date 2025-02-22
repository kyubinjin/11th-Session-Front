// store
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

import { counterSlice } from "./counterSlice";
import { userSlice } from "./userSlice";

const reducers = combineReducers({
  counter: counterSlice.reducer,
  user: userSlice.reducer,
<<<<<<< HEAD
}); // : 앞에 있는 이름은 아무거나 와도 되지만 뒤에 있는 건 받아와야 하는 함수
=======
});
>>>>>>> 5f203ca49e4bcc0ca53c9ce0ae58fd33448dac41

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
});
