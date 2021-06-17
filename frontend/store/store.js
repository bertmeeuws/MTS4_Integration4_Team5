import { createStore, action, persist } from "easy-peasy";

export const model = {
  //STATE
  route: 0,
  user: null,
  profile: null,
  game_data: null,
  current_gamer: null,
  followers: 100,

  answer: null,

  //MUTATIONS

  setAnswer: action((state, payload) => {
    state.answer = payload;
  }),

  setFollowers: action((state, payload) => {
    state.followers = payload;
  }),

  changeGamer: action((state, payload) => {
    state.current_gamer = payload;
  }),

  changeUser: action((state, payload) => {
    state.user = payload;
  }),

  setGameData: action((state, payload) => {
    state.game_data = payload;
  }),

  changeProfilePicture: action((state, payload) => {
    state.profile.profile_picture = payload;
  }),

  changeRoute: action((state, payload) => {
    state.route = payload;
  }),

  nextRoute: action((state, payload) => {
    state.route += 1;
  }),

  addToDo: action((state, payload) => {
    state.todos.items.push(payload);
  }),
};

/*
export const store = createStore(
  persist(model, {
    storage: "localStorage",
  })
);
*/

export const store = createStore(model);
