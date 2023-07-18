<script>
export default {
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
    :dot-color="this.$store.state.theme === 'dark' ? '#ffb74d' : '#6200ee'"
  >
    <v-card ref="el" max-width="300">
      <v-img :src="srcImg" cover></v-img>
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
  </v-timeline-item>
</template>
