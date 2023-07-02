import { createStore } from "vuex";
import createPersisistedState from 'vuex-persistedstate'

const store = createStore({
  plugins: [createPersisistedState({
    storage: window.sessionStorage,
  })],
  state() {
    return {
      theme: "dark",
    };
  },
  mutations: {
    toggleTheme(state) {
      state.theme = state.theme === "dark" ? "lightTheme" : "dark";
    },
  },
});

export default store;
