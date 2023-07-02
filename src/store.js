import { createStore } from "vuex";
import createPersisistedState from "vuex-persistedstate";

const store = createStore({
  plugins: [
    createPersisistedState({
      storage: window.sessionStorage,
    }),
  ],
  state() {
    return {
      theme: "dark",
      visible: true,
    };
  },
  mutations: {
    toggleTheme(state) {
      state.theme = state.theme === "dark" ? "lightTheme" : "dark";
    },
    toggleVisibility(state, value) {
      state.visible = value;
    },
  },
});

export default store;
