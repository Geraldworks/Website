<script>
import { ref } from "vue";
import { useElementSize, useWindowSize } from "@vueuse/core";

export default {
  setup() {
    const el = ref(null);
    const { width, height } = useElementSize(el);
    const { width: windowWidth, height: windowHeight } = useWindowSize();
    return { el, width, height, windowWidth, windowHeight };
  },
  props: ["imagePath", "header", "show", "icon", "buttonText", "buttonIcon"],
  emits: ["cardResized"],
  watch: {
    height(newValue) {
      this.$emit("cardResized", newValue);
    },
  },
  computed: {
    windowSizeToUse() {
      let best = this.windowWidth - 100;
      return best > 900 ? 900 : best;
    },
  },
};
</script>

<template>
  <!-- Swap from beside to on top from desktop -> screen view-->
  <v-card
    border
    ref="el"
    elevation="5"
    class="d-flex"
    style="max-height: 500px; position: absolute; min-height: 300px"
    :width="windowSizeToUse"
    ><v-img
      :src="imagePath"
      id="c1"
      height="300"
      cover
      v-show="windowWidth >= 650"
    ></v-img
    ><v-card-text id="c2" style="text-align: center"
      ><v-icon :icon="icon" size="x-large"></v-icon>
      <div
        class="d-flex justify-center flex-column align-center mt-1"
        style="position: relative"
      >
        <div class="text-h5">{{ header }}</div>
        <v-divider thickness="6"></v-divider>
        <slot style="display: inline"></slot>
        <div class="mx-auto mt-3">
          <v-btn
            v-show="show"
            class="text-none text-subtitle-2 font-weight-bold"
            color="primary"
            size="small"
            variant="flat"
            download 
            href="/gerald_resume.pdf"
          >
            <v-icon :icon="buttonIcon"></v-icon>
            &nbsp; {{ buttonText }}
          </v-btn>
        </div>
      </div>
    </v-card-text></v-card
  >
</template>

<style>
#c1,
#c2 {
  width: 50%;
  height: 50%;
}
</style>
