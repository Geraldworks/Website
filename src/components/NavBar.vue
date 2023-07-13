<script>
import { useTheme } from "vuetify";
import MobileIcon from "./MobileIcon.vue";

// When the width is smaller than 640, we will modify the nav bar lay out

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
      drawer: false,
      items: [
        {
          title: "Home",
          icon: "mdi-home",
          func: this.goToHome,
        },
        {
          title: "About",
          icon: "mdi-account-outline",
          func: this.goToAbout,
        },
        {
          title: "Skills",
          icon: "mdi-chart-timeline-variant",
          func: this.goToSkills,
        },
        {
          title: "Projects",
          icon: "mdi-laptop",
          func: this.goToHome,
        },
        {
          title: "Contact",
          icon: "mdi-email-outline",
          func: this.goToContact,
        },
      ],
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
    goToContact() {
      this.$router.push("#contact");
    },
  },
  components: {
    MobileIcon,
  },
};
</script>

<template>
  <v-app-bar class="text-h4" :elevation="5" justify-content="center">
    <v-app-bar-nav-icon
      @click.stop="drawer = !drawer"
      :disabled="!$vuetify.display.mobile"
    ></v-app-bar-nav-icon>

    <v-container class="d-flex justify-center">
      <div v-show="$vuetify.display.mobile" class="text-body-2">WELCOME</div>

      <div v-show="!$vuetify.display.mobile">
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
        <v-btn
          :class="{ darkHover: isDarkMode, lightHover: !isDarkMode }"
          @click="goToContact"
          >Contact</v-btn
        >
      </div>
    </v-container>
    <v-app-bar-nav-icon
      transition="fade-transition"
      class="themes"
      @click="changeTheme()"
      icon="mdi-theme-light-dark"
    ></v-app-bar-nav-icon>
  </v-app-bar>
  <v-navigation-drawer
    v-model="drawer"
    location="bottom"
    temporary
    :width="$vuetify.display.width < 502 ? 240 : 130"
  >
    <v-container class="d-flex justify-center flex-wrap align-center">
      <v-col v-for="{ title, icon, func } in items"
        ><MobileIcon
          :funcs="
            () => {
              func();
              drawer = !drawer;
            }
          "
          :icon="icon"
          >{{ title }}</MobileIcon
        ></v-col
      >
    </v-container>
  </v-navigation-drawer>
</template>

<style>
.darkHover:hover {
  background-color: #296a7a;
}
.lightHover:hover {
  background-color: #85c6d6;
}
</style>
