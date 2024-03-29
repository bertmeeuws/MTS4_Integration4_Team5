import { createStore, action, persist } from "easy-peasy";

export const model = {
  //STATE
  route: 0,
  user: null,
  profile: null,
  game_data: null,
  // current_gamer: { name: "Bert", id: 37 },
  current_gamer: null,
  followers: 100,

  profile_picture: null,

  answer: null,

  //MUTATIONS

  setRouteAmount: action((state, payload) => {
    let route = state.route;
    route += payload;
    state.route = route;
  }),

  setProfileImage: action((state, payload) => {
    state.profile_picture = payload;
  }),

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

  previousRoute: action((state, payload) => {
    state.route -= 1;
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
