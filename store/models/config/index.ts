import _ from "lodash";

interface Config {
  importantStuff: "en" | "my";
  count: number;
}

const initialState: Config = {
  importantStuff: "en",
  count: 0,
};

export const configModel = {
  state: initialState,
  reducers: {
    updateConfig: (state: Config, update: Partial<Config>) => {
      return _.merge(state, update);
    },
  },
};
