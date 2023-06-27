import { createSlice } from "@reduxjs/toolkit";
import { PURGE } from "redux-persist";

// 초기값 설정
const initialState = {
  number: 0,
};

export const counterSlice = createSlice({
  name: "counter", // slice 이름
  initialState, // 초기값 (initialState 객체 안에 꼭 작성)
  // reducer 객체
  reducers: {
    // aciton과 reducer 로직
    initCounter: (state) => {
      state.number = 0;
    },
    increase: (state) => {
      state.number++;
    },
    decrease: (state) => {
      state.number--;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(PURGE, () => initialState);
  }, // 얘네 추가해줘야 작동함
});

// 전부 다 export 해줘야 됨
export const { initCounter, increase, decrease } = counterSlice.actions;

export default counterSlice.reducer;
