import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ICounterState {
  counter: number;
}

const initialState: ICounterState = {
  counter: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incrementByAmount: (store, action: PayloadAction<number>) => {
      store.counter = action.payload;
    },
  },
});

export const counterActions = counterSlice.actions;

export const store = configureStore({
  reducer: { counter: counterSlice.reducer },
});

export type IStore = ReturnType<typeof store.getState>;
