<script>
import { ref } from "vue";
import { useElementVisibility } from "@vueuse/core";
import Scroll from "./Scroll.vue";

/*
When the screen size is smaller than 860, we will modify the home component layout
*/

export default {
  setup() {
    const target = ref(null);
    const targetIsVisible = useElementVisibility(target);

    return {
      target,
      targetIsVisible,
    };
  },
  data() {
    return {
      showComponents: false,
    };
  },
  watch: {
    targetIsVisible(value) {
      this.$store.commit("toggleVisibility", value);
      if (!this.showComponents && value) {
        this.showComponents = true;
      }
    },
  },
  components: {
    Scroll,
  },
  computed: {
    colClassObject() {
      return {
        "align-center": this.$vuetify.display.width < 880,
        "flex-column": this.$vuetify.display.width < 880,
      };
    },
    wordsClassObject() {
      return {
        "pr-12": this.$vuetify.display.width >= 880,
        "pt-12": this.$vuetify.display.width >= 880,
      };
    },
  },
};
</script>

<template>
  <v-container class="py-auto">
    <v-col class="d-flex justify-center align-top" :class="colClassObject">
      <div class="intros" :class="wordsClassObject">
        <div
          :class="{ 'top-down-animation': showComponents }"
          style="visibility: hidden"
        >
          <h1 ref="target" class="text-h3 font-weight-bold">
            Hi! I'm Gerald! &#128516;
          </h1>
          <h3 class="pt-1">Penultimate Year Student @NUS</h3>
          <p class="pt-4">
            Creating impact with data, visualisations and machine learning.
          </p>
          <p class="font-italic">Oops... video games too...</p>
          <p class="pt-4"></p>
        </div>
        <div
          class="d-flex justify-start"
          :class="{
            'bottom-up-animation':
              showComponents && $vuetify.display.width >= 880,  
            'top-down-animation':
              showComponents && $vuetify.display.width < 880,
          }"
          style="visibility: hidden"
        >
          <v-btn
            class="mr-5"
            icon
            href="https://www.linkedin.com/in/gerald-ho-1ba428240/"
            target="_blank"
          >
            <v-icon
              icon="mdi-linkedin"
              size="large"
              :class="{
                linkedin: this.$store.state.theme === 'lightTheme',
              }"
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
        class="rounded-circle borders intros"
        :class="{
          'top-down-animation': showComponents,
          'mt-4': $vuetify.display.width < 880,
        }"
        style="visibility: hidden"
      ></v-img>
    </v-col>
    <Scroll
      :class="{ 'fade-in-animation': showComponents }"
      style="visibility: hidden"
    />
  </v-container>

  <v-expand-transition>
    <v-btn
      v-show="!$store.state.visible"
      color="primary"
      id="btn-location"
      round
      icon="mdi-chevron-up"
      @click="this.$router.push('#home')"
      ><v-icon icon="mdi-chevron-up"></v-icon
    ></v-btn>
  </v-expand-transition>
</template>

<style scoped>
.borders {
  border: solid 1px #00004f;
}

.linkedin {
  color: #0077b5;
}

#btn-location {
  position: fixed;
  display: block;
  bottom: 7%;
  right: 3%;
  z-index: 1;
}

.top-down-animation {
  animation-name: top-down;
  animation-duration: 1.2s;
  animation-delay: 0.3s;
  visibility: hidden;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  position: relative;
}

.bottom-up-animation {
  animation-name: bottom-up;
  animation-duration: 1.2s;
  animation-delay: 0.9s;
  visibility: hidden;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  position: relative;
}

.fade-in-animation {
  animation-name: fade-in;
  animation-duration: 3s;
  animation-delay: 2s;
  visibility: hidden;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  position: relative;
}

.stop-animation {
  animation: none;
}

@keyframes top-down {
  0% {
    top: -100px;
    opacity: 0;
  }
  100% {
    visibility: visible;
    top: 0px;
    opacity: 1;
  }
}

@keyframes bottom-up {
  0% {
    bottom: -50px;
    opacity: 0;
  }
  100% {
    bottom: 0px;
    opacity: 1;
    visibility: visible;
  }
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
    visibility: visible;
  }
}
</style>
