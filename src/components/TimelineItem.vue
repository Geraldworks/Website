<script>
import { ref } from "vue";
import { useElementSize } from "@vueuse/core";
export default {
  setup() {
    const el = ref(null);
    const { width, height } = useElementSize(el);
    return { el, width, height };
  },
  props: [
    "srcImg",
    "projectTitle",
    "projectDuration",
    "projectLink",
    "githubLink",
    "techStack",
  ],
  methods: {
    formatTech(techStack) {
      let out = "Tech Stack: ";
      for (let tech of techStack) {
        out += tech + ", ";
      }
      return out.slice(0, -2);
    },
  },
};
</script>

<template>
  <v-timeline-item
    id="i"
    :dot-color="this.$store.state.theme === 'dark' ? '#ffb74d' : '#6200ee'"
  >
    <v-card ref="el" max-width="450">
      <v-card-title class="font-weight-bold">{{ projectTitle }}</v-card-title>
      <v-card-subtitle class="font-italic">{{
        projectDuration
      }}</v-card-subtitle>
      <v-card-text><slot></slot></v-card-text>
      <v-card-text class="font-italic pt-0" v-show="techStack.length > 0">{{
        formatTech(techStack)
      }}</v-card-text>
      <!-- Show this only if have github link -->
      <v-card-text v-show="githubLink !== projectLink" class="pt-0"
        ><v-btn
          v-show="githubLink !== undefined"
          size="large"
          icon="mdi-github"
          :href="githubLink"
          target="_blank"
          class="text-subtitle-2 mr-2"
          density="comfortable"
          elevation="3"
        ></v-btn>
        <!-- Show this only if have project link -->
        <v-btn
          v-show="projectLink !== undefined"
          size="large"
          icon="mdi-link"
          :href="projectLink"
          target="_blank"
          class="text-subtitle-2"
          density="comfortable"
          elevation="3"
        ></v-btn
      ></v-card-text>
    </v-card>
    <template v-slot:opposite>
      <div>
        <img
          :src="srcImg"
          :height="180"
          :width="180"
          style="object-fit: cover; border: 1px solid black"
        />
      </div>
    </template>
    <v-spacer></v-spacer>
  </v-timeline-item>
</template>
