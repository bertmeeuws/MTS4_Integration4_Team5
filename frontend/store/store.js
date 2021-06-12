import { createStore, action, persist } from "easy-peasy";

export const model = {
  //STATE
  route: 0,
  user: null,
  profile: null,

  //MUTATIONS

  changeUser: action((state, payload) => {
    state.user = payload;
  }),

  changeProfilePicture: action((state, payload) => {
    state.profile.profile_picture = payload;
  }),

  changeRoute: action((state, payload) => {
    state.route.id = payload;
  }),

  addToDo: action((state, payload) => {
    state.todos.items.push(payload);
  }),
};

export const store = createStore(
  persist(model, {
    storage: "localStorage",
  })
);
