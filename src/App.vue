<script>
import NavBar from "@/components/NavBar.vue";
import Home from "@/components/Home.vue";
import About from "@/components/About.vue";
import Skills from "@/components/Skills.vue";
import Footer from "@/components/Footer.vue";
import Contact from "@/components/Contact.vue";

export default {
  components: {
    NavBar,
    Home,
    About,
    Skills,
    Footer,
    Contact,
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
          <v-divider></v-divider>
          <About />
          <v-divider></v-divider>
          <Skills />
          <!-- Project -->
          <v-divider></v-divider>
          <Contact />
        </v-col>
      </v-container>
    </v-main>
    <Footer id="footer" />
  </v-app>
</template>

<style></style>
