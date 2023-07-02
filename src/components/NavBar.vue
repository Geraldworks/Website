<script>
import { useTheme } from "vuetify";

export default {
  setup() {
    const theme = useTheme();

    return {
      theme,
    };
  },
  // Vue Store for light mode and darkmode
  // vue router using the components to achieve highlighting

  data() {
    return {
      isDarkMode: true,
    };
  },
  methods: {
    changeTheme() {
      this.$store.commit("toggleTheme");
      this.theme.global.name.value = this.$store.state.theme;
      this.isDarkMode = !this.isDarkMode;
    },
  },
};

// add an on Toggle Method
</script>

<template>
  <v-app-bar class="text-h4" :elevation="5" justify-content="center">
    <v-app-bar-nav-icon icon></v-app-bar-nav-icon>
    <v-container grid-list-md class="d-flex justify-center">
      <v-btn
        :class="{ darkHover: isDarkMode, lightHover: !isDarkMode }"
        href="#home"
        >Home</v-btn
      >
      <v-btn
        :class="{ darkHover: isDarkMode, lightHover: !isDarkMode }"
        href="#about"
        >About</v-btn
      >
      <v-btn
        :class="{ darkHover: isDarkMode, lightHover: !isDarkMode }"
        href="#skills"
        >Skills</v-btn
      >
      <v-btn
        :class="{ darkHover: isDarkMode, lightHover: !isDarkMode }"
        class="text-decoration-underline"
        >Projects</v-btn
      >
      <v-btn
        :class="{ darkHover: isDarkMode, lightHover: !isDarkMode }"
        href="#contact"
        >Contact</v-btn
      >
    </v-container>
    <v-app-bar-nav-icon
      transition="fade-transition"
      class="themes"
      @click="changeTheme()"
      icon="mdi-theme-light-dark"
    ></v-app-bar-nav-icon>
  </v-app-bar>
</template>

<style>
.darkHover:hover {
  background-color: #296a7a;
}
.lightHover:hover {
  background-color: #85c6d6;
}
</style>
