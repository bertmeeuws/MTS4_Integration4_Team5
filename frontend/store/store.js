import { createStore, action, persist } from "easy-peasy";

const model = {
  todos: {
    items: ["Create store", "Wrap application", "Use store"],
    add: action((state, payload) => {
      state.items.push(payload);
    }),
  },
};

export const store = createStore(
  persist(model, {
    storage: "localStorage",
  })
);
