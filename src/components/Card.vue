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
  props: ["imagePath", "header"],
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
    style="max-height: 330px; position: absolute"
    :width="windowSizeToUse"
    ><v-img
      :src="imagePath"
      id="c1"
      height="300"
      cover
      v-show="windowWidth >= 650"
    ></v-img
    ><v-card-text id="c2"
      ><div class="d-flex justify-center flex-column align-center">
        <div class="text-h5">{{ header }}</div>
        <v-divider thickness="6"></v-divider>
        <slot></slot>
      </div> </v-card-text
  ></v-card>
</template>

<style>
#c1,
#c2 {
  width: 50%;
  height: 50%;
}
</style>
