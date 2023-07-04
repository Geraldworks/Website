import { createApp } from "vue";
import App from "./App.vue";

// Vue Router
import router from "./route";

// Vuex
import store from "./store";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

// Vuetify Themes
const lightTheme = {
  dark: false,
  colors: {
    background: "#F4F5FA",
    surface: "#FFFFFF",
  },
};

// Material Design Icons
import "@mdi/font/css/materialdesignicons.css";

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: "mdi",
  },
  theme: {
    defaultTheme: store.state.theme,
    themes: {
      lightTheme,
    },
  },
  display: {
    mobileBreakpoint: 650,
    // can decide to include multiple thresholds in future
  },
});

createApp(App).use(vuetify).use(store).use(router).mount("#app");
