import { counterModel } from "./counter";
import { configModel } from "./config";

export interface RootModel {
  counter: typeof counterModel;
  config: typeof configModel;
}

export const models: RootModel = { counter: counterModel, config: configModel };
