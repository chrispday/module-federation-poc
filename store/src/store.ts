import { configureStore, createReducer, PayloadAction } from "@reduxjs/toolkit";
import { counterUpdated } from "./actions";

export interface IStore {
  counter: number;
}

const defaultStore: IStore = {
  counter: 0,
};

const reducers: {
  [key: string]: (store: IStore, action: PayloadAction<any>) => void;
} = {};

reducers[counterUpdated.type] = (
  store,
  action: ReturnType<typeof counterUpdated>
) => {
  store.counter = action.payload;
};

export const createStore = (store: IStore = defaultStore) =>
  configureStore<IStore>({
    reducer: createReducer(store, reducers),
  });

export const store = createStore();
