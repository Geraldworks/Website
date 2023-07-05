<script>
import Flashcards from "./Flashcards.vue";

export default {
  data() {
    return {};
  },
  methods: {
    showDisplay() {
      console.log(this.$vuetify.display.width);
    },
  },
  components: {
    Flashcards,
  },
};
</script>

<template>
  <div class="text-h5 text-center font-weight-bold mt-4 mb-4" id="about">
    About
    <p class="text-subtitle-2">Interests and Hobbies</p>
  </div>
  <Flashcards/>
</template>
