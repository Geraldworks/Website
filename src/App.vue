<script>
import NavBar from "@/components/NavBar.vue";
import Home from "@/components/Home.vue";
import About from "@/components/About.vue";
import Skills from "@/components/Skills.vue";
import Projects from "@/components/Projects.vue";
import Contact from "@/components/Contact.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    NavBar,
    Home,
    About,
    Skills,
    Projects,
    Contact,
    Footer,
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
          <v-divider></v-divider>
          <Projects />
          <v-divider></v-divider>
          <Contact />
        </v-col>
      </v-container>
    </v-main>
    <Footer id="footer" />
  </v-app>
</template>

<style></style>
