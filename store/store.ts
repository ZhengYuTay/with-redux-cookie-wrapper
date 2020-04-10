import { init, RematchRootState, RematchDispatch, Plugin } from "@rematch/core";
import immerPlugin from "@rematch/immer";
import { models, RootModel } from "./models";
import { MakeStore } from "next-redux-wrapper";

const immer = immerPlugin();

export const createStore: MakeStore = (initialState, ctx) => {
  const rematchOptions = {
    models,
    redux: { initialState },
    plugins: [immer],
  };

  const store = init(rematchOptions);

  return store;
};

export type Dispatch = RematchDispatch<RootModel>;
export type iRootState = RematchRootState<RootModel>;
