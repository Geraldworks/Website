<script>
import NavBar from "@/components/NavBar.vue";
import Home from "@/components/Home.vue";
import About from "@/components/About.vue";
import Skills from "@/components/Skills.vue";
import Scroll from "@/components/Scroll.vue";
import Footer from "@/components/Footer.vue";
import Leet from "@/components/Leet.vue";

export default {
  components: {
    NavBar,
    Home,
    About,
    Skills,
    Footer,
    Leet,
  },
};
</script>

<template>
  <v-app>
    <span id="home"></span>
    <NavBar />
    <v-main>
      <v-container class="mx-auto">
        <!-- <NavBar /> -->
        <v-col>
          <Home />
          <About id="about" />
          <Skills />
          <Leet />
        </v-col>
      </v-container>
    </v-main>
    <Footer id="footer" />
  </v-app>
</template>

<style></style>
