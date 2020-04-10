export type CounterState = number;

export const counterModel = {
  state: 0,
  reducers: {
    increment: (state: CounterState, payload: number): CounterState =>
      state + payload,
  },
};
