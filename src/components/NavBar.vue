<script>
import { useTheme } from "vuetify";

export default {
  setup() {
    const theme = useTheme();
    return {
      theme,
    };
  },

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
    goToHome() {
      this.$router.push("#home");
    },
    goToAbout() {
      this.$router.push("#about");
    },
    goToSkills() {
      this.$router.push("#skills");
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
        @click="goToHome"
        >Home</v-btn
      >
      <v-btn
        :class="{ darkHover: isDarkMode, lightHover: !isDarkMode }"
        @click="goToAbout"
        >About</v-btn
      >
      <v-btn
        :class="{ darkHover: isDarkMode, lightHover: !isDarkMode }"
        @click="goToSkills"
        >Skills</v-btn
      >
      <v-btn :class="{ darkHover: isDarkMode, lightHover: !isDarkMode }"
        >Projects</v-btn
      >
      <v-btn :class="{ darkHover: isDarkMode, lightHover: !isDarkMode }"
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
