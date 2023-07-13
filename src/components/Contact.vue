<template>
  <div class="text-h5 text-center font-weight-bold mt-4" id="contact">
    Contact Me
    <p class="text-subtitle-2">Get in Touch</p>
  </div>
  <div class="d-flex justify-center mt-4">
    <div id="linkedin">
      <v-btn
        icon
        href="https://www.linkedin.com/in/gerald-ho-1ba428240/"
        target="_blank"
        class="mr-2"
      >
        <v-icon
          icon="mdi-linkedin"
          size="large"
          :class="{
            linkedin: this.$store.state.theme === 'lightTheme',
          }"
        ></v-icon>
      </v-btn>
    </div>
    <div id="github">
      <v-btn
        icon
        href="https://github.com/Geraldworks"
        target="_blank"
        class="ml-2"
      >
        <v-icon icon="mdi-github" size="large"></v-icon>
      </v-btn>
    </div>
  </div>
</template>

<style>
.linkedin {
  color: #0077b5;
}

#linkedin::before {
  content: "LinkedIn";
  margin-right: 10px;
  font-weight: 500;
}

#github::after {
  content: "GitHub";
  margin-left: 10px;
  font-weight: 500;
}
</style>
