import { createStore, action, persist } from "easy-peasy";

export const model = {
  todos: {
    items: ["Create store", "Wrap application", "Use store"],
  },
  addToDo: action((state, payload) => {
    state.todos.items.push(payload);
  }),
  route: {
    id: 0,
    changeRoute: action((state, payload) => {
      state.route.id = payload;
    }),
  },
  user: {
    user: null,
    changeUser: action((state, payload) => {
      state.user.user = payload;
    }),
  },
  profile: {
    profile_picture: null,
    //Base64 image
    changeProfilePicture: action((state, payload) => {
      state.profile.profile_picture = payload;
    }),
  },
};

export const store = createStore(
  persist(model, {
    storage: "localStorage",
  })
);
