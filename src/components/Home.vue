<template>
  <v-container>
    <v-col class="d-flex justify-center align-top">
      <div class="pr-12 pt-12">
        <h1 class="text-h3 font-weight-bold">Hi! I'm Gerald! &#128516;</h1>
        <h3 class="pt-1">Penultimate Year Student @NUS</h3>
        <p class="pt-4">
          Creating impact with data, visualisations and machine learning.
        </p>
        <p class="font-italic">Oops... video games too...</p>
        <p class="pt-4"></p>
        <div class="d-flex justify-start">
          <v-btn
            class="mr-5"
            icon
            href="https://www.linkedin.com/in/gerald-ho-1ba428240/"
            target="_blank"
          >
            <v-icon
              icon="mdi-linkedin"
              size="large"
              :class="{ linkedin: this.$store.state.theme === 'lightTheme' }"
            ></v-icon>
          </v-btn>
          <v-btn icon href="https://github.com/Geraldworks" target="_blank">
            <v-icon icon="mdi-github" size="large"></v-icon>
          </v-btn>
        </div>
      </div>

      <v-img
        aspect-ratio="1/1"
        max-width="250"
        src="src/assets/images/me.jpg"
        class="rounded-circle borders"
      ></v-img>
    </v-col>
  </v-container>
</template>

<style>
.borders {
  border: solid 1px #00004f;
}

.linkedin {
  color: #0077b5;
}
</style>
