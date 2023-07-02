<script>
import NavBar from "@/components/NavBar.vue";
import Home from "@/components/Home.vue";
import About from "@/components/About.vue";
import Skills from "@/components/Skills.vue";
import Scroll from "@/components/Scroll.vue";

export default {
  components: {
    NavBar,
    Home,
    About,
    Skills,
    Scroll,
  },
};
</script>

<template>
  <v-app>
    <NavBar />
    <v-main>
      <v-container class="mx-auto">
        <v-col>
          <Home />
          <Scroll />
          <About />
          <Skills />
        </v-col>
      </v-container>
    </v-main>
  </v-app>
</template>

<style></style>
