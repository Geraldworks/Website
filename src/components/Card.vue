<script>
// insert text as a slot
import { ref } from "vue";
import { useElementSize } from "@vueuse/core";

export default {
  setup() {
    const el = ref(null);
    const { width, height } = useElementSize(el);
    return { el, width, height };
  },
  props: ["imagePath", "title"],
  emits: ["cardResized"],
  watch: {
    height(newValue) {
      this.$emit("cardResized", newValue);
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
    style="max-width: 1000px; max-height: 300px; position: absolute"
    :title="title"
    ><v-img :src="imagePath" id="c1"></v-img
    ><v-card-text id="c2"><slot></slot></v-card-text
  ></v-card>
</template>

<style>
#c1,
#c2 {
  width: 50%;
  height: 50%;
}
</style>
